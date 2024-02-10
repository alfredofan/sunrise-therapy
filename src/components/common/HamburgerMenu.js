// src/components/common/HamburgerMenu.js
import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, onToggle }) => {
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onToggle(); // Call the onToggle function to open/close the menu
    }
  };

  return (
    <div className="hamburger-container">
      <input
        type="checkbox"
        id="menu"
        checked={isOpen}
        onChange={onToggle}
        tabIndex="0" // Add tabindex to make it focusable
      />
      <label
        htmlFor="menu"
        className="hamburger"
        tabIndex="0"
        onKeyPress={handleKeyPress} // Add key press event listener
        role="button" // Add role="button" for accessibility
        aria-label="Toggle Menu" // Add aria-label for accessibility
      >
        <div className="hamburger"></div>
      </label>
    </div>
  );
};

export default HamburgerMenu;
