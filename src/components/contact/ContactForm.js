// src/components/contact/ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';
import Recaptcha  from 'react-google-recaptcha';
import './ContactForm.css'; // CSS file for ContactForm styles

const ContactForm = () => {
  const initialFormState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() && captchaToken) {
      setIsSubmitting(true);
      try {

        // Form submission logic 


        // const response = await axios.post(
        //   '/.netlify/functions/submit',
        //   {
        //     ...formData,
        //     captchaToken,
        //   }
        // );

        // console.log('Form submitted:', response.data);
        setFormData(initialFormState);
        setIsSubmitting(false);
        alert('Form submission successful!');
      } catch (error) {
        console.error('Form submission failed:', error);
        alert('Form submission failed. Please try again later.');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label><br/>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label><br/>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message">Message</label><br/>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        {errors.message && <p className="error-message">{errors.message}</p>}
      </div>
      <Recaptcha
  size="normal"
  id="recaptcha-google"
  sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY || 'your_placeholder_site_key'}
  onChange={handleCaptchaChange} 
/>
      <button className="appointment-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
