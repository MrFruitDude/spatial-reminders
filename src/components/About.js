import React from 'react';
import './SecondaryPage.css'; // Reusing the same CSS as PrivacyPolicy
import screenshotTrailing from '../assets/screenshot_trailing.png'; // Adjust path as necessary

const About = () => {
  return (
    <div className="secondary-page">
      <h1>
        <span className="gray"> Your Tasks. </span> <span className="blue">Our Priority</span>.
      </h1>
      <p>
        <span className="highlight">Spatial Reminders</span> is crafted to enhance how you manage tasks and reminders within the Vision Pro ecosystem. By taking advantage of Vision Pro's features, our app offers a more intuitive way to organize and interact with your reminders in a 3D space.
      </p>
      <p>
        We're excited to contribute to the Vision Pro ecosystem by providing a simple, yet innovative tool that helps you stay organized in a way that feels natural and integrated into your surroundings.
      </p>
      <p>
        With <span className="highlight">Spatial Reminders</span>, we’re aiming to streamline your productivity to make your day (and life!) easier.
      </p>
      <div className="image-container">
        <img src={screenshotTrailing} alt="App screenshot" className="trailing-image" />
      </div>
    </div>
  );
};

export default About;