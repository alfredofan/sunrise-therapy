// src/components/common/OffsetNavLink.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OffsetNavLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    // First navigate to the root page ("/")
    await navigate('/');

    // Then navigate to the specified section
    const target = document.querySelector(to);
    if (target) {
      const offset = target.offsetTop - 150; // Adjusted offset
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
