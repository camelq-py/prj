// src/components/RegisterPage.js
import React, { useState } from 'react';
import '../../src/styles/RegisterPage.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    trainingMode: '',
    course: ''
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
    if (!formData.course || formData.course === "Select Course") {
      alert("Please select a course.");
    }
    else if (!formData.trainingMode || formData.trainingMode === "Mode Of Training") {
      alert("Please select mode of training")
    }
    else {
      alert('Registration successful!');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: ''
      });
      
    }

    
  };

  return (
    <div className="register-page">
      <h2 className='register-heading'>Register for Course</h2>
      <form onSubmit={handleSubmit}>
        <input className='name-input' required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input className='email-input' required
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Your Mobile number"
        />
        <input className='email-input' required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        
        <select className='course-input' name='trainingMode' value={formData.trainingMode} onChange={handleChange} required>
          <option>Mode Of Training</option>
          <option value="Online Training">Online Training</option>
          <option value="ClassRoom Training">ClassRoom Training</option>
        </select>
        <br/>
        
        <select className='course-input' name='course' value={formData.course} onChange={handleChange} required>
          <option>Select Course</option>
          <option value="Python Fullstack">Python Fullstack</option>
          <option value="Java Fullstack">Java Fullstack</option>
          <option value=".Net Fullstack">.Net Fullstack</option>
          <option value="Testing">Testing</option>
          <option value="DevOps">DevOps</option>
          <option value="Databse">Database</option>

        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
