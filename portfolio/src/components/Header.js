import React, { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.style.backgroundColor = darkMode ? '#ffffff' : '#121212';
    document.body.style.color = darkMode ? '#000000' : '#ffffff';
    setDarkMode(!darkMode);
  };

  return (
    <nav style={{ padding: '10px 20px', background: '#1f1f1f', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div>My Portfolio</div>
      <div>
        <span style={{ margin: '0 15px' }}>Home</span>
        <span style={{ margin: '0 15px' }}>About</span>
        <span style={{ margin: '0 15px' }}>Projects</span>
        <span style={{ margin: '0 15px' }}>Contact</span>
        <span onClick={toggleMode} style={{ cursor: 'pointer' }}>
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </span>
      </div>
    </nav>
  );
};

export default Header;
