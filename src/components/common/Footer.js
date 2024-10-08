// src/components/common/Footer.js
import React from 'react';
import Logo from '../../assets/images/Logo500px.png';
import AfLogo from '../../assets/images/personal_logo_gray.png';
import ScrollingNavLink from './OffsetNavLink.js';
import PrivacyPolicy from './PrivacyPolicy.js'; 
import TermsAndConditions from './TermsAndConditions.js'; 






// import LinkedInIcon from '../../assets/images/SocialMedia/linkedin-clear.png';
// import InstagramIcon from '../../assets/images/SocialMedia/instagram.png';
// import FacebookIcon from '../../assets/images/SocialMedia/facebook.png';
// import YouTubeIcon from '../../assets/images/SocialMedia/youtube.png';
// import WhatsAppIcon from '../../assets/images/SocialMedia/whatsapp.png';
import './Footer.css';

const Footer = () => {
  return (

    <section id="footer">

      <footer className="footer cotainer-1920-width">

        <div id="LogoAndSocial">
          <a href="/"className="footer-section" >
              <img src={Logo} alt="Sunrise Therapy Logo" id="logo"/>
          </a>

          <div className="footer-section social-media">
            {/* <p>Social Media Icons</p> */}
            <div className="social-icons">

              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" ariaHidden="true"></i>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" ariaHidden="true"></i>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" ariaHidden="true"></i>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play" ariaHidden="true"></i>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" ariaHidden="true"></i>
              </a> */}

              
              <a href="mailto:admin@sunrisetherapy.com.au" target="_blank" rel="noopener noreferrer" aria-label="Email Sunrise Therapy">
                <i className="fa fa-envelope" ariaHidden="true"></i>
                {/* <img src={YouTubeIcon} alt="YouTube" /> */}
              </a>

              <a href="tel:0494066554" aria-label="Call Sunrise Therapy">
              <i className="fa fa-phone" aria-hidden="true"></i>
                {/* <img src={WhatsAppIcon} alt="WhatsApp" /> */}
              </a>
            </div>
          </div>
        </div>


      <div id="SitemapAndDetails">
        <div className="footer-section sitemap">
          <p className="bold">Sitemap</p> 
          <ScrollingNavLink href="#about">About</ScrollingNavLink>
          <ScrollingNavLink href="#services">Services</ScrollingNavLink>
          <ScrollingNavLink href="#clients">Clients</ScrollingNavLink>
          <ScrollingNavLink href="#contact">Contact</ScrollingNavLink>
        </div>


        <div className="footer-section contact">
          <p className="bold">Contact</p>
          <a 
            href="tel:0494 066 554" className="font-small link" 
            title="Call Sunrise Therapy"
            aria-label="Call Sunrise Therapy at 0494 066 554">
              0494 066 554
          </a>
          {/* <p>rachel@sunrisetherapy.com.au</p> */}
        </div>

        {/* <div className="footer-section team">
          <p>Rachel Cavanagh</p>
          <p>Occupational Therapist</p>
        </div> */}


        <div className="footer-section working-hours">
          <p className="bold">Working Hours</p>
          <p>Monday – Friday</p>
          <p>8AM to 6PM</p>
        </div>

        <div className="footer-section location">
          <p className="bold">Our Location</p>
          <p>Mobile Servicing <br></br>Northern Beaches and<br></br>North Shore Sydney</p>
          {/* Mobile Services: Bringing Therapy to Your Doorstep in the Northern Beaches Area */}
        </div>
      </div>


      <div id="Af">
          <a href="https://alfredofaustino.com">
            <img src={AfLogo} alt="Alfredo Faustino Logo" />
            <p  className="bold">Website Developed By <br></br>Alfredo Faustino</p>

          </a>
      </div>



        <div id="CopyrightAndPrivacy">
          <div className="footer-section copyright">
              <p>Copyright &copy; {new Date().getFullYear()} Sunrise Therapy | ABN 20 955 868 155</p>
          </div>

          <div className="footer-section">
          <p><PrivacyPolicy />&nbsp;|&nbsp;<TermsAndConditions /></p>
          
        </div>
        </div>





      

      </footer>

    </section>
  );
};

export default Footer;
