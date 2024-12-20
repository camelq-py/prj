import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-4">CamelQ</h3>
            <p className="text-gray-400 mb-4">
              CamelQ is committed to delivering world-class technology solutions that drive business success. Our goal is to innovate and lead in all areas of business.
            </p>
            <p className="text-gray-400">
              <strong>Address:</strong> 123 Business Street, City, Country
            </p>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-4">Important Links</h3>
            <ul>
              <li><Link to="/about">
                <a href="#about" className="text-gray-400 hover:text-white">About Us</a></Link>
                </li>
              <li> <Link to="/services"><a href="#services" className="text-gray-400 hover:text-white">Services</a></Link></li>
              <li><Link to="/contactusform"><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></Link></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">Email: <a href="mailto:info@camelq.com" className="text-gray-400 hover:text-white">info@camelq.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+91 987654321</a></p>
            <p className="text-gray-400">Address:H.NO 10-1-55/A,Saroornagar, Hyderabad,Telangana,India</p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com"  target="_blank"className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com"  target="_blank"className="text-gray-400 hover:text-blue-700">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-pink-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 CamelQ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
