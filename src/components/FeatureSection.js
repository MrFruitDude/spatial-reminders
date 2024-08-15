import React from 'react';
import './FeatureSection.css';

const FeatureSection = ({ title, subtitle, image }) => {
  return (
    <section className="feature-section">
      <div className="feature-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default FeatureSection;