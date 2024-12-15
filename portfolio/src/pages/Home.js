// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to right, #141e30, #243b55)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#ffffff'
    }}>
      <div>
        <h1 style={{ fontSize: '3.5rem', margin: 0 }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: '1.2rem' }}>I build beautiful, dynamic, and modern web applications.</p>
      </div>
    </div>
  );
};

export default Home;
