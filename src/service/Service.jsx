
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Service = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 to-purple-400 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-8">Our Services at CamelQ</h2>
        <p className="text-base sm:text-lg lg:text-xl text-white opacity-80 mb-16">Explore the exceptional services CamelQ offers to innovate and elevate your business.</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <img
                  src="https://quicksolutionindia.com/wp-content/uploads/2023/02/web-development-company-1-2022.jpg"
                  alt="Web Development"
                  className="w-full h-40 sm:h-56 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">At CamelQ, we create high-performance and responsive websites tailored to meet your business goals. Our solutions are scalable, secure, and user-friendly.</p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <img
                  src="https://www.softgentech.com/wp-content/uploads/2024/04/Mobile-app-development-services-in-lucknow-1080x593.jpg"
                  alt="Mobile App Development"
                  className="w-full h-40 sm:h-56 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">We design and develop engaging mobile applications for both iOS and Android. Our apps are built with the latest technologies to deliver seamless performance.</p>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <img
                  src="https://whatiscloudcomputingwordpresscom.wordpress.com/wp-content/uploads/2016/01/what-is-cloud-computing-11.jpg?w=660"
                  alt="Cloud Services"
                  className="w-full h-40 sm:h-56 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Cloud Services</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">CamelQ offers comprehensive cloud solutions to help your business scale effortlessly. We provide infrastructure, migration, and cloud-native app development.</p>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <img
                  src="https://www.batterseawebexpert.com/wp-content/uploads/2023/07/digital-marketing-services.webp"
                  alt="Digital Marketing"
                  className="w-full h-40 sm:h-56 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">Our digital marketing strategies are designed to increase your brand’s online presence. From SEO to PPC, we drive traffic and generate leads.</p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E12AQEA2al5qq84IA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1625050259829?e=2147483647&v=beta&t=1Ke1feausPWa9aSN62kE0jtyRYMvllwoqzdca3CJU34"
                  alt="UI/UX Design"
                  className="w-full h-40 sm:h-56 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">At CamelQ, we design intuitive user interfaces and user experiences that are aesthetically pleasing and easy to use, ensuring customer satisfaction.</p>
            </div>
          </div>

          {/* SEO Optimization */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <img
                  src="https://cobit-solutions.com/en/wp-content/uploads/sites/2/2024/08/seo.png"
                  alt="SEO Optimization"
                  className="w-full h-40 sm:h-56 object-cover mx-auto mb-4 rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">We help businesses rank higher on search engines and improve their online visibility with cutting-edge SEO strategies and optimization techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <ContactUsPage/> */}
    <section className="py-16 px-8 bg-indigo-900 text-white text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">Do You Want Our Services?</h2>
        <p className="text-xl">just click on the below button!</p>
        <button className="mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition-colors duration-300" onClick={()=>{
          navigate("/contactusform")
        }}>Contact Us</button>
      </section>
    </>
  );
};

export default Service;

