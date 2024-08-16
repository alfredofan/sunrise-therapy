// src/components/common/PrivacyPolicy.js
import React, { useState } from 'react';
import './PrivacyPolicy.css';  // Ensure the CSS file name matches exactly

const PrivacyPolicy = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <span className="privacy-link" onClick={openModal}>Privacy Policy</span>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <br></br>
            <h2 className='font-medium-small'>Disclaimer</h2>
            <p>
              Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following disclaimer, together with our terms and conditions of use.
            </p>            <br></br>

            <p>
              The information contained in this website is for general information purposes only and is provided by Sunrisetherapy.com.au. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. You need to make your own enquiries to determine if the information or products are appropriate for your intended use.
            </p>            <br></br>

            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>            <br></br>

            <p>
              Through this website you may be able to link to other websites which are not under the control of Sunrisetherapy.com.au. We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>            <br></br>

            <p>
              Every effort is made to keep the website up and running smoothly. However, Sunrisetherapy.com.au takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>            <br></br>
            <br></br>

            <h3 className='font-small'>COPYRIGHT NOTICE</h3>
            <br></br>
            <p>
              This website and its contents are the copyright of Sunrise Therapy – &copy; {new Date().getFullYear()}. All rights reserved.
            </p>            <br></br>

            <p>
              Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following. You may print or download contents to a local hard disk for your personal and non-commercial use only. You may copy some extracts only to individual third parties for their personal use, but only if you acknowledge the website as the source of the material.
            </p>            <br></br>

            <p>
              You may not, except with our express written permission, distribute or commercially exploit the content. You may not transmit it or store it on any other website or other form of electronic retrieval system.
            </p>            <br></br>            <br></br>


            <h2 className='font-medium-small'>Sunrise Therapy Privacy Policy</h2>
            <h3 className='font-small'>Last updated: 9 May 2024</h3>
            <br></br>
            <p>
              At Sunrisetherapy.com.au, we are committed to protecting your privacy as a customer and an online visitor to our website. We use the information we collect about you to maximise the services that we provide to you. We respect the privacy and confidentiality of the information provided by you and adhere to the Australian Privacy Principles. Please read our privacy policy below carefully.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>INFORMATION WE COLLECT FROM YOU</h3><br></br>
            <p>
              In the course of your visits to our website or use of our products and services, we may obtain the following information about you: name, company name, email address, telephone number, credit card details, billing address, geographic location, IP address, survey responses, support queries, blog comments and social media handles (together ‘Personal Data’).
            </p>            <br></br>

            <p>
              Our services are not directed to persons under 18 and we do not knowingly collect Personal Data from anyone under 18. If we become aware that a child under 18 has provided us with Personal Data, we will delete that information as quickly as possible. If you are the parent or guardian of a child and you believe they have provided us with Personal Data without your consent, then please contact us.
            </p>            <br></br>

            <p>
              You can review, correct, update or delete your Personal Data by either logging into your account and making the changes yourself or contacting us directly to do so.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>HOW WE USE YOUR INFORMATION</h3><br></br>
            <p>
              Personally Identifiable Information: We use the information we collect to deliver our services to you, including: communicating with you, providing technical support, notifying you of updates and offers, sharing useful content, measuring customer satisfaction, diagnosing problems and providing you with a personalised website experience.
            </p>            <br></br>

            <p>
              Marketing communications are only sent to you if you have requested or subscribed to them. You can opt out of our marketing communications at any time by unsubscribing or emailing us and your request will be actioned immediately.
            </p>            <br></br>

            <p>
              Non-Personally Identifiable Information: We also use the information we collect in aggregated and anonymized forms to improve our services, including: administering our website, producing reports and analytics, advertising our products and services, identifying user demands and assisting in meeting customer needs generally.
            </p>            <br></br>

            <p>
              Any information you choose to make publicly available, such as blog comments and testimonials on our website, will be available for others to see. If you subsequently remove this information, copies may remain viewable in cached and archived pages on other websites or if others have copied or saved the information.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>STORAGE AND SECURITY OF YOUR INFORMATION</h3><br></br>
            <p>
              We will use all reasonable means to protect the confidentiality of your Personal Data while in our possession or control. All information we receive from you is stored and protected on our secure servers from unauthorised use or access. Credit card information is encrypted before transmission and is not stored by us on our servers.
            </p>            <br></br>

            <p>
              To enable us to deliver our services, we may transfer information that we collect about you, including Personal Data, across borders for storage and processing in countries other than Australia. If your Personal Data is transferred and processed outside Australia, it will only be transferred to countries that have adequate privacy protections.
            </p>            <br></br>

            <p>
              We retain your personal information for as long as needed to provide services to you and as otherwise necessary to comply with our legal obligations, resolve disputes and enforce our agreements.
            </p>            <br></br>

            <p>
              In the event there is a breach of our security and your Personal Data is compromised, we will promptly notify you in compliance with the applicable law.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>COOKIES AND PIXELS</h3><br></br>
            <p>
              A cookie is a small file placed in your web browser that collects information about your web browsing behaviour. Use of cookies allows a website to tailor its configuration to your needs and preferences. Cookies do not access information stored on your computer or any Personal Data (e.g. name, address, email address or telephone number). Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. This may, however, prevent you from taking full advantage of our website.
            </p>            <br></br>

            <p>
              Our website uses cookies to analyse website traffic, provide social media sharing and liking functionality and help us provide a better website visitor experience. In addition, cookies and pixels may be used to serve relevant ads to website visitors through third party services such as Google Ads and Facebook Adverts. These ads may appear on this website or other websites you visit.
            </p>            <br></br> <br></br>

            <h3 className='font-small'>SHARING YOUR INFORMATION WITH THIRD PARTIES</h3><br></br>
            <p>
              We do not and will not sell or deal in Personal Data or any customer information.
            </p>            <br></br>

            <p>
              Your Personal Data details are only disclosed to third party suppliers when it is required by law, for goods or services which you have purchased, for payment processing or to protect our copyright, trademarks and other legal rights. To the extent that we do share your Personal Data with a service provider, we would only do so if that party has agreed to comply with our privacy standards as described in this privacy policy and in accordance with applicable law. Our contracts with third parties prohibit them from using any of your Personal Data for any purpose other than that for which it was shared.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>DISCLOSURE OF YOUR INFORMATION</h3><br></br>
            <p>
              We may from time to time need to disclose certain information, which may include your Personal Data, to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request. Also, we may use your Personal Data to protect the rights, property or safety of Sunrisetherapy.com.au, our customers or third parties.
            </p>            <br></br>

            <p>
              If there is a change of control in one of our businesses (whether by merger, sale, transfer of assets or otherwise), customer information, which may include your Personal Data, could be transferred to a purchaser under a confidentiality agreement. We would only disclose your Personal Data in good faith and where required by any of the above circumstances.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>LINKS TO OTHER WEBSITES</h3><br></br>
            <p>
              This website may contain links to other websites. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that we are not responsible for the privacy practises of such other websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personally identifiable information.
            </p>            <br></br>            <br></br>


            <h3 className='font-small'>CHANGE IN PRIVACY POLICY</h3><br></br>
            <p>
              As we plan to ensure our privacy policy remains current, this policy is subject to change. We may modify this policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on this website. Please return periodically to review our privacy policy.
            </p>            <br></br><br></br>

            <h3 className='font-small'>CONTACT US</h3><br></br>
            <p>
              If you have any questions or concerns at any time about our privacy policy or the use of your Personal Data, please contact us at admin@sunrisetherapy.com.au and we will respond within 48 hours.
            </p>            <br></br><br></br>


            <button className="close-policy-button" onClick={closeModal}>
              Close
            </button>

            </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;