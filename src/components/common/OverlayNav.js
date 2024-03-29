import React, { useEffect, useRef } from 'react';
import './OverlayNav.css';
import ScrollingNavLink from './ScrollingNavLink'; 

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
        <ScrollingNavLink href="#about">About</ScrollingNavLink>
        <ScrollingNavLink href="#services">Services</ScrollingNavLink>
        <ScrollingNavLink href="#clients">Clients</ScrollingNavLink>
        <ScrollingNavLink href="#contact">Contact</ScrollingNavLink>
        <a href="#">Book an <br></br>Appointment</a>
      </div>
    </div>
  );
};

export default OverlayNav;
