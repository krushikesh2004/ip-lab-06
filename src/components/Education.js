import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      institution: "Vivekanand Education Society's Institute of Technology (VESIT)",
      degree: "Bachelor of Engineering (Information Technology)",
      year: "2022 – 2026",
      grade: "CGPA - 8.7 (till semester 4)"
    },
    {
      institution: "Ryan International School",
      degree: "Higher Secondary",
      year: "2022",
      grade: "Percentage - 91.60%"
    },
    {
      institution: "Ryan International School",
      degree: "Secondary",
      year: "2020",
      grade: "Percentage - 88.20%"
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p>{edu.degree}</p>
          <p>{edu.year}</p>
          <p>{edu.grade}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
