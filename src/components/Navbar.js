import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/Navbar.css'; 

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='https://st2.depositphotos.com/5943796/11382/v/450/depositphotos_113826000-stock-illustration-initial-letter-ms-blue-swoosh.jpg' alt='Logo' />
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
