// src/components/common/Navbar.js
import React, { useState, useEffect } from 'react';
import OverlayNav from './OverlayNav';
import HamburgerMenu from './HamburgerMenu';
import ScrollingNavLink from './ScrollingNavLink'; // Import the new component
import './Navbar.css'; // CSS file for Navbar styles
import logoImage from '../../assets/images/Logo500px.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsOverlayMenuOpen(!isOverlayMenuOpen); // Toggle the overlay menu state
  };

  const handleAppointmentClick = () => {
    // Handle appointment click logic here
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
    <div className={`navbar ${isScrolled && !isOverlayMenuOpen ? 'scrolled' : ''}`}>
      
      <a href="/" className="logo-container">
        <img src={logoImage} id="logo" alt="Business Logo" />
      </a>
      <div className="nav-links">
        {/* Using ScrollingNavLink component instead of regular anchor tags to land 150px below the section start*/}
        <ScrollingNavLink href="#about">About</ScrollingNavLink>
        <ScrollingNavLink href="#services">Services</ScrollingNavLink>
        <ScrollingNavLink href="#clients">Clients</ScrollingNavLink>
        <ScrollingNavLink href="#contact">Contact</ScrollingNavLink>
      </div>

      <div className="appointment-button">
        <button onClick={handleAppointmentClick}>Book an Appointment</button>
      </div>

      <OverlayNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <HamburgerMenu isOpen={isNavOpen} onToggle={toggleNav} />
    </div>
  );
};

export default Navbar;
