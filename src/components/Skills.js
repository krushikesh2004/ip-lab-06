import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["C", "Python", "JavaScript"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["HTML", "CSS", "Tailwind CSS", "React"]
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub"]
    },
    {
      category: "Databases",
      items: ["SQL"]
    },
    {
      category: "Relevant Coursework",
      items: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management System (DBMS)",
        "Object Oriented Programming"
      ]
    }
  ];

  return (
    <section className="skills section-container">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
