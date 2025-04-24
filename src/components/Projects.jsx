import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Secure Ledger for Property-Registry',
    image: require('../assets/registry.png'),
    technologies: 'MERN- Stack, Javascript ,Blockchain',
    sourceCode: 'https://github.com/yourusername/secure-blockchain',
  },
  {
    name: 'Medi-Track',
    image: require('../assets/project1.png'),
    technologies: 'HTML,CSS,JavaScript,MySql',
    sourceCode: 'https://github.com/Snehal2004/Meditrack',
  },
  {
    name: 'Shop-Me',
    image: require('../assets/shop.jpg'),
    technologies: 'HTML, CSS, JavaScript,React',
    sourceCode: 'https://github.com/yourusername/ecommerce',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">
              <button className="source-button">Source Code</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
