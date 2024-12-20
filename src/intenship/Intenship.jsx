
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InternshipPrograms = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white text-center py-16 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mt-5 sm:text-3xl md:text-4xl">Internship Programs</h1>
        <p className="mt-4 text-xl sm:text-lg">Kickstart your career with hands-on internships in leading technologies!</p>
      </section>

      {/* Internship Roles Section */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6 sm:text-2xl">Available Internship Roles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* React Developer */}
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold sm:text-xl">React Developer</h3>
            <p className="mt-4 text-lg sm:text-base">Join our internship program to build responsive and interactive web applications using React.js.</p>
            <ul className="mt-4 text-left space-y-2">
              <li>- Learn React concepts and JSX</li>
              <li>- Work with state management libraries like Redux</li>
              <li>- Collaborate in real-time development projects</li>
            </ul>
            <button className="mt-4 bg-indigo-900 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300" onClick={() => { navigate("/internshipsform") }}>Apply Now</button>
          </div>

          {/* Python Developer */}
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold sm:text-xl">Python Developer</h3>
            <p className="mt-4 text-lg sm:text-base">Gain real-world experience working with Python for web development, data science, and automation.</p>
            <ul className="mt-4 text-left space-y-2">
              <li>- Work with Python frameworks like Django</li>
              <li>- Learn how to build scalable backend systems</li>
              <li>- Explore data analysis with Python libraries</li>
            </ul>
            <button className="mt-4 bg-indigo-900 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300" onClick={() => { navigate("/internshipsform") }}>Apply Now</button>
          </div>

          {/* Java Developer */}
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold sm:text-xl">Java Developer</h3>
            <p className="mt-4 text-lg sm:text-base">Dive into Java development for enterprise applications and build scalable backend systems with Spring Boot.</p>
            <ul className="mt-4 text-left space-y-2">
              <li>- Work with Java, SpringBoot, and Hibernate</li>
              <li>- Develop secure and efficient applications</li>
              <li>- Collaborate on full-stack development projects</li>
            </ul>
            <button className="mt-4 bg-indigo-900 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300" onClick={() => { navigate("/internshipsform") }}>Apply Now</button>
          </div>

          {/* UI/UX Developer */}
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold sm:text-xl">UI/UX Developer</h3>
            <p className="mt-4 text-lg sm:text-base">Enhance your design skills and work on developing user-friendly interfaces and experiences using tools like Figma.</p>
            <ul className="mt-4 text-left space-y-2">
              <li>- Work with Figma, Sketch, and Adobe XD</li>
              <li>- Create wireframes, prototypes, and user flows</li>
              <li>- Focus on usability and design thinking</li>
            </ul>
            <button className="mt-4 bg-indigo-900 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300" onClick={() => { navigate("/internshipsform") }}>Apply Now</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-gray-200 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6 sm:text-2xl">Why Choose Our Internship Programs?</h2>
        <div className="flex flex-wrap justify-center space-x-12 sm:space-x-6 md:space-x-8">
          <div className="w-72 mb-6 sm:w-64">
            <h3 className="font-semibold text-xl sm:text-lg">Industry-Ready Skills</h3>
            <p className="mt-2 text-lg sm:text-base">Gain hands-on experience in real-world projects that are aligned with industry standards.</p>
          </div>
          <div className="w-72 mb-6 sm:w-64">
            <h3 className="font-semibold text-xl sm:text-lg">Mentorship from Experts</h3>
            <p className="mt-2 text-lg sm:text-base">Work closely with experienced professionals to enhance your skills and career prospects.</p>
          </div>
          <div className="w-72 mb-6 sm:w-64">
            <h3 className="font-semibold text-xl sm:text-lg">Placement Assistance</h3>
            <p className="mt-2 text-lg sm:text-base">Get job placements and interviews with top tech companies after completing the internship.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6 sm:text-2xl">What Our Interns Say</h2>
        <div className="flex justify-center space-x-12 sm:space-x-6">
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50 sm:w-72">
            <p className="italic">"This internship program provided me with hands-on experience that helped me land my first React Developer job!"</p>
            <p className="mt-4 font-semibold">Ram krishna</p>
            <p>React Developer Intern</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-gray-50 sm:w-72">
            <p className="italic">"I learned Python and Django through the internship, and now I am working as a Python Developer!"</p>
            <p className="mt-4 font-semibold">Venkatesh</p>
            <p>Python Developer Intern</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6 sm:text-2xl">Ready to Start Your Internship?</h2>
        <p className="text-xl sm:text-lg">Apply today and kickstart your career in tech!</p>
        <button className="mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition-colors duration-300" onClick={() => { navigate("/internshipsform") }}>Apply Now</button>
      </section>
    </div>
  );
};

export default InternshipPrograms;

