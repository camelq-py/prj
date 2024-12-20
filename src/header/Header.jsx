
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true); 
  const handleScroll = () => {
    if (window.scrollY < lastScrollY) { 
      setScrollingUp(true);
    } else { 
      setScrollingUp(false);
    }
    if (window.scrollY === 0) {
      setIsAtTop(true); 
    } else {
      setIsAtTop(false); 
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header
      className={`fixed w-full top-0 z-50 p-4 transition-all duration-300 ${isAtTop ? "bg-transparent text-white" : scrollingUp ? "bg-orange-900 text-white" : "bg-black text-white"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="https://camelq.in/wp-content/uploads/2024/12/Untitled-300-x-300-px-150-x-150-px.png"  // Replace with the actual path or URL of your logo
              alt="CamelQ Logo"
              className="h-10"
            />
          </Link>
          <Link to="/" className="font-bold text-3xl">CamelQ</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={`lg:flex lg:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
            <li><Link to="/" className="hover:text-gray-300 font-bold">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-300 font-bold">Services</Link></li>
            <li><Link to="/ourclients" className="hover:text-gray-300 font-bold">Our Clients</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 font-bold">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-gray-300 font-bold">Careers</Link></li>

            {/* Courses Dropdown */}
            <li className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="hover:text-gray-300 font-bold">
                Courses
              </button>
              <ul className={`absolute left-0 ${isOpen ? 'block' : 'hidden'} bg-black text-white space-y-2 p-4 rounded-lg mt-2 shadow-lg transition-all duration-300`}>
                <li><Link to="/courses/reactpage" className="hover:text-orange-300">ReactJs</Link></li>
                <li><Link to="/courses/pythonpage" className="hover:text-orange-300">Python</Link></li>
                <li><Link to="/courses/javapage" className="hover:text-orange-300">Java</Link></li>
                <li><Link to="/courses/ui-ux-page" className="hover:text-orange-300">UI/UX Design</Link></li>
              </ul>
            </li>

            <li><Link to="/internships" className="hover:text-gray-300 font-bold">Internships</Link></li>
            <li><Link to="/contactusform" className="hover:text-gray-300 font-bold">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-90 p-4`}>
        <ul className="space-y-4">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="/ourclients" className="text-white hover:text-gray-300">Our Clients</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About Us</a></li>
          <li><a href="/careers" className="text-white hover:text-gray-300">Careers</a></li>

          <li className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-gray-300">
              Courses
            </button>
            <ul className={`absolute left-0 ${isOpen ? 'block' : 'hidden'} bg-black text-white space-y-2 p-4 rounded-lg mt-2 shadow-lg transition-all duration-300`}>
              <li><a href="/courses/reactpage" className="hover:text-orange-300">ReactJs</a></li>
              <li><a href="/courses/pythonpage" className="hover:text-orange-300">Python</a></li>
              <li><a href="/courses/javapage" className="hover:text-orange-300">Java</a></li>
              <li><a href="/courses/ui-ux-page" className="hover:text-orange-300">UI/UX Design</a></li>
            </ul>
          </li>

          <li><a href="/internships" className="text-white hover:text-gray-300">Internships</a></li>
          <li><a href="/contactusform" className="text-white hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
