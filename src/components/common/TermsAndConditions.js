// src/components/common/TermsAndConditions.js
import React, { useState } from 'react';
import './PrivacyPolicy.css';  // Ensure the CSS file name matches exactly

const TermsAndConditions = ({ onClose }) => {
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
      <span className="privacy-link" onClick={openModal}>Terms & Conditions</span>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <h2 className='font-medium-small'>Terms & Conditions</h2>

            <p>
              PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY
              BEFORE USING THIS WEBSITE.
            </p><br></br>

            <p>
              Welcome to our website. If you continue to browse and use this website
              you are agreeing to comply with and be bound by the following terms and
              conditions of use, which together with our privacy policy and website
              disclaimer, govern Sunrisetherapy.com.au's relationship with you in relation
              to your use of this website.
            </p><br></br>

            <p>
              By using this website, you signify your acceptance of these terms and
              conditions of use. For the purposes of these terms and conditions, “Us”,
              “Our” and “We” refers to Sunrisetherapy.com.au and “You” and “Your”
              refers to you, the client, visitor, website user or person using our website.
            </p><br></br>

            <h3 className='font-small'>AMENDMENT OF TERMS</h3><br></br>

            <p>
              We reserve the right to change, modify, add or remove portions of these
              terms at any time. Please check these terms regularly prior to using our
              website to ensure you are aware of any changes. We will endeavour to
              highlight any significant or substantive changes to you where possible. If
              you choose to use our website then we will regard that use as conclusive
              evidence of your agreement and acceptance that these terms govern your
              and Sunrisetherapy.com.au's rights and obligations to each other.
            </p><br></br><br></br>

            <h3 className='font-small'>LIMITATION OF LIABILITY</h3><br></br>

            <p>
              It is an essential precondition to you using our website that you agree and
              accept that Sunrisetherapy.com.au is not legally responsible for any loss or
              damage you might suffer related to your use of the website, whether from
              errors or from omissions in our documents or information, any goods or
              services we may offer or from any other use of the website. This includes
              your use or reliance on any third party content, links, comments or
              advertisements. Your use of, or reliance on, any information or materials on
              this website is entirely at your own risk, for which we shall not be liable.
              <br></br><br></br>
              It shall be your own responsibility to ensure that any products, services or
              information available through this website meet your specific, personal
              requirements. You acknowledge that such information and materials may
              contain inaccuracies or errors and we expressly exclude liability for any
              such inaccuracies or errors to the fullest extent permitted by law.
            </p><br></br><br></br>

            <h3 className='font-small'>COMPETITION AND CONSUMER ACT</h3><br></br>

            <p>
              Our goods and services come with guarantees that cannot be excluded,
              modified or restricted under the Australian Consumer Law and are in
              addition to any manufacturer or supplier warranty.
              <br></br><br></br>
              For the purposes of Schedule 2 of the Australian Consumer Law, in particular Sections 51 to 53,
              64 and 64A of Part 3-2, Division 1, Subdivision A of the Competition and
              Consumer Act 2010 (Cth), Sunrisetherapy.com.au's liability for any breach of a
              term of this agreement is limited to: the supplying of the goods or services
              to you again; the replacement of the goods; or the payment of the cost of
              having the goods or services supplied to you again.
              <br></br><br></br>
              You must be over 18 years of age to use this website and to purchase any goods or services.
            </p><br></br><br></br>

            <h3 className='font-small'>DELIVERY OF GOODS</h3><br></br>

            <p>
              Digital goods are delivered immediately. Please be aware there are
              inherent risks associated with downloading any software and digital goods.
              Should you have any technical problems downloading any of our goods,
              please contact us so we may try to assist you.
            </p><br></br><br></br>

            <h3 className='font-small'>RETURNS AND REFUNDS</h3><br></br>

            <p>
              Sunrisetherapy.com.au handles returns and processes refunds in accordance
              with the Australian Consumer Protection legislation.
              <br></br><br></br>
              Please note, we don't provide refunds for services already provided.
            </p><br></br><br></br>

            <h3 className='font-small'>LINKS TO OTHER WEBSITES</h3><br></br>

            <p>
              Sunrisetherapy.com.au may from time to time provide on the website, links
              to other websites, advertisements and information on those websites for
              your convenience. This does not necessarily imply sponsorship,
              endorsement, or approval or arrangement between Sunrisetherapy.com.au
              and the owners of those websites.
              <br></br><br></br>
              Sunrisetherapy.com.au takes no responsibility for any of the content found on the linked websites. Sunrisetherapy.com.au’s
              website may contain information or advertisements provided by third
              parties for which Sunrisetherapy.com.au accepts no responsibility whatsoever
              for any information or advice provided to you directly by third parties. We
              are making a 'recommendation' only and are not providing any advice nor do
              we take any responsibility for any advice received in this regard.
            </p><br></br><br></br>

            <h3 className='font-small'>DISCLAIMER</h3><br></br>

            <p>
              To the fullest extent permitted by law, Sunrisetherapy.com.au absolutely
              disclaims all warranties, expressed or implied, including, but not limited to,
              implied warranties of merchantability and fitness for any particular purpose.
              Sunrisetherapy.com.au gives no warranty that the documents, goods or services
              will be free of errors, or that defects will be corrected, or that our website
              or server is free of viruses or any other harmful components.  
                           <br></br><br></br>
              Whilst we, at all times endeavour to have the most accurate, reliable and up-to-date
              information on our website, we do not warrant or make any representations
              regarding the use or the result of the use of any document, product, service,
              link or information on the website or as to the correctness, suitability,
              accuracy, reliability, or otherwise.            
                <br></br><br></br>

              It is your sole responsibility and not the responsibility of Sunrisetherapy.com.au to bear any and all costs of servicing,
              repairs, or correction. The applicable law in your state or territory may not
              permit these exclusions, particularly the exclusions of some implied
              warranties. Some of the above may not apply to you but you must ensure
              you are aware of any risk you may be taking by using this website or any
              products or services that may be offered through it. It is your responsibility
              to do so.
            </p><br></br><br></br>

            <h3 className='font-small'>YOUR PRIVACY</h3><br></br>

            <p>
              At Sunrisetherapy.com.au, we are committed to protecting your privacy. We
              use the information we collect about you to maximise the services that we
              provide to you. We respect the privacy and confidentiality of the information
              provided by you and adhere to the Australian Privacy Principles. Please read
              our separate Privacy Policy carefully.
            </p><br></br>

            <p>
              You may change your details at any time by advising us in writing via email.
              All information we receive from our customers is protected by our secure
              servers. Sunrisetherapy.com.au's secure server software encrypts all customer
              information before it is sent to us. Furthermore, all customer data collected is
              secured against unauthorised use or access. Credit card information is not
              stored by us on our servers.
            </p><br></br><br></br>

            <h3 className='font-small'>THIRD PARTIES</h3><br></br>

            <p>
              We do not and will not sell or deal in personal or customer information. We
              may however use in a general sense without any reference to your name,
              your information to create marketing statistics, identify user demands and
              assist in meeting customer needs generally. In addition, we may use the
              information that you provide to improve our website and services but not for
              any other use.
            </p><br></br><br></br>

            <h3 className='font-small'>DISCLOSURE OF INFORMATION</h3><br></br>

            <p>
              Sunrisetherapy.com.au may be required, in certain circumstances, to
              disclose information in good faith and where Sunrisetherapy.com.au is
              required to do so in the following circumstances: by law or by any court; to
              enforce the terms of any of our customer agreements; or to protect the
              rights, property or safety of our customers or third parties.
            </p><br></br><br></br>

            <h3 className='font-small'>EXCLUSION OF COMPETITORS</h3><br></br>

            <p>
              If you are in the business of creating similar documents, goods or services for
              the purpose of providing them for a fee to users, whether they be business
              users or domestic users, then you are a competitor of Sunrisetherapy.com.au.
              Sunrisetherapy.com.au expressly excludes and does not permit you to use or
              access our website, to download any documents or information from its
              website or obtain any such documents or information through a third party.
              If you breach this term then Sunrisetherapy.com.au will hold you fully
              responsible for any loss that we may sustain and further hold you accountable
              for all profits that you might make from such unpermitted and improper use.
              Sunrisetherapy.com.au reserves the right to exclude and deny any person
              access to our website, services or information in our sole discretion.
            </p><br></br><br></br>

            <h3 className='font-small'>COPYRIGHT, TRADEMARK AND RESTRICTIONS OF USE</h3><br></br>

            <p>
            This website contains material which is owned by or licensed to us. This
            material includes, but is not limited to, the design, layout, look, appearance,
            trademarks and graphics. You are not permitted to reproduce the
            documents, information or materials on the website for the purposes of sale
            or the use by any third party. In particular you are not permitted to
            republish, upload, transmit electronically or otherwise or distribute any of
            the materials, documents or products that may be available for download
            from time to time on this website.
            <br></br><br></br>
            Sunrisetherapy.com.au expressly reserves all copyright and trademark in
            all documents, information and materials on our website and we reserve
            the right to take action against you if you breach any of these terms.
            <br></br><br></br>
            Any redistribution or reproduction of part or all of the contents in any form is
            prohibited other than the following: you may print or download to a local
            hard disk extracts for your personal and non-commercial use only; and you
            may copy the content to individual third parties for their personal use, but
            only if you acknowledge the website as the source of the material.
            <br></br><br></br>
            You may not, except with our express written permission, distribute or
            commercially exploit the content. Nor may you transmit it or store it on any
            other website or other form of electronic retrieval system.
            </p><br></br><br></br>

            <h3 className='font-small'>WHOLE AGREEMENT</h3><br></br>

            <p>
            These terms and conditions represent the whole agreement between you
            and Sunrisetherapy.com.au concerning your use and access
            to Sunrisetherapy.com.au's website and your use and access to the
            documents and information on it. No other term is to be included in this
            agreement except where it is required to be included by any legislation of
            the Commonwealth or any State or Territory. All implied terms except those
            implied by statute and which cannot be expressly excluded are hereby
            expressly excluded.
            </p><br></br><br></br>

            <h3 className='font-small'>EXCLUSION OF UNENFORCEABLE TERMS</h3><br></br>

            <p>
            Where any clause or term above would by any applicable statute be illegal,
            void, or unenforceable in any State or Territory then such a clause shall not
            apply in that State or Territory and shall be deemed never to have been
            included in these terms and conditions in that State or Territory. Such a
            clause if legal and enforceable in any other State or Territory shall continue
            to be fully enforceable and part of this agreement in those other States and
            Territories. The deemed exclusion of any term pursuant to this paragraph
            shall not affect or modify the full enforceability and construction of the other
            clauses of these terms and conditions.
              </p><br></br><br></br>

            <h3 className='font-small'>JURISDICTION</h3><br></br>

            <p>
            This agreement and this website are subject to the laws of NSW and
            Australia. If there is a dispute between you and Sunrisetherapy.com.au that
            results in litigation then you must submit to the jurisdiction of the courts
            of NSW.
            </p><br></br><br></br>

            <h3 className='font-small'>CONTACT US</h3><br></br>

            <p>
            If you have any questions or concerns at any time about our privacy policy or the use of your Personal Data, please contact us at admin@sunrisetherapy.com.au and we will respond within 48 hours.

            </p><br></br><br></br>

            <p>
              Last Updated: {currentYear}
            </p><br></br><br></br>

            <button className="close-policy-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;
