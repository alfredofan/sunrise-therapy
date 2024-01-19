// src/components/common/Footer.js
import React from 'react';
import Logo from '../../assets/images/Logo500px.png'; // Updated import
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div id="LogoAndSocial">
        <div className="footer-section logo">
            <img src={Logo} alt="Sunrise Therapy Logo" />
        </div>

        <div className="footer-section social-media">
            <p>Social Media Icons</p>
            {/* Add your social media icons here */}
        </div>
      </div>

    <div id="SitemapAndDetails">
      <div className="footer-section sitemap">
        <p>Sitemap</p> 
        <a href="#">About</a> <br />
        <a href="#">Services</a> <br />
        <a href="#">Clients</a> <br />
        <a href="#">Contact</a> <br />
      </div>


      <div className="footer-section contact">
        <p>Contact</p>
        <p>0423 549 767</p>
        {/* <p>rachel@sunrisetherapy.com.au</p> */}
      </div>

      {/* <div className="footer-section team">
        <p>Rachel Cavanagh</p>
        <p>Occupational Therapist</p>
      </div> */}


      <div className="footer-section working-hours">
        <p>Working Hours</p>
        <p>Monday – Friday</p>
        <p>8AM to 6PM</p>
      </div>

      <div className="footer-section location">
        <p>Our Location</p>
        <p>Mobile Servicing <br></br>Metropolitan Sydney</p>
        {/* Mobile Services: Bringing Therapy to Your Doorstep in the Northern Beaches Area */}
      </div>
    </div>


      <div id="CopyrightAndPrivacy">
        <div className="footer-section copyright">
            <p>&copy; {new Date().getFullYear()} Sunrise Therapy & design by alfredo faustino</p>
        </div>

        <div className="footer-section">
            <a href="#">Privacy Policy</a>
        </div>
     </div>
    

    </footer>
  );
};

export default Footer;
