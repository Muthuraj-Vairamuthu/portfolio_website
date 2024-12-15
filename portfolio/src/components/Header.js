// src/components/Header.js
import React from 'react';

const Header = ({ scrollToSection, refs }) => {
  const { homeRef, aboutRef, projectsRef, contactRef } = refs;

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#1f1f1f', color: 'white' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>My Portfolio</div>
      <div>
        <span style={{ margin: '0 15px', cursor: 'pointer' }} onClick={() => scrollToSection(homeRef)}>Home</span>
        <span style={{ margin: '0 15px', cursor: 'pointer' }} onClick={() => scrollToSection(aboutRef)}>About</span>
        <span style={{ margin: '0 15px', cursor: 'pointer' }} onClick={() => scrollToSection(projectsRef)}>Projects</span>
        <span style={{ margin: '0 15px', cursor: 'pointer' }} onClick={() => scrollToSection(contactRef)}>Contact</span>
      </div>
    </nav>
  );
};

export default Header;
