// src/pages/Home.js
import React, { useEffect } from 'react';
import Hero from '../components/common/Hero';
import Contact from '../components/contact/Contact'; // Import your Contact component
import Footer from '../components/common/Footer'; // Import your Footer component
import Services from '../components/services/Services';

import './Home.css';
import About from '../components/about/About';

import { useLocation } from 'react-router-dom';


// import Header from '../components/common/Header';

const Home = () => {

  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (


    <div>
          <Hero />


          {/* Id for ofset landing  */}
          <span id="services-section"></span>

          {/* Custom section separator */}
          <div class="section-divider" >
            <span class="divider-icon" >•</span>
          </div>

          <Services />



          {/* Id for ofset landing  */}
          <span id="about-section"></span>

          {/* Custom section separator */}
          <div class="section-divider" >
            <span class="divider-icon">•</span>
          </div>

          <About />


          {/* Id for ofset landing  */}
          <span id="contact-section"></span>

          {/* Custom section separator */}
          <div class="section-divider">
            <span class="divider-icon">•</span>
          </div>


    </div>
  );
};

export default Home;
