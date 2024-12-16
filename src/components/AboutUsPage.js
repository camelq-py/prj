// src/components/AboutUsPage.js
import React from 'react';
import '../../src/styles/AboutUsPage.css'
import { useNavigate } from 'react-router-dom';

function AboutUsPage() {
  const navigate = useNavigate();

  const handleViewCourses = () => {
    navigate('/courses')
  }
  return (
    <div className="about-us-page">
      <div className='about-us'>
      <h2>About Us</h2>w
      <p>
        At MS Technologies you are guaranteed best in class training as we team up the most efficient,
        professional and dedicated trainers who are subject matter experts in their respective area of specialization.
        We are a leading software training & placement office providing the best courses in the industry.</p>
        <button onClick={handleViewCourses}>
          View Courses
        </button>
    </div>
      </div>
      
  );
}

export default AboutUsPage;
