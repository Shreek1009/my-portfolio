import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const TechBadge = ({ tech }) => (
    <span className="tech-badge">{tech}</span>
  );

  const ProjectCard = ({ title, description, technologies, links, category, role, delay = 0 }) => (
    <div className="project-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card-header">
        <div className="title-section">
          <h3>{title}</h3>
          <span className={`category-tag category-${category}`}>{category}</span>
        </div>
        {role && <h4 className="role">{role}</h4>}
      </div>
      
      <p className="description">{description}</p>
      
      <div className="tech-stack">
        {technologies.map((tech, idx) => (
          <TechBadge key={idx} tech={tech} />
        ))}
      </div>

      {links && (
        <div className="action-buttons">
          {links.live && (
            <a href={links.live} target="_blank" rel="noopener noreferrer" className="btn-live">
              View Live →
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-github">
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <h2>AI & Data Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Wearable Seizure Detection Device using Deep Learning"
          description="Real-time seizure detection using EEG signals + LSTM neural networks (~90% accuracy). Automatic caregiver alert system for faster medical response and improved patient safety."
          technologies={['Python', 'LSTM', 'ANN', 'PCA', 'EEG Processing']}
          category="AI"
          links={{ github: 'https://github.com' }}
          delay="0"
        />
        <ProjectCard
          title="ZenVision – Real-Time Yoga Pose Recognition System"
          description="Computer vision system detecting & classifying yoga poses from live video feed. Provides real-time posture correction feedback to help users improve form and prevent injuries."
          technologies={['TensorFlow', 'OpenPose', 'CNN', 'Computer Vision', 'Python']}
          category="AI"
          links={{ github: 'https://github.com/VoidGeek/Yoga-Pose-Detection-using-ML.git' }}
          delay="100"
        />
      </div>

      <h2 style={{ marginTop: "60px" }}>Full-Stack & Client Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Shri Harihareshwara Temple Official Website"
          description="Led a team of developers (ISCODERZ) to engineer an interactive web portal for Shri Harihareshwara Temple, Hariharapallathadka. Production-ready platform with real-time features and scalable architecture."
          technologies={['Next.js', 'React Redux', 'TypeScript', 'Nest.js', 'PostgreSQL', 'AWS EC2', 'Tailwind CSS']}
          category="Web"
          role="Role: Team Lead"
          links={{ live: 'https://www.shriharihareshwara.org' }}
          delay="0"
        />
        <ProjectCard
          title="Shrirama Temple Chokkadi – Official Website"
          description="Led a team of developers (ISDC) to engineer an interactive web portal for Shrirama Temple, Chokkadi.Developed and deployed the official website for Shrirama Temple, Chokkadi. Enabled online access to temple information, events and announcements. Handled hosting, domain setup and deployment for production."
          technologies={['React', 'Tailwind CSS', 'Hosting', 'Domain Management']}
          category="Web"
          links={{ live: 'https://www.srtchokkadi.org' }}
          delay="100"
        />
        <ProjectCard
          title="Blog Management System"
          description="Created a comprehensive system for content creation, publication management, and user engagement. Full CMS functionality with database-driven architecture."
          technologies={['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']}
          category="Web"
          links={{ github: 'https://github.com/Shreek1009/Blog-assignment3' }}
          delay="200"
        />
      </div>
    </section>
  );
};

export default Projects;
