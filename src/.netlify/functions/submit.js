//submit.js

const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  try {

    const data = JSON.parse(event.body);

    // Configure the transporter for nodemailer using environment variables
    const transporter = nodemailer.createTransport({
      // if email service is big like google or outlook it only need its name
      service: process.env.EMAIL_SERVICE, // Use the EMAIL_SERVICE environment variable

      host: process.env.EMAIL_HOST, //  SMTP server
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true', // Use SSL/TLS

      auth: {
        user: process.env.EMAIL_USER, // Use the EMAIL_USER environment variable
        pass: process.env.EMAIL_PASSWORD, // Use the EMAIL_PASSWORD environment variable
      },
    });

    // Mail options (customize the email content as you prefer)
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use the EMAIL_USER environment variable
      to: process.env.EMAIL_USER, // Use the EMAIL_USER environment variable
      subject: `New Contact Form Submission from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    // Return a success response to the frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful!' }),
    };
  } catch (error) {
    console.error('Form submission failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Form submission failed. Please try again later.' }),
    };
  }
};



