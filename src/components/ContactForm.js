import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <h2>Let’s Chat!</h2>
      <p>We’d love to hear from you! Your feedback is like the secret sauce that makes everything better...</p>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;