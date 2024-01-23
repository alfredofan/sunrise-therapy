// src/pages/Home.js
import React from 'react';
import Hero from '../components/common/Hero';
import Contact from '../components/contact/Contact'; // Import your Contact component
import Footer from '../components/common/Footer'; // Import your Footer component
import Services from '../components/services/Services';

import './Home.css';

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

      <div className="home-container">

        <h1 className='font-x-large'>About</h1><br />
        <p className='font-medium'>        
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor 
          lorem ipsum dolor, consectetur adip, sed diam nonum, sed, sed, sed
          lorem ipsum dolor, consectetur adip, sed diam nonum, sed, sed, sed
          lorem ipsum dolor, consectetur adip, sed diam lorem ipsum dolor
          lorem ipsum dolor, consectetur adip, sed diam.
        </p><br/>
        {/* <p>
          Your trusted partner in occupational therapy, promoting health and well-being.
        </p>
        <p>
          Our experienced therapists are dedicated to helping individuals achieve their
          occupational goals and enhance their quality of life.
        </p> */}
        {/* Add more content and components as needed */}
      </div>
      {/* You can include a footer component here if you have one */}

                {/* Custom section separator */}
                <div class="section-divider">
            <span class="divider-icon">•</span>
          </div>
    </div>
  );
};

export default Home;
