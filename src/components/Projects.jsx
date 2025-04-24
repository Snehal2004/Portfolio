import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Secure Blockchain System',
    image: require('../assets/project1.png'),
    technologies: 'Java, Spring Boot, MongoDB, Blockchain',
    sourceCode: 'https://github.com/yourusername/secure-blockchain',
  },
  {
    name: 'Employee Management Portal',
    image: require('../assets/project2.jpg'),
    technologies: 'ReactJS, Node.js, Express, MongoDB',
    sourceCode: 'https://github.com/yourusername/employee-portal',
  },
  {
    name: 'Weather Forecast App',
    image: require('../assets/project3.jpg'),
    technologies: 'HTML, CSS, JavaScript, OpenWeather API',
    sourceCode: 'https://github.com/yourusername/weather-app',
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
