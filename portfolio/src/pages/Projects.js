import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { id: 1, title: 'AI Travel Planner', description: 'A modern AI-powered trip planner.', imageUrl: 'https://via.placeholder.com/400' },
    { id: 2, title: 'HealthTech Platform', description: 'Bridging technology and healthcare.', imageUrl: 'https://via.placeholder.com/400' },
  ];

  return (
    <div style={{
      padding: '50px 20px',
      background: '#121212',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    }}>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
