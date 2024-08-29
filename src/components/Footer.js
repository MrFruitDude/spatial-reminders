import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <p className="footer-text">© 2024 Spatial Reminders. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;