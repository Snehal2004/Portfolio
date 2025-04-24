import React from 'react';
import './Education.css';

const Education = () => {
  const timeline = [
    {
      title: 'Btech Computer Engineering',
      year: '2022-2025',
      institution: 'SVKM Institute Of Technology , Dhule',
    },
    {
      title: 'Diploma in Computer',
      year: '2019-2022',
      institution: 'SSVPS BSD Deore Polytechnic , Dhule',
    },
    {
      title: 'SSC (10th)',
      year: '2019',
      institution: "Kamlabai's Girls High School , Dhule",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span>{item.year}</span>
              <p>{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
