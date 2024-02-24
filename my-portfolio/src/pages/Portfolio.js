import React from 'react';
import '../App.css';

// Example project data
const projects = [
  {
    name: 'Planetary Visualizer',
    description: '"Planetary Visualizer" is an interactive web application designed to bring the cosmos closer to home. This project leverages cutting-edge web technologies to render detailed and immersive visualizations of various planets in our solar system. Users can explore the dynamic and beautifully crafted 3D models of planets and learn about their key features. The application aims to provide an educational and engaging experience for astronomy enthusiasts and casual learners alike, promoting an appreciation for the wonders of our planetary neighbors.',
    githubLink: 'https://github.com/Rpradhan43/Planetary-Visualizer'
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
    <div className="snap-container portfolio-page"> {/* Added portfolio-page class here */}
      {/* Projects Section */}
      <section className="snap-section">
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
      </section>

      {/* Work Experience and Skills Section */}
      <section className="snap-section">
        <div className="container">
          <div className="portfolio-columns">
            <div className="portfolio-column">
              <h2>Work Experience</h2>
              <p>KSP Consulting</p>
              <p>IT Consultant/Accountant</p>
              <p>June 2020 - Present</p>
              <p>•	Providing technical support to colleagues, resolving immediate issues swiftly to maintain productivity.</p>
              <p>•	Orchestrating the automation of tasks using scripting in Excel, Python, or similar languages, enhancing productivity.</p>
              <p>•	Preparing monthly and quarterly financial statements, ensuring accuracy and compliance with accounting standards.</p>
              <p>•	Assisting in the preparation of tax returns for non-profit organizations, aligning with tax laws and regulations.</p>
              <p>•	Managing payroll processing and the issuance of 1099 forms for both business and non-profit entities, maintaining confidentiality and accuracy.</p>
              <p>•	Delivering exceptional customer service, addressing inquiries and concerns promptly and professionally.</p>
              <p>•	Compiling and reviewing data for accuracy before entry, enhancing the reliability of financial records.</p>
              <p>•	Proactively communicating with supervisors regarding the status of work, ensuring timely updates and project completion.</p>
            </div>
            <div className="portfolio-column">
              <h2>Soft Skills</h2>
              <p>Time Management, Collaboration, Communication, Adaptable, Multitasking, Problem Solving, Data Confidentiality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;