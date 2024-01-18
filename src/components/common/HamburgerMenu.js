// src/components/common/HamburgerMenu.js
import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, onToggle }) => {
  return (
    <div className="hamburger-container">
      <input type="checkbox" id="menu" checked={isOpen} onChange={onToggle} />
      <label htmlFor="menu" className="hamburger">
        <div className="hamburger"></div>
      </label>
    </div>
  );
};

export default HamburgerMenu;
