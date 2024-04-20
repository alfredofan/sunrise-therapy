// src/components/common/Navbar.js
import React, { useState, useEffect } from 'react';
import OverlayNav from './OverlayNav';
import HamburgerMenu from './HamburgerMenu';
import OffsetNavLink from './OffsetNavLink'; // Import the new component
import './Navbar.css'; // CSS file for Navbar styles
import logoImage from '../../assets/images/Logo500px.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsOverlayMenuOpen(!isOverlayMenuOpen); // Toggle the overlay menu state
  };

  const handleAppointmentClick = () => {
    // window.location.href = '#contact';
  };


  const handleScroll = () => {
    // Add a class when scrolling starts
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      
      <a href="/" className="logo-container">
        <img src={logoImage} id="logo" alt="Business Logo" />
      </a>
      <div className="nav-links">
        {/* Using ScrollingNavLink component instead of regular anchor tags to land 150px below the section*/}
        <Link to="/#about-section" >About</Link>
        <Link to="/#services-section" >Services</Link>
        {/* <ScrollingNavLink to="/#clients">Clients</ScrollingNavLink> */}
        <Link to="#contact-section">Contact</Link>
   
      </div>

      <div className="appointment-button">
      <Link to="#contact-section"><button onClick={handleAppointmentClick}>Book an Appointment</button></Link>
      </div>

      <OverlayNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <HamburgerMenu isOpen={isNavOpen} onToggle={toggleNav} />
    </div>
  );
};

export default Navbar;
