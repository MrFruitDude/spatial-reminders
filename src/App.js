import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Header from './components/Header';

function App() {
  return (
    <Router basename="/spatial-reminders">
      <Header />
      <Routes>
        {/* Redirect from root path to /about */}
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </Router>
  );
}

export default App;