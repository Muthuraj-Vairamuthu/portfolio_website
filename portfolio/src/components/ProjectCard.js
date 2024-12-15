// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div style={{
      border: '1px solid #444',
      backgroundColor: '#2b2b2b',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      marginBottom: '20px',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <img src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0', fontSize: '1.5rem', color: '#5c7aea' }}>{title}</h3>
        <p style={{ marginTop: '10px', fontSize: '1rem', color: '#ccc' }}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
