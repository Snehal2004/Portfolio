import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import devAnimation from '../assets/lottie/new1.json';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-animation">
        <Lottie animationData={devAnimation} loop={true} />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
      Hello! I'm <strong>Snehal Bahalkar</strong>, a passionate and dedicated Full Stack Developer.  My journey in tech started with Java, and I’ve expanded my skills across both frontend and backend technologies.
  
      I have a solid academic background in Computer Engineering from SVKM Institute of Technology, and during my time there, I’ve led projects that focus on real-world solutions.
    
      I'm a strong believer in collaboration and continuous learning. I thrive in team environments where everyone contributes and grows together. 
    
      I’m currently looking for exciting opportunities to work as a developer and contribute to innovative projects.
    </p>
      </div>
    </section>
  );
};

export default About;
