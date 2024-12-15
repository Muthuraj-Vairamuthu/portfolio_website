// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
    { id: 1, title: 'Project 1', description: 'A web application built with React.', imageUrl: 'https://via.placeholder.com/400' },
    { id: 2, title: 'Project 2', description: 'A modern design with animations.', imageUrl: 'https://via.placeholder.com/400' }
  ];

  return (
    <div style={{
      padding: '50px 20px',
      backgroundColor: '#1f1f1f',
      color: '#f1f1f1',
      textAlign: 'center'
    }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {projectData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
