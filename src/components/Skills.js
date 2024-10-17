import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Languages and Tools</h2>
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
