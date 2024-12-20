
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navi = useNavigate();
  const jobListings = [
    {
      title: 'Frontend Developer',
      description: 'Build and maintain the user interface for our web applications.',
      qualifications: [
        'Experience with HTML, CSS, and JavaScript',
        'Proficiency in React and other frontend frameworks',
        'Good understanding of responsive design',
      ],
      location: 'Remote',
    },
    {
      title: 'Backend Developer',
      description: 'Develop and maintain server-side logic and databases.',
      qualifications: [
        'Experience with Node.js or Python',
        'Knowledge of SQL and NoSQL databases',
        'Experience with cloud platforms like AWS or Azure',
      ],
      location: 'Hybrid',
    },
    {
      title: 'UI/UX Designer',
      description: 'Design intuitive and beautiful user interfaces for web and mobile apps.',
      qualifications: [
        'Experience with design tools like Figma, Sketch, or Adobe XD',
        'Understanding of user-centered design principles',
        'Portfolio showcasing UI/UX design work',
      ],
      location: 'In-office',
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-blue-300 py-16">
        <div className="container mx-auto text-center mt-5 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We're always looking for talented people who want to make an impact.
          </p>

          {/* Job Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Qualifications
                </h4>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {job.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
                <p className="text-gray-600 mb-4">Location: {job.location}</p>
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
                  onClick={() => {
                    navi('/jobappliform');
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn mt-5">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Ready to Start Your Career?</h2>
        <p className="text-xl mb-6">Apply today and kickstart your career in tech!</p>
        <button
          className="mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition-colors duration-300 w-full sm:w-auto"
          onClick={() => {
            navi('/jobappliform');
          }}
        >
          Apply Now
        </button>
      </section>
    </>
  );
};

export default Careers;

