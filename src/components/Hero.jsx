import React from 'react';
import { ReactTyped } from 'react-typed';
import './Hero.css';

const Hero = ({ toggleTheme, isDark }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">Hi,🙋‍♀️ I am <span className="name">Snehal !</span></h1>
          <ReactTyped
            className="typed-text"
            strings={[
              "ReactJS Developer",
              "Full Stack Developer",
              "MERN Stack Developer",
              "Frontend Developer"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
        {/*---------------------- */}
        {/* GitHub Stats Card */}

        <div className="github-stats">
            <a href="https://github.com/snehal2004" target="_blank" rel="noopener noreferrer">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=snehal2004&show_icons=true&theme=${isDark ? 'radical' : 'default'}`}
                alt="GitHub Stats"
              />
            </a>
          </div>
          
          {/* Floating LeetCode Icon */}
<a
  href="https://leetcode.com/snehalbahalkar/"
  className="leetcode-icon"
  target="_blank"
  rel="noopener noreferrer"
  title="My LeetCode Profile"
>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
</a>



        {/*  ------------------------*/ }

        {/* Theme Toggle Icon */}
        <div className="theme-icon" onClick={toggleTheme}>
          {isDark ? '🌞' : '🌙'}
        </div>

        <a href="mailto:youremail@example.com" className="hire-me-btn">Hire Me</a>
      </div>
    </section>
  );
};

export default Hero;
