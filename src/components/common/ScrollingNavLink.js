// src/components/common/ScrollingNavLink.js
import React from 'react';

const ScrollingNavLink = ({ href, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const targetId = href.substring(1); // Extract the target section ID
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo(0, targetSection.offsetTop - 150);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollingNavLink;
