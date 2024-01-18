// src/components/common/OverlayNav.js
import React from 'react';
import './OverlayNav.css';

const OverlayNav = ({ isOpen, onClose }) => {
  const overlayClass = `overlay ${isOpen ? 'open' : ''}`;

  return (
    <div className={overlayClass} onClick={onClose}>
      
      {/* former close button. overlay is now controled by hamburger menu */}
      {/* <a href="javascript:void(0)" className="closebtn" onClick={onClose}>&times;</a> */} 
      <div className="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default OverlayNav;
