// ServiceCard.js

import React from 'react';

const ServiceCard = ({ name, description }) => {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default ServiceCard;
