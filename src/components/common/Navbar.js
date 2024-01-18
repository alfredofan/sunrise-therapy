// src/components/common/Navbar.js
import React, { useState } from 'react';
import OverlayNav from './OverlayNav';
import HamburgerMenu from './HamburgerMenu';
import './Navbar.css'; // CSS file for Navbar styles
import logoImage from '../../assets/images/Logo500px.png';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleAppointmentClick = () => {
    // Handle appointment click logic here
  };


  return (
    <div className="navbar">
      <div className="logo-container">
        {/* <img src="%PUBLIC_URL%/assets/images/Logo500px.png" alt="Business Logo" /> */}
        <img src={logoImage} alt="Business Logo" />

      </div>
      <div className="nav-links">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
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
