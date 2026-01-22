import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-page">

      <h1 className="page-title">My Professional Journey</h1>

      <div className="timeline">

        {/* ===== OITRO FULL TIME ===== */}
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="company-header">
              <img src="https://media.licdn.com/dms/image/v2/D4E0BAQF57qBTZnB7qA/company-logo_200_200/company-logo_200_200/0/1729196012306?e=1770854400&v=beta&t=9QZopYj8aFA-6WBAt7cO3PZy41qPQhDmi3Q7ZJobveo" alt="Oitro" className="company-logo" />
              <div>
                <h3>Data Engineer — Oitro Technologies</h3>
                <span>Aug 2025 – Present</span>
              </div>
            </div>
            <ul>
              <li>Building scalable cloud-based data pipelines and automation systems on Azure.</li>
              <li>Working on AI-driven solutions, Agentic AI, and CSRD-driven applications.</li>
              <li>Contributing to emerging domains in data engineering and process optimization.</li>
              <li>Collaborating with cross-functional teams on real-world project implementations.</li>
            </ul>
            <p className="tech">Azure · Data Engineering · Agentic AI · Process Mining ·  Celonis · Cloud</p>
          </div>
        </div>

        {/* ===== OITRO INTERN ===== */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="company-header">
              <img src="https://media.licdn.com/dms/image/v2/D4E0BAQF57qBTZnB7qA/company-logo_200_200/company-logo_200_200/0/1729196012306?e=1770854400&v=beta&t=9QZopYj8aFA-6WBAt7cO3PZy41qPQhDmi3Q7ZJobveo" alt="Oitro" className="company-logo" />
              <div>
                <h3>Data Engineer Intern — Oitro Technologies</h3>
                <span>Jan 2025 – Jul 2025</span>
              </div>
            </div>
            <ul>
              <li>Completed Celonis Process Mining training.</li>
              <li>Worked on Agentic AI automation project.</li>
              <li>Hands-on Azure cloud development.</li>
            </ul>
            <p className="tech">Celonis · Azure · AI · Automation</p>
          </div>
        </div>

        {/* ===== ISDC ===== */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="company-header">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyTPw2rTK_XFMrU9JYLMutZBKfZ5aVRjCuA&s" alt="ISDC" className="company-logo" />
              <div>
                <h3>Head of Community — ISDC</h3>
                <span>Nov 2024 – Sep 2025</span>
              </div>
            </div>
            <ul>
              <li>Led student developer community and tech events.</li>
              <li>Mentored juniors and project teams.</li>
              <li>Organized workshops and hackathons.</li>
            </ul>
            <p className="tech">Leadership · Community · Mentorship</p>
          </div>
        </div>

        {/* ===== TEAM LEAD ===== */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Team Lead — ISCODERZ</h3>
            <span>Dec 2023 – Nov 2024</span>
            <ul>
              <li>Led development of official temple websites.</li>
              <li>Handled hosting, deployment and maintenance.</li>
              <li>Managed client communication.</li>
            </ul>
            <p className="tech">Full Stack · Deployment · Client Handling</p>
          </div>
        </div>

        {/* ===== TECHNICAL CAREER EDUCATION ===== */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="company-header">
              <img src="https://media.licdn.com/dms/image/v2/C560BAQEe59oYVcF9Fw/company-logo_200_200/company-logo_200_200/0/1630649263529/technical_career_education_logo?e=2147483647&v=beta&t=gQVBhFoeZUYxbzeUeVbJfyaaMdDzQWNcYLbT94i3SPs" alt="Technical Career Education" className="company-logo" />
              <div>
                <h3>Internship Trainee — Technical Career Education</h3>
                <span>Oct 2023 – Nov 2023</span>
              </div>
            </div>
            <ul>
              <li>Built web-based application using MERN Stack.</li>
              <li>Hands-on experience with full-stack development.</li>
              <li>Worked in on-site environment in Mangaluru.</li>
            </ul>
            <p className="tech">MERN Stack · React · Node.js · MongoDB · Visual Studio Code</p>
          </div>
        </div>

      </div>

      {/* ===== VOLUNTEERING SECTION ===== */}
      <h2 className="section-title">Volunteering & Community Involvement</h2>

      <div className="volunteering-cards">

        <div className="volunteer-card" data-aos="fade-up">
          <div className="volunteer-header">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Bharat_Scouts_and_Guides.svg/960px-Bharat_Scouts_and_Guides.svg.png" alt="Bharat Scouts and Guides" className="volunteer-logo" />
            <div>
              <h3>Rajyapuraskar Scout</h3>
              <h4>The Bharat Scouts and Guides</h4>
            </div>
          </div>
          <span className="volunteer-date">Jun 2016 – Jun 2019</span>
          <ul>
            <li>Qualified Tritiya Sopan & Rajyapuraskar.</li>
            <li>Community service and leadership camps.</li>
            <li>Rashtrapati Puraskar preparatory camp.</li>
          </ul>
          <p className="tech">Leadership · Discipline · Social Service</p>
        </div>

        <div className="volunteer-card" data-aos="fade-up" data-aos-delay="100">
          <div className="volunteer-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/YHAI_Logo_1.JPG" alt="YHAI" className="volunteer-logo" />
            <div>
              <h3>Member</h3>
              <h4>Youth Hostels Association of India</h4>
            </div>
          </div>
          <span className="volunteer-date">Dec 2025 – Present</span>
          <ul>
            <li>Participating in trekking and outdoor programs.</li>
            <li>Learning responsible trekking practices.</li>
            <li>Teamwork and nature conservation.</li>
          </ul>
          <p className="tech">Trekking · Teamwork · Environment</p>
        </div>

      </div>

    </div>
  );
};

export default Experience;
