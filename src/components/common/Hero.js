// src/components/common/Hero.js
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline font-x-large">
          Your trusted NDIS Occupational Therapists
          {/* in Sydney&#39;s Northern Beaches and North Shore */}
        </h1>
        <p className="hero-subheadline font-medium"> 
          in Sydney&#39;s Northern Beaches and North Shore
        </p>
        <Link to="/#services-section" >
        <button className="hero-button" aria-label="Get started with services">
          Get Started
        </button>
        </Link>
      </div>

    </div >
  );
};

export default Hero;
