import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path based on your structure

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="logo-container">
          <Link to="spatial-reminders/about">
            <img src={logo} alt="Spatial Reminders Logo" className="logo" />
          </Link>
        </div>
        <div className="download-container">
          <a href="https://apps.apple.com/app/idYOUR_APP_ID" className="download-button">
            Download Now
          </a>
        </div>
      </header>
      <main className="content">
        {/* The rest of your content goes here */}
      </main>
    </>
  );
};

export default Header;