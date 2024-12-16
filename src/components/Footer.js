// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../../src/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Address:</h3>
      <p>MS Technologies, Opposite to Texas bank, Ameerpet, Hyderabad-500038</p>
      </div>
      <div>
        <h3>Contact Us</h3>
      <p>Phone: 9441782947</p><br/>
      <p>Email: manojdhanyasi@gmail.com</p>
      </div>
      <div className="social-icons">
        <h3>Follow Us on</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

      </div>
    </footer>
  );
}

export default Footer;
