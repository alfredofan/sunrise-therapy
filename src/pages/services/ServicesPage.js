// src/pages/services/ServicesPage.js


import React, { useEffect } from 'react';
import './ServicesPage.css'; // Import CSS file for styling
import ServiceImages from './ServicesImages'; // Import images for services
import OffsetNavLink from '../../components/common/OffsetNavLink.js'; // Import the new component
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';






const ServicesPage = () => {

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
    <div className="services-container" id='ot-services'>
      <h1 className="services-headline font-x-large" >Occupational Therapy Services</h1>


      <div className="ot-services">
        <h3>Eligibility Information</h3>

        {/* <p>Our Occupational Therapy services are tailored to help you enhance your daily life with greater independence and fulfillment.</p> */}

        <p>We provide occupational therapy services to individuals:</p>

        <ul style={{ textAlign: "left" }}>
          <li>Age Range: Adolescents (12 years old and above) to Adults.</li>
          <li>Types of Clients: Those seeking assistance with capacity building for daily
          activities or mental health intervention.</li>
          <li>Location: We do not have a clinic. We are community-based therapists
serving clients within a 30-minute radius from our home location in Collaroy,
covering the Northern Beaches and most of the North Shore of Sydney.</li>
          <li><strong>Please Note:</strong> We do not provide complex home modifications services.</li>
        </ul>
       

        <p>
          For more information or to inquire about our services, please send an email to
          <a href="mailto:admin@sunrisetherapy.com.au"> admin@sunrisetherapy.com.au </a>
          or contact us.
        </p>



        <OffsetNavLink to="#contact">
          <button className="see-all-button">Contact Us</button>
        </OffsetNavLink>
        
      </div>

      {services.map((service, index) => (
        <ServiceDisplay key={index} {...service} index={index} />
      ))}
    </div>
  );
};

const ServiceDisplay = ({ title, description, image, index }) => {
  const isImageOnLeft = index % 2 === 0;
  const serviceId = title.replace(/\s+/g, '-').toLowerCase(); // Generate id from title



const handleAppointmentClick = () => {
// Handle appointment click logic here, e.g., redirect to a contact page
};



  return (
    <div id={serviceId}> {/* Add id to the service display */}

        <div className={`service-display ${isImageOnLeft ? 'image-left' : 'image-right'}`}>
            <div className="service-image">
                <img src={image} alt={title} />
            </div>
            <div className="service-details">
                <h2 className="font-medium-large">{title}</h2>
                <p className="font-small-medium">{description}</p>
                    <OffsetNavLink to="#contact"><button onClick={handleAppointmentClick}>Book an Appointment</button></OffsetNavLink>
            </div>
        </div>

        {/* Custom section separator */}
        <div className="section-divider-slim">
            <span className="divider-icon">•</span>
        </div>

    </div>

 

  );
};

// Service data
const services = [

    {
      title: 'Functional Assessments',
      description: 'Conducting thorough functional assessments to identify support needs and assess functional capacity. Our assessments aid in identifying support requirements, planning for NDIS reviews, external services, equipment, and home modification needs.',
      image: ServiceImages.functionalAssessment
    },
    {
      title: 'Daily Living Skills Intervention',
      description: 'Assisting in the development of increased participation and independence in daily living tasks. Our interventions cover areas such as meal preparation, laundry skills, cleaning, routine implementation, shopping, community access, and budgeting. Our passion lies with supporting neurodivergent individuals and those with mental health difficulties.',
      image: ServiceImages.otTherapy
    },
    {
      title: 'Sensory and Interoception Assessment and Intervention',
      description: 'Providing assessment and intervention for sensory needs impacting functional tasks. Our goal is to address sensory challenges and enhance overall functioning.',
      image: ServiceImages.sensoryInteroception
    },
    {
      title: 'SIL and SDA assessments',
      description: 'We conduct thorough assessments to evaluate housing support needs, ensuring eligibility for NDIS funding. Our personalised recommendations and reports facilitate tailored solutions, empowering independent living for participants with complex needs. Strengthen your NDIS application process with our comprehensive approach.',
      image: ServiceImages.homeReports
    },
    {
      title: 'Mental health assessment and intervention',
      description: 'Benefit from specialised expertise in mental health assessments and interventions with our dedicated therapist. Our tailored approach aims to empower individuals on their journey to improved mental health and overall wellness.',
      image: ServiceImages.mentalHealth
    },
    {
      title: 'Assistive Technology',
      description: 'We provide guidance on tailored equipment options to meet diverse needs and support goals. Explore personalised solutions for an enhanced daily living experience.',
      image: ServiceImages.assistiveTechnology
    },
    {
      title: 'Access Reports for the NDIS',
      description: 'Dedicated to assisting with your NDIS application and journey, we provide comprehensive reports to strengthen your submission.',
      image: ServiceImages.accessReports
    },

    {
      title: 'Nature Therapy',
      description: 'Discover well-being through nature-based therapies tailored to your individual goals and needs.',
      image: ServiceImages.natureTherapy
    },
  ]

export default ServicesPage;
