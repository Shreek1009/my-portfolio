import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Languages and Tools</h2>

      {/* ===== SKILLS ===== */}
      <div className="skills-section">
        <h3>Technical Skills</h3>

        <div className="skills-grid">

          <div className="skill-card" data-aos="fade-up">
            <h4>🧠 Data, AI & IoT</h4>
            <p>
              Python, Deep Learning, CNN, LSTM, Computer Vision, OpenCV, IoT,
              TensorFlow, ML Models
            </p>
          </div>

          <div className="skill-card" data-aos="fade-up" data-aos-delay="50">
            <h4>⚙ Backend & Databases</h4>
            <p>
              Node.js, NestJS, REST APIs, PHP, MySQL, PostgreSQL, Prisma ORM
            </p>
          </div>

          <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
            <h4>🎨 Frontend Development</h4>
            <p>
              React.js, Redux, Next.js, Tailwind CSS, HTML, CSS, Responsive UI
            </p>
          </div>

          <div className="skill-card" data-aos="fade-up" data-aos-delay="150">
            <h4>☁ Cloud & Tools</h4>
            <p>
              AWS EC2, Supabase, GitHub, VS Code, Linux, Figma
            </p>
          </div>

          <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
            <h4>🧑‍💼 Professional Skills</h4>
            <p>
              Leadership, Team Leadership, Communication, Project Management,
              Client Handling
            </p>
          </div>

          <div className="skill-card" data-aos="fade-up" data-aos-delay="250">
            <h4>💻 Programming Foundations</h4>
            <p>
              C Programming, Data Structures Basics, MERN Stack Development
            </p>
          </div>

        </div>
      </div>

      <div className="skills-icons">
        <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40" />
        </a>
        <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40" />
        </a>
        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" />
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
        </a>
      </div>
    </section>
  );
};

export default Skills;
