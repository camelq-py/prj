
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    course: "",
  });

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.course = formData.course ? "" : "Course selection is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted: ", formData);
      // Handle form submission
    }
    alert("Your registration is successful");
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 px-4 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transition transform duration-500 ease-in-out scale-100 hover:scale-105 mt-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
          Course Registration Form
        </h2>

        {/* Full Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition ease-in-out"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition ease-in-out"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        {/* Course Selection */}
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-600">
            Select a Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition ease-in-out"
          >
            <option value="">Choose a course</option>
            <option value="react">React</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="ui-ux">UI/UX Design</option>
          </select>
          {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center text-sm text-gray-600">
          By submitting, you agree to our terms and conditions.
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

