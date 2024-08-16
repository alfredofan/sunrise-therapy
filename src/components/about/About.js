// src/components/about/About.js
import React, { useEffect } from 'react';
import './About.css';
import Rachel from '../../assets/images/rachel-no-bg-original.png';
import Brie from '../../assets/images/jessica-no-bg-original.png';
import Juliette from '../../assets/images/juliette_no_bg-original.png';




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
        
        <div className="subsection-grey-box">
        <div className="text">

            <h2  className='font-medium-large'>Who We Are</h2>
            <p>
                Established in 2022, Sunrise Therapy was born with a mission—to bring 
                positive change to the lives of individuals living with disabilities. Our  
                commitment is to provide exceptional care that revolves around 
                the participant and has them involved every step of the way, inspired 
                by Rachel's love of Sunrise and the belief that each day presents an 
                opportunity for growth.
            </p>
        </div>
        {/* </div> */}

        {/* <div className="subsection-grey-box"> */}
        <div className="text">

            <h2 className='font-medium-large'>What We Do</h2>
            <p>
                At Sunrise Therapy, we specialize in providing community based allied 
                health services for individuals with disabilities on the Northern Beaches 
                and North Shore of Sydney. Our dedicated team offers personalized 
                assessments, therapies, and care, working collaboratively with 
                participants to achieve optimal outcomes.
            </p>
            <p>
                Our mission is clear — deliver high quality care that empowers 
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
                <h2  className='font-medium-large'>Rachel</h2>
                <p>
                Meet Rachel, our dedicated Occupational Therapist and Founder of Sunrise
                Therapy.
                <br></br><br></br>



                ‘Since 2014, I&#39;ve immersed myself in the disability space, driven by a passion for
                celebrating the unique strengths of every individual. Starting as a disability support
                worker whilst studying, I progressed to roles including Occupational Therapist,
                Supervising Occupational Therapist, and Multidisciplinary Team Leader. However,                 I
                realised that to truly deliver the quality services I believed in, I needed to take the
                leap and found Sunrise Therapy.<br></br><br></br>
                My approach centres around developing personalised therapy plans that celebrate
                the strengths of neurodivergent individuals and those with sensory differences. Using
                sensory, interoceptive, and evidence-based interventions, I empower each person to
                achieve their goals. I collaborate with participants, their support networks, and the
                broader multidisciplinary team for holistic outcomes.<br></br><br></br>
                Outside work, I enjoy sunrise walks with my dog, swimming, reading, and nature.’




                {/* As a dedicated Occupational Therapist, I earned my Bachelor of Occupational 
                Therapy from the Australian Catholic University. My journey in the disability 
                sector began as a disability support worker, before evolving into an OT and 
                then Supervising Occupational Therapist and later a Multidisciplinary Team 
                Leader. Taking the leap, I founded Sunrise Therapy, driven by my commitment 
                to quality care and making a positive impact in participants' lives. My 
                experience spans pediatrics, adolescents, and adults, specializing in 
                functional assessments and capacity-building therapy across various daily 
                living activities. I have a keen interest in working with neurodivergent
                individuals, specifically those with Autism Spectrum Disorder and ADHD, 
                utilizing sensory interventions and capacity-building. At the core of my 
                approach is collaborative goal-setting. I am passionate about working with 
                motivated individuals ready to make positive changes in their lives to achieve 
                their goals. My commitment extends to working closely with participants, their 
                support networks, and the broader multidisciplinary team for optimal outcomes. 
                Beyond my professional life, I find joy in activities such as sunrise walks, 
                swimming, reading, going to the beach, and spending time in nature. */}
                </p>
                </div>
            </div>
            




            <div className="bio-item reverse">
               
                <div className="bio-img ">
                <img src={Juliette} alt="Professional 2" />
                </div>


                <div className="bio-text">
                <h2 className='font-medium-large'>Juliette</h2>
                <p>
                Meet Juliette, our accomplished Mental Health Occupational Therapist at Sunrise
                Therapy.<br></br><br></br>
                "With over seven years of experience in the field, I&#39;ve dedicated myself to serving the
                community through the National Disability Insurance Scheme (NDIS), working with
                individuals across a broad spectrum of diagnoses, including those aged 12 and
                above. As a practitioner committed to neuroaffirming principles, I wholeheartedly
                embrace and celebrate diversity."
                <br></br><br></br>
                Her dedication and proficiency significantly contribute to our commitment to providing
                top-notch services. Juliette is an invaluable member of our team, drawing upon her
                expertise in sensory modulation, cognitive-behavioural strategies, and mindfulness
                techniques to empower her clients. She helps them cultivate resilience, enhance
                self-awareness, and build meaningful connections with their environments.
                
                
                
                
                
                
                
                
                
                
                
                
                 {/* With over seven years of expertise in mental health and accreditation, 
                Juliette brings a wealth of experience to our team. Holding leadership 
                experience, she specializes in various assessments, including Functional, 
                SIL/SDA, Sensory, and AT assessments. Notably, Juliette can conduct assessments 
                both on the Northern Beaches and through telehealth, providing flexibility and 
                accessibility for our participants. Her dedication and proficiency contribute 
                significantly to our commitment to providing top-notch mental health assessments 
                and interventions. Juliette is an invaluable member of our team, embodying the 
                values of Sunrise Therapy and enhancing the quality of care we offer to our 
                participants. */}
                </p>
                </div>
            </div>






            <div className="bio-item ">
                
                <div className="bio-img ">
                <img src={Brie} alt="Professional 2" />
                </div>

                <div className="bio-text">
                <h2 className='font-medium-large'>Jessica</h2>
                <p>
                Meet Jessica, our dedicated virtual administrator at Sunrise Therapy, 
                with over a decade of experience in Allied Health. Jessica manages 
                referrals, accounts, and day-to-day tasks, such as scheduling appointments.<br></br><br></br>
                
                Her strong communication and organizational skills play a vital role in supporting 
                the team and ensuring therapists can focus on delivering the best care to our participants. 
                Working part-time as a practitioner in private practice herself, Jessica knows the 
                value of admin support and takes pride in her commitment to efficiency and attention to detail.




                {/*                 
                Meet Brie, our dedicated virtual administrator at Sunrise Therapy. With over a
                decade of experience in the public health field, Brie specializes in providing 
                top-notch administrative support.<br></br><br></br>
                From the first client contact, Brie efficiently
                manages referrals, accounts, and day-to-day tasks, such as scheduling
                appointments.<br></br><br></br>
                Her strong communication and organizational skills play a vital role
                in supporting the team and ensuring therapists can focus on delivering the best
                care to our participants. Brie takes pride in her commitment to efficiency and
                attention to detail. 
                */}
                </p>



                </div>

            </div>





            </div>
        </div>

    </section>
  );
}

export default About;
