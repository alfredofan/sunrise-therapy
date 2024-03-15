// src/components/contact/Services.js

import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'; // CSS file for Service styles


const servicesData = [
  // Define services data here
  {
    name: 'NDIS Functional Capacity Assessment (FCA)',
    description: 'Conducting thorough OT assessment of your support needs to write your NDIS report.',
  },

  {
    name: 'OT Therapy',
    description: 'We always aim to increase quality of life through goal focused and individualised intervention.',
  },

  {
    name: 'Sensory Assessment and Intervention',
    description: 'Addressing sensory needs impacting daily tasks through comprehensive assessment and targeted interventions.',
  },  
  
  {
    name: 'NDIS Home and Living Reports',
    description: 'Detailed assessments and reports for supported independent living (SIL) and Specialist Disability Accommodation (SDA).',
  },

  {
    name: 'Mental Health Assessment and Intervention',
    description: 'Specialized expertise, holistic therapies, and individualised interventions by our dedicated occupational therapist.',
  },

  {
    name: 'Explore Assistive Technology (AT)',
    description: 'We assess your unique needs and guide you through the NDIS application.',
  },

  {
    name: 'Access NDIS reports',
    description: 'Applying for NDIS? Let us support your application with a comprehensive functional report to advocate for you!',
  },

  {
    name: 'Nature Therapy',
    description: 'Discover well-being through nature-based therapies tailored to your individual goals and needs.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id='services'>
      <h2 className='font-x-large'>Services</h2>
      <div className="service-cards-container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
