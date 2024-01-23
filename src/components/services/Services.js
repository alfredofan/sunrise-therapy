// src/components/contact/Services.js

import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'; // CSS file for Service styles


const servicesData = [
  // Define services data here
  {
    name: 'Functional Assessments',
    description: 'Conducting thorough functional assessments to identify support needs and assess functional capacity.',
  },

  {
    name: 'Daily Living Skills Intervention',
    description: 'Assisting in the development of increased participation and independence in daily living tasks.',
  },

  {
    name: 'Sensory and Interoception Assessment and Intervention',
    description: 'Providing assessment and intervention for sensory needs impacting functional tasks.',
  },  
  
  {
    name: 'SIL and SDA assessments',
    description: 'We conduct thorough assessments to evaluate housing support needs, ensuring eligibility for NDIS funding.',
  },

  {
    name: 'Mental health assessment and intervention',
    description: 'Benefit from specialized expertise in mental health assessments and interventions with our dedicated therapist.',
  },

  {
    name: 'Assistive Technology',
    description: 'Guiding on tailored equipment options to meet diverse needs and support goals.',
  },

  {
    name: 'Access Reports for the NDIS',
    description: 'Dedicated to assisting with your NDIS application and journey, we provide comprehensive reports to strengthen your submission.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
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
