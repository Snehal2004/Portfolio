import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Infotech Incorporate, Dhule</h3>
            <span>Nov ‘22 – Dec ‘22</span>
            <p>Learned full stack development using the HTML, CSS, JavaScript
Collaborated with team members to build E-Commerce Hub, a user-friendly   shopping 
website for browsing products, checking prices, and making online purchases with delivery options.
</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Sumago Infotech Pvt. Ltd, Nashik</h3>
            <span>Aug ‘21 – Sept ‘21</span>
            <p>Worked with a team to learn full stack development and build a project called Student Learning Platform.
            Built using HTML, CSS, JavaScript offering an interface for students. </p>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Experience;
