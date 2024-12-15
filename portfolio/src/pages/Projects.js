import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Modern AI-powered project', imageUrl: 'https://via.placeholder.com/400' },
    { id: 2, title: 'Project 2', description: 'Bridging tech and healthcare', imageUrl: 'https://via.placeholder.com/400' }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '50px',
      background: '#121212'
    }}>
      {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
    </div>
  );
};

export default Projects;
