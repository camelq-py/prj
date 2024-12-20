
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PythonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mt-10">Python Training & Certification</h1>
        <p className="mt-4 text-lg sm:text-xl">Master Python and kick-start your career with our comprehensive training program</p>
        <img
          src="https://blog.accredian.com/wp-content/uploads/2019/04/Python-logo.jpg" // Replace with the correct path to your image
          alt="Python Logo"
          className="mx-auto mt-6 w-24 sm:w-32"
        />
      </section>

      {/* Course Highlights Section */}
      <section className="py-16 px-6 sm:px-8 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Course Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Fundamentals of IT</h3>
            <p className="mt-4 text-lg">Learn the core concepts of IT and technology fundamentals.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Basic Python</h3>
            <p className="mt-4 text-lg">Start from the basics and learn Python programming fundamentals.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Advanced Python</h3>
            <p className="mt-4 text-lg">Master advanced Python concepts for real-world applications.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Django Python Framework</h3>
            <p className="mt-4 text-lg">Learn Django, a powerful framework for web development with Python.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Python for DataScience</h3>
            <p className="mt-4 text-lg">Learn Python for data science, analysis, and machine learning.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">DevOps & Cloud for Python Dev</h3>
            <p className="mt-4 text-lg">Understand DevOps practices and cloud infrastructure for Python development.</p>
          </div>
        </div>
      </section>

      {/* Support & Placement and Course Details Section */}
      <section className="py-12 px-6 sm:px-8 flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Support & Placement */}
        <div className="w-full sm:w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Support & Placement</h2>
          <p className="text-center text-lg">24/7 Learning Support with Dedicated Mentors</p>
          <p className="text-center text-lg mt-2">Interviews, Jobs and Placement Support</p>
          <p className="text-center text-lg mt-2">70000+ Students Enrolled</p>
          <p className="text-center text-lg mt-2">4.9 Rating (800 Ratings)</p>
        </div>

        {/* Course Details */}
        <div className="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Course Details</h2>
          <p className="text-lg mb-4">Duration: 75 Days</p>
          <button className="mt-4 bg-blue-900 text-white py-2 px-6 rounded-lg shadow-md transition-all hover:bg-blue-700 w-full sm:w-auto">
            Schedule Online Demo
          </button>
        </div>
      </section>

      {/* Ready to Register Section */}
      <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Start Your Course?</h2>
        <p className="text-lg sm:text-xl">Register today and kickstart your career in tech!</p>
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

export default PythonPage;

