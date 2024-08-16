// src/components/contact/Services.js

import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'; // CSS file for Service styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom




const servicesData = [
  // Define services data here
  {
    name: 'NDIS Functional Capacity Assessment (FCA)',
    description: 'Conducting thorough OT assessment of your support needs to write your NDIS report.',
    link: '/services#functional-assessments',
    button: 'Learn More',

  },

  {
    name: 'OT Therapy',
    description: 'We always aim to increase quality of life through goal focused and individualised intervention.',
    link: '/services#daily-living-skills-intervention',
    button: 'Learn More',

  },

  {
    name: 'Sensory Assessment and Intervention',
    description: 'Addressing sensory needs impacting daily tasks through comprehensive assessment and targeted interventions.',
    link: '/services#sensory-and-interoception-assessment-and-intervention',
    button: 'Learn More',

  },  
  
  {
    name: 'NDIS Home and Living Reports',
    description: 'Detailed assessments and reports for supported independent living (SIL) and Specialist Disability Accommodation (SDA).',
    link: '/services#sil-and-sda-assessments',
    button: 'Learn More',

  },

  {
    name: 'Mental Health Assessment and Intervention',
    description: 'Specialised expertise, holistic therapies, and individualised interventions by our dedicated occupational therapist.',
    link: '/services#mental-health-assessment-and-intervention',
    button: 'Learn More',

  },

  {
    name: 'Explore Assistive Technology (AT)',
    description: 'We assess your unique needs and guide you through the NDIS application.',
    link: '/services#assistive-technology',
    button: 'Learn More',

  },

  {
    name: 'Access NDIS reports',
    description: 'Applying for NDIS? Let us support your application with a comprehensive functional report to advocate for you!',
    link: '/services#access-reports-for-the-ndis',
    button: 'Learn More',

  },

  {
    name: 'Nature Therapy',
    description: 'Discover well-being through nature-based therapies tailored to your individual goals and needs.',
    link: '/services#nature-therapy',
    button: 'Learn More',

  },

];

const Services = ({ scrollToService }) => {
  return (
    <section className="services-section" id='services'>
      
      <h2 className='font-x-large'>Services</h2>


      {/* Occupational Therapy Services Section */}
      <div className="ot-services">
        <h3>Enhance Your Well-Being with Occupational Therapy Services</h3>

        {/* <p>Our Occupational Therapy services are tailored to help you enhance your daily life with greater independence and fulfillment.</p> */}

        <p>Whether you're looking to boost your engagement in daily activities or improve your social connections, our dedicated team is here to support you on your journey.</p>
       
        <Link to="/services">
          <button className="see-all-button" onClick={() => window.scrollTo(0, 0)}>See All Services</button>
        </Link>
        
      </div>


      <div className="service-cards-container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} onClick={() => scrollToService(service.name)} />
        ))}
      </div>

     
    </section>
  );
};

export default Services;