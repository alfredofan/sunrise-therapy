// src/components/contact/ContactInfo.js

import React from 'react';
import './ContactInfo.css'; // CSS file for ContactInfo styles


const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2 className="font-large">
        Get in touch
      </h2><br/>

      {/* <h2 className="font-large">
        Let's Solve It Together!            
      </h2><br /> */}
      
      <p className="font-small">
        Our experienced therapists are dedicated to helping individuals achieve their occupational goals and enhance their quality of life.
      </p><br />

      <a className="font-small link"
        href="mailto:admin@sunrisetherapy.com.au" 
        title="Send an email to Sunrise Therapy"
        aria-label="Send an email to Sunrise Therapy" 
      >
          <i className="fa fa-envelope font-small" ariaHidden="true"></i>
          admin@sunrisetherapy.com.au
      </a><br />

      <a href="tel:0494066554" className="font-small link" 
        title="Call Sunrise Therapy"
        aria-label="Call Sunrise Therapy at 0494 066 554"
      >
        <i className="fa fa-phone font-small" ariaHidden="true"></i>
          0423 549 767
      </a>

    </div>
  );
};

export default ContactInfo;
