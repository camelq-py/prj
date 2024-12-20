import React from 'react';
import { useNavigate } from 'react-router-dom';

const UIUXDesignPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white text-center py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mt-10">UI/UX Design Course Training</h1>
        <p className="mt-4 text-xl sm:text-2xl max-w-2xl mx-auto">
          Learn the skills to become a top-notch UI/UX Designer and boost your career!
        </p>
        <img
          src="https://proso.ai/wp-content/uploads/2022/06/ui-and-ux.jpg" // Replace with the correct path to your image
          alt="UI/UX Logo"
          className="mx-auto mt-6 w-32 sm:w-40 md:w-48"
        />
      </section>

      {/* Course Highlights Section */}
      <section className="py-16 px-6 sm:px-8 text-center bg-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Course Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Foundations of Design</h3>
            <p className="mt-4 text-lg">Learn the core principles of design that are essential to creating intuitive, beautiful user interfaces.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Design Thinking</h3>
            <p className="mt-4 text-lg">Master the iterative problem-solving process that puts the user at the center of the design process.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Figma for UX</h3>
            <p className="mt-4 text-lg">Learn to use Figma, a powerful design tool, to create interactive UI/UX prototypes and wireframes.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">UX Portfolio</h3>
            <p className="mt-4 text-lg">Build a strong portfolio that demonstrates your design process, showcasing your skills and creativity.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Resume Preparation</h3>
            <p className="mt-4 text-lg">Prepare a professional resume to help you land your dream UI/UX design job.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">User Research Methods</h3>
            <p className="mt-4 text-lg">Learn various user research techniques that help you understand the needs and behaviors of users to create better experiences.</p>
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

export default UIUXDesignPage;
