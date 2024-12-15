import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'This is Project 1', imageUrl: 'https://via.placeholder.com/400' },
    { id: 2, title: 'Project 2', description: 'This is Project 2', imageUrl: 'https://via.placeholder.com/400' }
  ]);

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.imageUrl} />
      ))}
    </div>
  );
};

export default Projects;
