import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to right, #141e30, #243b55)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontSize: '4rem', margin: 0 }}>Hi, I’m Muthuraj</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>
          A passionate Web Developer creating modern and beautiful interfaces.
        </p>
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20 }}
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          position: 'absolute',
          top: '10%',
          left: '30%',
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Home;
