import React from 'react';
import './ContactForm.css'; // Ensure this path points to your updated CSS file

const Contact = () => {
  return (
    <div className="contact-form-section">
      <h2>Let's Chat!</h2>
      <p>
      Have a question, feedback, or simply want to connect? We're here to help! Feel free to reach out, and we'll be happy to assist. Your inquiries are always welcome, and we're committed to providing prompt and thoughtful responses.
      </p>
      <p>
        <a href="mailto:hello@spatialreminders.com">hello@spatialreminders.com</a><br />
      </p>
    </div>
  );
};

export default Contact;