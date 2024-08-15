import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About';
import Contact from './components/Contact'; // Assuming you have a Contact component

function App() {
  return (
    <Router>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<About />} /> {/* Or your main landing page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;