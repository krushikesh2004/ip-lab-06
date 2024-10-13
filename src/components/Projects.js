import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Warehouse Management System",
      technologies: "HTML, CSS, Tailwind CSS, JavaScript, Node.js, MongoDB",
      year: "2023",
      description: [
        "Developed a Warehouse Management System for real-time inventory tracking and sales analysis.",
        "Utilized Node.js and MongoDB to manage and update stock levels dynamically.",
        "Designed a user-friendly interface with Tailwind CSS to streamline warehouse operations."
      ],
      github: "https://github.com/yourusername/warehouse-management"
    },
    {
      title: "Fitness - Campus Health and Wellness Platform",
      technologies: "JavaScript, Tailwind CSS, Firebase",
      year: "2023",
      description: [
        "Developed a platform to help students monitor mental and physical health.",
        "Integrated Gemini AI to generate personalized fitness plans."
      ],
      github: "https://github.com/yourusername/fitness-platform"
    },
    {
      title: "Turf Management System",
      technologies: "Java Swing, MySQL",
      year: "2023",
      description: [
        "Developed a Turf Management System to manage bookings, events, and profit tracking for turf owners.",
        "Utilized MySQL for database integration to handle user data, payments, and activity logs.",
        "Designed a user-friendly interface with Java Swing for efficient management operations."
      ],
      github: "https://github.com/yourusername/turf-management"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p><strong>Technologies:</strong> {project.technologies}</p>
          <p><strong>Year:</strong> {project.year}</p>
          <ul>
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <p><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
