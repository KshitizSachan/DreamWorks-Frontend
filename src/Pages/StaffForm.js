import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    staffno: "",
    brno: "",
    sex: "",
    mno1: "",
    bdate: "",
    salary: "",
    sposition: "",
    super_id: "",
    bonus: "",
    start_date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/apis/staff/register/", formData)
      .then((response) => {
        console.log(response);
        toast.success("Data sent successfully");
        setFormData({
          fname: "",
          staffno: "",
          brno: "",
          sex: "",
          mno1: "",
          bdate: "",
          salary: "",
          sposition: "",
          super_id: "",
          bonus: "",
          start_date: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error Occured");
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
<Navbar />
<form className="container mx-auto py-10" onSubmit={handleSubmit}>
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-5 text-white">Staff Registration</h1>
  </div>
  <div className="mb-4">
    <input
      className="border-2 border-gray-300 w-1/4 p-2 rounded-md m-2"
      type="text"
      placeholder="Enter Full Name"
      name="fname"
      value={formData.fname}
      onChange={handleInputChange}
    />
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="text"
      placeholder="Enter Staff Number"
      name="staffno"
      value={formData.staffno}
      onChange={handleInputChange}
    />
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="text"
      placeholder="Enter Position"
      name="sposition"
      value={formData.sposition}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="text"
      placeholder="Sex"
      name="sex"
      value={formData.sex}
      onChange={handleInputChange}
    />
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="date"
      placeholder="Date of birth"
      name="bdate"
      value={formData.bdate}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <input
      className="border-2 border-gray-300 p-2 w-1/2 rounded-md m-2"
      type="text"
      placeholder="Salary"
      name="salary"
      value={formData.salary}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="text"
      placeholder="Branch Number"
      name="brno"
      value={formData.brno}
      onChange={handleInputChange}
    />
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="text"
      placeholder="Telephone Number"
      name="mno1"
      value={formData.mno1}
      onChange={handleInputChange}
    />
    <input
      className="border-2 border-gray-300 p-2 w-1/4 rounded-md m-2"
      type="text"
      placeholder="Supervisor Id"
      name="super_id"
      value={formData.super_id}
      onChange={handleInputChange}
    />
  </div>
  <div className="mb-4">
    <input
      className="border-2 border-gray-300 p-2 w-1/3 rounded-md m-2"
      type="date"
      placeholder="Start Date"
      name="start_date"
      value={formData.start_date}
      onChange={handleInputChange}
    />
    <input
      className="border-2 border-gray-300 p-2 w-1/3 rounded-md m-2"
      type="text"
      placeholder="Manager Bonus"
      name="bonus"
      value={formData.bonus}
      onChange={handleInputChange}
    />
  </div>
  <div className="text-center">
  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>
      </div>
    </form>
    <Footer/>
</div>
  );
}

export default Form;