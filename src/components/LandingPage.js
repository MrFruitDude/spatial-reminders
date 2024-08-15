import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../assets/logo.png'; // Adjust the path according to your directory structure

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <div className="logo-text-container">
            <img src={logo} alt="Spatial Reminders Logo" className="logo" />
            <h1>Spatial Reminders</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;