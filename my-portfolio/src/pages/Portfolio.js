import React from 'react';
import '../App.css';

// Example project data
const projects = [
  {
    name: 'Project 1',
    description: 'A short description of Project 1.',
    githubLink: 'https://github.com/user/project1'
  },
  {
    name: 'Project 2',
    description: 'A short description of Project 2.',
    githubLink: 'https://github.com/user/project2'
  },
  {
    name: 'Project 3',
    description: 'A short description of Project 3.',
    githubLink: 'https://github.com/user/project3'
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Here's a showcase of my work. Take a look through my projects to see what I've been up to recently.</p>
      </div>
      <div className="project-scroll-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
