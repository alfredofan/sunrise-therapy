// src/pages/Home.js
import React from 'react';
import Hero from '../components/common/Hero';
import Contact from '../components/contact/Contact'; // Import your Contact component
import Footer from '../components/common/Footer'; // Import your Footer component
import Services from '../components/services/Services';

import './Home.css';
import About from '../components/about/About';

// import Header from '../components/common/Header';

const Home = () => {
  return (


    <div>
          <Hero />

          {/* Custom section separator */}
          <div class="section-divider">
            <span class="divider-icon">•</span>
          </div>

          <Services />

          {/* Custom section separator */}
          <div class="section-divider">
            <span class="divider-icon">•</span>
          </div>

          <About />

          {/* Custom section separator */}
          <div class="section-divider">
            <span class="divider-icon">•</span>
          </div>


    </div>
  );
};

export default Home;
