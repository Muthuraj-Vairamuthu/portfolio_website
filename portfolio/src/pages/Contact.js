// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div style={{
      padding: '50px 20px',
      backgroundColor: '#2b2b2b',
      color: '#f1f1f1',
      textAlign: 'center'
    }}>
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:your.email@example.com" style={{ color: '#5c7aea' }}>your.email@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com" style={{ color: '#5c7aea' }}>View my profile</a></p>
    </div>
  );
};

export default Contact;
