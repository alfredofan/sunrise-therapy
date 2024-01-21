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
      href="mailto:rachel@sunrisetherapy.com.au" title="Email me">
          <i className="fa fa-envelope font-small" ariaHidden="true"></i>
          rachel@sunrisetherapy.com.au
      </a><br />

      <a className="font-small link" title="Call me">
        <i className="fa fa-phone font-small" ariaHidden="true"></i>
          0423 549 767
      </a>

    </div>
  );
};

export default ContactInfo;
