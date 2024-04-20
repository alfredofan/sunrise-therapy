// src/components/common/OffsetNavLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const OffsetNavLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(to);
    console.log(target); // Check if the target element is found
    if (target) {
      const offset = target.offsetTop - 150;
      console.log(offset); // Check the calculated offset value
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default OffsetNavLink;
