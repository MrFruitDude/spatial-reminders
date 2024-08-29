import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-container">
        <h1>
          <span className="blue">Privacy</span> <span className="gray">Policy</span>
        </h1>
        <span className="last-updated">Last Updated: August 13, 2024</span>
        <p>
          <strong className="highlight">Spatial Reminders</strong> ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our app.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information when you use <strong className="highlight">Spatial Reminders</strong>:</p>
        <ul>
          <li><strong>Personal Information:</strong> Information you provide directly, such as your email address when contacting support or signing up for newsletters.</li>
          <li><strong>Usage Data:</strong> Information about how you use the app, including interactions with features, error reports, and device information.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li><strong>To Provide and Maintain the App:</strong> Ensuring the app functions as expected and improving its performance.</li>
          <li><strong>To Communicate with You:</strong> Responding to your inquiries, sending updates, or providing support.</li>
          <li><strong>To Improve the App:</strong> Analyzing usage patterns to enhance user experience and develop new features.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third-party companies that assist us in operating the app, such as analytics or hosting services.</li>
          <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and users, we may disclose your information.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We take reasonable measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> Request corrections to any inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request the deletion of your personal information.</li>
        </ul>
        <p>To exercise these rights, please contact us at <a href="mailto:data@spatialreminders.ca">data@spatialreminders.ca</a>.</p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us at <a href="mailto:hello@spatialreminders.ca">hello@spatialreminders.ca</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;