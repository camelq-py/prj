
import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../service/Service';
import AboutUs from '../AboutUs/AboutUs';
import ClientReviews from '../Client reviews/ClientReviews';


import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  return (
    <>
    {/*hero section */}
    <section className="relative bg-gradient-to-r from-indigo-400 via-purple-700 to-pink-500 h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container relative z-10 px-6 sm:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
          Empowering Innovation with CamelQ
        </h1>
        <p className="text-lg sm:text-xl mb-6">
         At CamelQ, we drive technology solutions that scale businesses, foster innovation, and unlock new growth opportunities.
        </p>

        {/* Call to action buttons */}
        <div className="flex justify-center gap-6">
          <Link
            to="/services"  
            className="bg-white text-indigo-600 py-3 px-8 rounded-lg text-xl font-semibold transition-transform duration-300 transform hover:scale-105" onClick={()=>{navigate("/services")}}
          >
            Our Services
          </Link>
          <Link
            to="/contactusform"  
            className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-xl font-semibold transition-transform duration-300 transform hover:scale-105"
            >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Optional background image (if needed) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://your-image-url.com/hero-bg.jpg')",
        }}
      ></div>
     </section>
    <Service/>
    <AboutUs/>
    <ClientReviews/>
      
     {/* <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">Do You Want Our Services?</h2>
        <p className="text-xl">just click on the below button!</p>
        <button className="mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition-colors duration-300" onClick={()=>{
          navigate("/contactusform")
        }}>Contact Us</button> 
      </section>*/}
    </>
  );
};

export default Home;
