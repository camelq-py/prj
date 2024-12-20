
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mt-10">React JS Training & Certification</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Master React and kick-start your career with our comprehensive training program
        </p>
        <img
          src="https://banner2.cleanpng.com/20180410/dbq/avgagjntp.webp" // Replace with the correct path to your image
          alt="React Logo"
          className="mx-auto mt-6 w-32 sm:w-40 md:w-48"
        />
      </section>

      {/* Course Highlights Section */}
      <section className="py-12 px-6 sm:px-8 text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Course Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-semibold text-lg">Fundamentals of IT</h3>
            <p className="mt-2 text-base">Learn the core concepts of IT and technology fundamentals.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-semibold text-lg">Foundations of Web (HTML, CSS, BootStrap)</h3>
            <p className="mt-2 text-base">Build the foundations of modern web development.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-semibold text-lg">JavaScript & TypeScript</h3>
            <p className="mt-2 text-base">Dive deep into JavaScript and TypeScript programming languages.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-semibold text-lg">React Framework</h3>
            <p className="mt-2 text-base">Master ReactJS and build modern web applications.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-semibold text-lg">DevOps & Cloud</h3>
            <p className="mt-2 text-base">Learn DevOps practices and cloud-based development strategies.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="font-semibold text-lg">Project & Task Based Learning</h3>
            <p className="mt-2 text-base">Work on real-life projects and task-based learning.</p>
          </div>
        </div>
      </section>

      {/* Grouped Support & Placement and Course Details Section */}
      <section className="py-12 px-6 sm:px-8 flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Support & Placement */}
        <div className="w-full sm:w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Support & Placement</h2>
          <p className="text-center text-lg">24/7 Learning Support with Dedicated Mentors</p>
          <p className="text-center text-lg mt-2">Interviews, Jobs and Placement Support</p>
          <p className="text-center text-lg mt-2">50000+ Students Enrolled</p>
          <p className="text-center text-lg mt-2">4.7 Rating (500 Ratings)</p>
        </div>

        {/* Course Details */}
        <div className="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Course Details</h2>
          <p className="text-lg mb-4">Duration: 60 Days</p>
          <button className="mt-4 bg-blue-900 text-white py-2 px-6 rounded-lg shadow-md transition-all hover:bg-blue-700 w-full sm:w-auto">
            Schedule Online Demo
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 sm:px-8 bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Choose CamelQ?</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="max-w-xs">
            <h3 className="font-semibold text-lg">ReactJS Developer</h3>
            <p className="mt-2 text-base">Become a ReactJS expert and create dynamic web applications.</p>
          </div>
          <div className="max-w-xs">
            <h3 className="font-semibold text-lg">UI Developer</h3>
            <p className="mt-2 text-base">Learn to build intuitive user interfaces with ReactJS.</p>
          </div>
          <div className="max-w-xs">
            <h3 className="font-semibold text-lg">Full Stack Engineer</h3>
            <p className="mt-2 text-base">Become proficient in both front-end and back-end development.</p>
          </div>
        </div>
      </section>

      {/* Ready to Start Your Course Section */}
      <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Start Your Course?</h2>
        <p className="text-xl sm:text-2xl">Register today and kickstart your career in tech!</p>
        <button
          className="mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition-colors duration-300 w-full sm:w-auto"
          onClick={() => { navigate("/registerform"); }}
        >
          Register Now
        </button>
      </section>
    </div>
  );
};

export default ReactPage;
