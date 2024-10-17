import React from 'react';
import TypingEffect from 'react-typing-effect';
import '../styles/About.css';
import profileImg from '../assets/shreekara.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        {/* Hello and Name in large size, bold, and white */}
        <h1 className="greeting-text">Hello! <span className="name-highlight">I am Shreekara B</span></h1>
        
        {/* Typing effect for the title in blue and bold */}
        <TypingEffect
          text={["Aspiring Web Developer, Blogger, and Content Creator"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={500}
          className="effect-highlight"
        />
        
        <p>
          I am passionate about building interactive web applications and creating impactful content. I have experience in full-stack development and am actively contributing to projects like the Shri Hariharashwara Temple Official Website. I also enjoy photography and videography, often creating reels and sharing my journey on my YouTube channel.
        </p>
        <div className="social-icons">
          <a href="https://github.com/shreekara1009" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="GitHub" height="30" width="40" />
          </a>
          <a href="https://linkedin.com/in/shreekara1009" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" />
          </a>
          <a href="https://instagram.com/b_shreekara" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" />
          </a>
          <a href="https://bshreekara.blogspot.com" target="_blank" rel="noreferrer">
            <img src="https://i.pinimg.com/564x/fb/af/3a/fbaf3a7a128b388ab2626aa0aad02651.jpg" alt="Blogspot" height="30" width="40" />
          </a>
        </div>
        <a href="#cv" className="btn">Download CV</a>
      </div>
      <div className="about-image">
        <img src={profileImg} alt="Shreekara B" />
      </div>
    </section>
  );
};

export default About;
