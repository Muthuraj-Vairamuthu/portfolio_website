import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const Header = ({ scrollToSection, refs }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  // Add or remove the 'dark-mode' class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      background: '#1f1f1f',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</div>
      <div>
        <span onClick={() => scrollToSection(refs.homeRef)} style={{ margin: '0 15px', cursor: 'pointer' }}>Home</span>
        <span onClick={() => scrollToSection(refs.aboutRef)} style={{ margin: '0 15px', cursor: 'pointer' }}>About</span>
        <span onClick={() => scrollToSection(refs.projectsRef)} style={{ margin: '0 15px', cursor: 'pointer' }}>Projects</span>
        <span onClick={() => scrollToSection(refs.contactRef)} style={{ margin: '0 15px', cursor: 'pointer' }}>Contact</span>
        <span onClick={toggleMode} style={{ cursor: 'pointer' }}>
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </span>
      </div>
    </nav>
  );
};

export default Header;
