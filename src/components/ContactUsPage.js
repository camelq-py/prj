// src/components/ContactUsPage.js
import React from 'react';
import '../../src/styles/ContactUsPage.css';
import { useState } from 'react';

function ContactUsPage() {

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && !/^[A-Za-z ]*$/.test(value)) {
      return;
    }
    
    if (name === 'mobile' && !/^[0-9]*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching us. You'll get the update soon.");
    
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-page">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us via the form below:</p>
      <form onSubmit={handleSubmit}>
        <input className='name' name='name' type="text" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
        <input className='email' name='mobile' type="tel" value={formData.mobile} placeholder="Your Mobile number" onChange={handleChange} required />
        <input className='email' name='email' type="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
        <textarea className='message' name='message' value={formData.message} placeholder="Your Message" rows={3} cols={30}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
