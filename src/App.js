import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      
      <Navbar />

      <section id="home">
      <Hero toggleTheme={toggleTheme} isDark={isDark} />
      </section>

      {/* Other sections */}

      <section id="about">
    <About />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="techstack">
    <TechStack />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="experience">
    <Experience />
  </section>

  <section id="contact">
    <Contact />
  </section>
    </>
  );
}

export default App;
