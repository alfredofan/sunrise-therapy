// src/components/contact/ContactUs.js


import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.css'; // CSS file for Contact styles


const Contact = () => {
  return (
    <section id="contact">
      <div id="contact-container">
        <div id="contact-main">
          <div id="contact-left">
            <ContactInfo />
          </div>
          <div id="contact-right">
            <ContactForm />
          </div>
        </div>
        {/* <div id="padding">
         <hr />
        </div> */}
      </div>
    </section>

  );
};

export default Contact;

