import React, { useEffect, useState } from 'react';

import './SecondaryPage.css';
import './Footer.css';


import folderRoom from '../assets/folder_room_02.png'; // Adjust path as necessary
import featureWalkthroughDesktop from '../assets/SR_featureWalkthrough_v06_1x1_01.mp4'; // Desktop video
import featureWalkthroughMobile from '../assets/SR_featureWalkthrough_mobile_01.mp4'; // Mobile video

import dragDropVideoDesktop from '../assets/dragDropMain_02.mp4'; // Desktop video
import dragDropVideoMobile from '../assets/dragDropMain_mobile.mp4'; // Mobile video

import recurrenceRules from '../assets/recurrencePatterns_01.jpg';
import widgetImage from '../assets/widgetImage.png'; // Common video
import widgetImage_02 from '../assets/widgetImage.jpg'; // Common video



import pinIcon from '../assets/pin_icon_transparent.png'; // Adjust path as necessary
import syncIcon from '../assets/sync_icon_transparent.png'; // Adjust path as necessary
import calendarIcon from '../assets/calendar_icon_transparent.png'; // Adjust path as necessary
import paletteIcon from '../assets/palette_icon_transparent.png'; // Adjust path as necessary
import filterIcon from '../assets/filter_icon_transparent.png'; // Adjust path as necessary
import puzzleIcon from '../assets/puzzle_icon_transparent.png'; // Adjust path as necessary
import brainIcon from '../assets/brain_icon_transparent.png'; // Adjust path as necessary
import loveApple from '../assets/love_apple.png'; // Adjust path as necessary

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {




    const adjustVideoAspectRatio = () => {
      const videoContainers = document.querySelectorAll('.video-container, .scroll-video-container');
      videoContainers.forEach((container) => {
        container.style.height = `${container.offsetWidth}px`; // Set height equal to width for 1:1 ratio
      });
    };

    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    // Initial check and set up
    checkIfMobile();
    adjustVideoAspectRatio();

    // Event listeners
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('resize', adjustVideoAspectRatio);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('resize', adjustVideoAspectRatio);
    };
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <div className="secondary-page">
        <div className="hero-section-alt">
          <div className="hero-text">
            <h1 className="white-headline">Meet <span className="gradient-text">Spatial Reminders.</span></h1>
            <p className="white-description">
              The revolutionary way to organize your life with Vision Pro. Replace scattered sticky notes with virtual tasks that live where they matter most.
            </p>
            <a href="https://apps.apple.com/app/spatial-reminders/id6502372575" className="download-button">Download Now</a>
          </div>
          <div className="video-container">
            <video
              src={isMobile ? featureWalkthroughMobile : featureWalkthroughDesktop}
              autoPlay
              loop
              muted
              playsInline
              className="feature-video"
            ></video>
          </div>
        </div>
      </div>

      {/* Section 2: Feature - Spatial Organization */}
      <div className="feature-section">
        <div className="meet-spatial-reminders">
          <h2 className="black-headline large-headline">Organize Where It Matters.</h2>
          <p className="black-description">
            Pin reminders next to your desk, place a grocery list by the counter, or drop project notes near your workspace. With Spatial Reminders, your tasks are always right where you need them.
          </p>
          <div className="image-container">
            <img src={folderRoom} alt="Feature showcase" className="feature-image" />
          </div>
        </div>
      </div>

      {/* Section 3: Dark Section - Seamless Syncing */}
      <div className="dark-section">
        <div className="hero-section">
          <h1 className="white-headline">Sync Seamlessly. <span className="gradient-text">Stay in Control.</span></h1>
          <h2 className="white-subheadline">Never miss a beat with automatic syncing across all your devices.</h2>
          <ul className="feature-list">
            <li>
              <img src={syncIcon} alt="Sync icon" className="feature-icon-text" />
              <span><strong>Always Up-to-Date:</strong> Any changes you make are instantly reflected across your Apple devices, so your reminders are always current.</span>
            </li>
            <li>
              <img src={puzzleIcon} alt="Puzzle icon" className="feature-icon-text" />
              <span><strong>Effortless Integration:</strong> Spatial Reminders syncs directly with Apple Reminders, keeping everything in one place.</span>
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img src={loveApple} alt="Love Apple Reminders" className="apple-love-logo" />
        </div>
      </div>

      {/* Section 4: Bright Section - Customizable Widgets */}
      <div className="bright-section">
        <div className="hero-section">
          <h1 className="black-headline">Widgets <span className="gradient-text">That Work for You.</span></h1>
          <h2 className="black-subheadline">Customize and organize your reminders in ways that fit your workflow.</h2>
          <div className="feature-list bright-feature-list">

            {/* First Feature Item */}
            <div className="feature-item">
              <img src={paletteIcon} alt="Palette icon" className="feature-icon" />
              <h3 className="feature-headline">Personalized Widgets</h3>
            </div>
            <p className="feature-description">Customize widgets with specific titles, icons, and colors that match your style and needs.</p>

            {/* Second Feature Item */}
            <div className="feature-item">
              <img src={filterIcon} alt="Filter icon" className="feature-icon" />
              <h3 className="feature-headline">Filtered Reminders</h3>
            </div>
            <p className="feature-description">Filter reminders by tags, due dates, or priority to keep your focus on what matters most.</p>

            {/* Third Feature Item */}
            <div className="feature-item">
              <img src={pinIcon} alt="Pin icon" className="feature-icon" />
              <h3 className="feature-headline">Quick Access</h3>
            </div>
            <p className="feature-description">Place these widgets in your space for quick access, ensuring your reminders are always within reach.</p>

          </div>
        </div>
        <div className="image-container">
          <img src={isMobile ? widgetImage_02 : widgetImage} alt="Widget showcase" className="feature-image-alt-left" />
        </div>
      </div>

      {/* Section 5: Dark Section - Advanced Recurrence */}
      <div className="dark-section">
        <div className="hero-section">
          <h1 className="white-headline">Smart Scheduling. <span className="gradient-text">Effortless Planning.</span></h1>
          <h2 className="white-subheadline">Advanced recurrence rules that adapt to your routine.</h2>
          <ul className="feature-list">
            <li>
              <img src={calendarIcon} alt="Calendar icon" className="feature-icon-text" />
              <span><strong>Complex Recurrence Made Simple:</strong> Set up bi-weekly meetings, monthly bill reminders, or even quarterly tasks with ease.</span>
            </li>
            <li>
              <img src={brainIcon} alt="Brain icon" className="feature-icon-text" />
              <span><strong>Natural Language Processing:</strong> Automatically detect dates and complex patterns for smarter scheduling.</span>
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img src={recurrenceRules} alt="Feature showcase" className="feature-image-alt" />
        </div>
      </div>

      {/* Section 6: Feature - Drag-and-Drop Flexibility */}
      <div className="feature-section">
        <div className="meet-spatial-reminders">
          <h2 className="black-headline large-headline">Rearrange with Ease.</h2>
          <p className="black-description">
            Need to move a reminder? Just drag it and drop it. Spatial Reminders makes it simple to reorganize your tasks, so your workspace always works for you.
          </p>
          <div className="video-container">
            <video
              src={isMobile ? dragDropVideoMobile : dragDropVideoDesktop}
              autoPlay
              loop
              muted
              playsInline
              className="feature-video"
            ></video>
          </div>
        </div>
      </div>


    </>
  );
};

export default About;