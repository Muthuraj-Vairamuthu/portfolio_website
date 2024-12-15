import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', backgroundColor: '#fff', color: '#333' }}>
      <h3>{title}</h3>
      <img src={imageUrl} alt="Project" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
