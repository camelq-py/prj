import React from 'react';
import Team from '../Team/Team';
import Branches from '../Branches/Branches';

const AboutUs = () => {
  return (
    <section id="about"  className="bg-gradient-to-r from-[#6C5B7B] via-[#F1A7A6] to-[#D4A5A5] text-white py-20 text-center">
      <h1 className="text-4xl text-center mb-6 mt-5 font-bold   text-gray-800 ">About CamelQ</h1>
      <p className="max-w-4xl mx-auto text-center text-sm sm:text-lg md:text-xl">CamelQ is a leading company in the tech industry, offering innovative solutions to businesses globally.</p>
    
    <Team/>
    <Branches/>
    </section>
  );
};

export default AboutUs;
