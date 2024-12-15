import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '20px',
      margin: '20px',
      color: '#fff',
      textAlign: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease-in-out',
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
