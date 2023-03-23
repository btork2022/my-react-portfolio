import React from 'react';
import '../styles/Project.css';

function Project({ project }) {
  return (
    <div className="project-container">

      {/* Project title */}
      <h3>{project.title}</h3>
      
      {/*Description*/}
      <p>{project.description}</p>
      
      {/* Deployed and GitHub links */}
      <div className="project-links">
        <a href={project.deployedLink} target="_blank" rel="noreferrer">
          Deployed Version
        </a>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
      
      {/* Project image */}
      {/* <img src={project.image} alt={project.title} className="project-image" /> */}
      <img src={require(project.image)} alt={project.title} className="project-image" />
      {/* <img src={require("../assets/img/IMG-1977ed1.png")} className="headshot"/> */}
    </div>
    
  );
}

export default Project;