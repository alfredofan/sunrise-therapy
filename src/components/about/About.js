// src/components/about/About.js
import React, { useEffect } from 'react';
import './About.css';
import Rachel from '../../assets/images/rachel1.1-no-bg.png';
import Brie from '../../assets/images/brie_square2-no-bg.png';
import Juliette from '../../assets/images/rachel1.1-no-bg.png';




const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed for when you want the fade-in effect to trigger

    // Start observing each .bio-item
    document.querySelectorAll('.bio-item').forEach(item => {
      observer.observe(item);
    });

    // Cleanup function
    return () => observer.disconnect();
  }, []);
  return (
    <section id="about">
        <h2 className='font-x-large'>About</h2>
        <div className="subsection">
        <div className="text">

            <h2>Who We Are</h2>
            <p>
                Established in 2022, Sunrise Therapy was born with a mission—to bring 
                positive change to the lives of individuals with disabilities. Our  
                commitment is to provide exceptional care that revolves around 
                the participant and has them involved every step of the way, inspired 
                by Rachel's love of Sunrise and the belief that each day presents an 
                opportunity for growth.
            </p>
        </div>
        </div>

        <div className="subsection">
        <div className="text">

            <h2>What We Do</h2>
            <p>
                At Sunrise Therapy, we specialize in providing community based allied 
                health services for individuals with disabilities on the Northern Beaches 
                and North Shore of Sydney. Our dedicated team offers personalized 
                assessments, therapies, and care, working collaboratively with 
                participants to achieve optimal outcomes.
            </p>
            <p>
                Our mission is clear — deliver high'quality care that empowers 
                participants to reach their full potential.
            </p>
        </div>
        </div>


        <div className="subsection">
            <div className="bio-container">
            <div className="bio-item ">
                
                <div className="bio-img ">
                <img src={Rachel} alt="Professional 1" />
                </div>
                
                <div className="bio-text">
                <h2>Rachel</h2>
                <p>
                As a dedicated Occupational Therapist, I earned my Bachelor of Occupational 
                Therapy from the Australian Catholic University. My journey in the disability 
                sector began as a disability support worker, before evolving into an OT and 
                then Supervising Occupational Therapist and later a Multidisciplinary Team 
                Leader. Taking the leap, l founded Sunrise Therapy, driven by my commitment 
                to quality care and making a positive impact in participants' lives. My 
                experience spans pediatrics, adolescents, and adults, specializing in 
                functional assessments and capacity-building therapy across various daily 
                living activities. I have a keen interest in working with neurodivergent
                individuals, specifically those with Autism Spectrum Disorder and ADHD, 
                utilizing sensory interventions and capacity-building . At the core of my 
                approach is collaborative goal-setting. I am passionate about working with 
                motivated individuals ready to make positive changes in their lives to achieve 
                their goals. My commitment extends to working closely with participants, their 
                support networks, and the broader multidisciplinary team for optimal outcomes. 
                Beyond my professional life, I find joy in activities such as sunrise walks, 
                swimming, reading, going to the beach, and spending time in nature.
                </p>
                </div>
            </div>
            
            <div className="bio-item reverse">
                
                <div className="bio-img ">
                <img src={Brie} alt="Professional 2" />
                </div>

                <div className="bio-text">
                <h2>Brie</h2>
                <p>
                Meet Brie, our dedicated virtual administrator at Sunrise Therapy. With over a
                decade of experience in the public health field, Brie specializes in providing 
                top-notch administrative support. From the first client contact, Brie efficiently
                manages referrals, accounts, and day-to-day tasks, such as scheduling
                appointments. Her strong communication and organizational skills play a vital role
                in supporting the team and ensuring therapists can focus on delivering the best
                care to our participants. Brie takes pride in her commitment to efficiency and
                attention to detail.
                </p>
                </div>

            </div>


            <div className="bio-item ">
               
                <div className="bio-img ">
                <img src={Juliette} alt="Professional 2" />
                </div>


                <div className="bio-text">
                <h2>Juliette</h2>
                <p>
                Meet Juliette, our accomplished Mental Health Occupational Therapist at Sunrise 
                Therapy. With over 5 years of expertise in mental health and accreditation, 
                Juliette brings a wealth of experience to our team. Holding leadership 
                experience, she specializes in various assessments, including Functional, 
                SIL/SDA, Sensory, and AT assessments. Notably, Juliette can conduct assessments 
                both on the Northern Beaches and through telehealth, providing flexibility and 
                accessibility for our participants. Her dedication and proficiency contribute 
                significantly to our commitment to providing top-notch mental health assessments 
                and interventions. Juliette is an invaluable member of our team, embodying the 
                values of Sunrise Therapy and enhancing the quality of care we offer to our 
                participants.
                </p>
                </div>
            </div>


            </div>
        </div>

    </section>
  );
}

export default About;
