import React, { useEffect, useRef } from 'react';
import './OverlayNav.css';
import OffsetNavLink from './OffsetNavLink.js'; 
import { Link } from 'react-router-dom';


const OverlayNav = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleFocusTrap = (event) => {
      const overlay = overlayRef.current;
      if (isOpen && overlay && !overlay.contains(event.target)) {
        // If focus moves outside the overlay when it's open, bring it back
        overlay.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('focusin', handleFocusTrap);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusTrap);
    };
  }, [isOpen, onClose]);

  const overlayClass = `overlay ${isOpen ? 'open' : ''}`;

  return (
    <div className={overlayClass} ref={overlayRef} tabIndex={isOpen ? 0 : -1} onClick={onClose}>
      <div className="overlay-content">
        {/* Using ScrollingNavLink component instead of regular anchor tags to land 150px below the section*/}
        <Link to="/#about-section" >About</Link>
        <Link to="/#services-section" >Services</Link>
        {/* <ScrollingNavLink to="/#clients">Clients</ScrollingNavLink> */}
        <Link to="#contact-section">Contact</Link>
        <Link to="#contact-section">Book an <br></br>Appointment</Link>
      </div>
    </div>
  );
};

export default OverlayNav;
