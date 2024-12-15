// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: 'linear-gradient(to right, #141e30, #243b55)',
      color: 'white',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0' }}>Welcome to My Portfolio</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>I build dynamic and modern web applications.</p>
      <a href="/projects">
        <button style={{ marginTop: '20px' }}>View My Work</button>
      </a>
    </section>
  );
};

export default Home;
