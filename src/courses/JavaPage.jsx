
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JavaPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mt-10">Java Training & Certification</h1>
        <p className="mt-4 text-lg sm:text-xl">Become a proficient Java developer and boost your career with our comprehensive training program</p>
        <img
          src="https://cdn-icons-png.flaticon.com/128/226/226777.png" // Replace with the correct path to your image
          alt="Java Logo"
          className="mx-auto mt-6 w-24 sm:w-32"
        />
      </section>

      {/* Course Highlights Section */}
      <section className="py-16 px-6 sm:px-8 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Course Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Fundamentals of IT</h3>
            <p className="mt-4 text-lg">Learn core IT concepts to lay a strong foundation for Java programming.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Core JAVA</h3>
            <p className="mt-4 text-lg">Master Java syntax, object-oriented programming (OOP) and core concepts.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Advanced JAVA</h3>
            <p className="mt-4 text-lg">Deep dive into advanced Java concepts such as collections, concurrency, and more.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">SpringBoot & MicroServices</h3>
            <p className="mt-4 text-lg">Learn how to develop Java-based web applications using SpringBoot and MicroServices architecture.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">DevOps & Cloud For JAVA</h3>
            <p className="mt-4 text-lg">Understand DevOps practices and cloud-based development environments for Java applications.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Java Web Development</h3>
            <p className="mt-4 text-lg">Learn how to build robust, dynamic websites and applications using Java technologies like JSP, Servlets, and Hibernate.</p>
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
          <p className="text-center text-lg mt-2">89000+ Students Enrolled</p>
          <p className="text-center text-lg mt-2">4.9 Rating (900 Ratings)</p>
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

export default JavaPage;
