

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.subject = formData.subject ? "" : "Subject is required";
    tempErrors.message = formData.message ? "" : "Message is required";

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
    alert("Your details are received. We will update you soon.");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-8 px-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg transition transform duration-500 ease-in-out scale-100 hover:scale-105 mt-11"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
          Contact Us
        </h2>

        {/* Full Name & Email Address Side by Side */}
        <div className="mb-4 flex flex-col sm:flex-row sm:gap-4">
          <div className="w-full sm:w-1/2">
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
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
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
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>

        {/* Subject & Message Side by Side */}
        <div className="mb-4 flex flex-col sm:flex-row sm:gap-4">
          <div className="w-full sm:w-1/2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter subject"
            />
            {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
          </div>

          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition ease-in-out"
              placeholder="Enter your message"
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center text-sm text-gray-600">
          We value your privacy and will not share your information with third parties.
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
