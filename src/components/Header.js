import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the path based on your structure
import hamburgerIcon from '../assets/hamburger.png'; // Import the hamburger image

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="site-header">
        <div className="logo-container">
          <img src={logo} alt="Spatial Reminders Logo" className="logo" />
          <Link to="/about" className="site-title" onClick={() => setIsMobileMenuOpen(false)}>
            Spatial Reminders
          </Link>
        </div>
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
        <button className="hamburger" onClick={toggleMobileMenu}>
          <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" />
        </button>
      </header>
      <main className="content">
        {/* The rest of your content goes here */}
      </main>
    </>
  );
};

export default Header;