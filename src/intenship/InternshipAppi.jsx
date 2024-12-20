
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InternshipAppli = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    internshipType: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    internshipType: "",
    coverLetter: "",
  });

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.phone = /^[0-9]{10}$/.test(formData.phone) ? "" : "Phone number is invalid";
    tempErrors.internshipType = formData.internshipType ? "" : "Please select an internship type";
    tempErrors.coverLetter = formData.coverLetter ? "" : "Cover Letter is required";

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
      // Handle form submission (e.g., sending data to an API or database)
    }
    alert("Your internship application was successful");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-8 px-4 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl transition-transform transform duration-500 ease-in-out scale-80 hover:scale-100 mt-10"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
          Internship Application Form
        </h2>

        {/* Full Name & Email Side by Side */}
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>

        {/* Phone Number & Internship Type Side by Side */}
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
          <div className="w-full">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div className="w-full">
            <label htmlFor="internshipType" className="block text-sm font-medium text-gray-600">Internship Type</label>
            <select
              id="internshipType"
              name="internshipType"
              value={formData.internshipType}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
            >
              <option value="">Select an Internship</option>
              <option value="react">ReactJS Internship</option>
              <option value="python">Python Internship</option>
              <option value="java">Java Internship</option>
              <option value="uiux">UI/UX Designer Internship</option>
            </select>
            {errors.internshipType && <p className="text-red-500 text-xs">{errors.internshipType}</p>}
          </div>
        </div>

        {/* Cover Letter */}
        <div className="mb-4">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-600">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
            placeholder="Write your cover letter"
          />
          {errors.coverLetter && <p className="text-red-500 text-xs">{errors.coverLetter}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Apply for Internship
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternshipAppli;
