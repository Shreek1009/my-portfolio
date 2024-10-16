import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Kulkunda Temple Official Website Development</h3>
          <p>Developed an interactive web portal for Shri Basaveshwara Temple.</p>
          <p><strong>Technologies:</strong> Next.js, Tailwind CSS, Firebase, Express.js</p>
        </div>

        <div className="project-card">
          <h3>Blog Management System</h3>
          <p>Created a system for content creation and publication management.</p>
          <p><strong>Technologies:</strong> PHP, HTML, CSS, MySQL</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
