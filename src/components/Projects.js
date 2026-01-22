import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>AI & Data Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Wearable Seizure Detection Device using Deep Learning</h3>
          <p>Real-time seizure detection using EEG signals + LSTM neural networks (~90% accuracy).</p>
          <p>Automatic caregiver alert system for faster medical response and improved patient safety.</p>
          <p><strong>Technologies:</strong> Python, LSTM, ANN, PCA, EEG Signal Processing</p>
        </div>
        <div className="project-card">
          <h3>ZenVision – Real-Time Yoga Pose Recognition System</h3>
          <p>Computer vision system detecting & classifying yoga poses from live video feed.</p>
          <p>Provides real-time posture correction feedback to help users improve form and prevent injuries.</p>
          <p><strong>Technologies:</strong> TensorFlow, OpenPose, CNN, Computer Vision</p>
        </div>
      </div>

      <h2 style={{ marginTop: "50px" }}>Full-Stack & Client Projects</h2>
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
        <div className="project-card">
          <h3>Shrirama Temple Chokkadi – Official Website</h3>
          <p>
            Developed and deployed the official website for Shrirama Temple, Chokkadi, enabling
            online access to temple information, events, and announcements for devotees.
          </p>
          <p>
            Handled hosting, domain setup, and deployment for a production-ready public website.
          </p>
          <p><strong>Technologies:</strong> React, Hosting, Domain Management</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
