// src/components/common/Footer.js
import React from 'react';
import Logo from '../../assets/images/Logo500px.png';
import AfLogo from '../../assets/images/personal_logo_gray.png';


// import LinkedInIcon from '../../assets/images/SocialMedia/linkedin-clear.png';
// import InstagramIcon from '../../assets/images/SocialMedia/instagram.png';
// import FacebookIcon from '../../assets/images/SocialMedia/facebook.png';
// import YouTubeIcon from '../../assets/images/SocialMedia/youtube.png';
// import WhatsAppIcon from '../../assets/images/SocialMedia/whatsapp.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div id="LogoAndSocial">
        <a href="/"className="footer-section" >
            <img src={Logo} alt="Sunrise Therapy Logo" id="logo"/>
        </a>

        <div className="footer-section social-media">
          {/* <p>Social Media Icons</p> */}
          <div className="social-icons">

            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" ariaHidden="true"></i>
              {/* <img src={LinkedInIcon} alt="LinkedIn" /> */}
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" ariaHidden="true"></i>
              {/* <img src={InstagramIcon} alt="Instagram" /> */}
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" ariaHidden="true"></i>
              {/* <img src={FacebookIcon} alt="Facebook" /> */}
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
             <i className="fa fa-youtube-play" ariaHidden="true"></i>
              {/* <img src={YouTubeIcon} alt="YouTube" /> */}
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp" ariaHidden="true"></i>
              {/* <img src={WhatsAppIcon} alt="WhatsApp" /> */}
            </a>

            
            <a href="#" target="_blank" rel="noopener noreferrer">
             <i className="fa fa-envelope" ariaHidden="true"></i>
              {/* <img src={YouTubeIcon} alt="YouTube" /> */}
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-phone" ariaHidden="true"></i>
              {/* <img src={WhatsAppIcon} alt="WhatsApp" /> */}
            </a>
          </div>
        </div>
      </div>


    <div id="SitemapAndDetails">
      <div className="footer-section sitemap">
        <p className="bold">Sitemap</p> 
        <a href="#">About</a> <br />
        <a href="#">Services</a> <br />
        <a href="#">Clients</a> <br />
        <a href="#">Contact</a> <br /> 
      </div>


      <div className="footer-section contact">
        <p className="bold">Contact</p>
        <p>0423 549 767</p>
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
        <p>Mobile Servicing <br></br>Metropolitan Sydney</p>
        {/* Mobile Services: Bringing Therapy to Your Doorstep in the Northern Beaches Area */}
      </div>
    </div>


    <div id="Af">
        <a href="https://alfredofaustino.com">
          <img src={AfLogo} alt="AfLogo" />
          <p  className="bold">Website Developed By <br></br>Alfredo Faustino</p>

        </a>
    </div>



      <div id="CopyrightAndPrivacy">
        
        <div className="footer-section copyright">
            <p>&copy; {new Date().getFullYear()} Sunrise Therapy</p>
        </div>

        <div className="footer-section">
            <a href="#">Privacy Policy</a>
        </div>
     </div>
    

    </footer>
  );
};

export default Footer;
