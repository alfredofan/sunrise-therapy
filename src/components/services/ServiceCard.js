// ServiceCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ServiceCard = ({ name, description, link, button }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/services'); // Navigate to '/services' first
    setTimeout(() => {
      navigate(link); // Then navigate to the specified 'link'
    }, 100); // Adjust delay as needed to ensure navigation after landing on /services
  };

  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleButtonClick}>{button}</button>
    </div>
  );
};

export default ServiceCard;

