import React from 'react';
import './ContactForm.css'; // Ensure this path points to your updated CSS file

const Contact = () => {
  return (
    <div className="contact-form-section">
      <h2>Let's Chat!</h2>
      <p>
        Got a question, a thought, or just want to say hi? We're all ears! Reach out and we'll sprinkle some magic on your queries. And don't worry, it’s as easy as pie to send your messages our way!
      </p>
      <p>
        <a href="mailto:hello@spatialreminders.com">hello@spatialreminders.com</a><br />
        (123) 456-7890
      </p>
    </div>
  );
};

export default Contact;