import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Shri Harihareshwara Temple Official Website Development</h3>
          <h4>Role: Team Lead</h4>
          <p>Led a team of developers (ISCODERZ) to engineer an interactive web portal for Shri Harihareshwara Temple, Hariharapallathadka.</p>
          <p><strong>Technologies:</strong> Next.js, Tailwind CSS, React Redux, TypeScript, Nest.js, Supabase, Prisma ORM,
          PostgreSQL, TypeScript, Twilio, AWS EC2</p>
          <p>
            <a
              href="https://www.shriharihareshwara.org"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-link"
            >
              Visit the official website of Shri Harihareshwara Temple
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3>Blog Management System</h3>
          <p>Created a system for content creation and publication management.</p>
          <p><strong>Technologies:</strong> PHP, HTML, CSS, MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
