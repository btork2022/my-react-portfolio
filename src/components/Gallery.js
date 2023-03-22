import React from 'react';
import Project from '../pages/Project';
import projectData from '../data/projectData.json';
import '../styles/Gallery.css';

function Gallery() {
  return (
    <div className="project-gallery-container">
      <h2>My Projects</h2>
      {/* Rendering Project component for each project in projectData */}
      <div className="projects-container">
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;