// src/pages/Home.js
import React from 'react';
import './Home.css'; // CSS file for Navbar styles

// import Header from '../components/common/Header';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="home-container">
        <h1>Welcome to Sunrise Therapy</h1>
        <p>
          Your trusted partner in occupational therapy, promoting health and well-being.
        </p>
        <p>
          Our experienced therapists are dedicated to helping individuals achieve their
          occupational goals and enhance their quality of life.
        </p>
        {/* Add more content and components as needed */}
      </div>
      {/* You can include a footer component here if you have one */}
    </div>
  );
};

export default Home;
