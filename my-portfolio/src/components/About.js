import React from 'react';
import TypingEffect from 'react-typing-effect';
import '../styles/About.css';
import profileImg from '../assets/shreekara.jpg';  // Replace with your actual image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <TypingEffect
            text={["Hello its me", "Shreekara B", "I'm a Web Developer and a Blogger"]}
            speed={100}
            eraseDelay={500}
            typingDelay={500}
          />
          <p>
            I am Shreekara, an aspiring web developer with a passion for blogging.
            I excel in building interactive web applications and have experience
            working on full-stack projects. I'm also actively working on Shri Hariharashwara
            Temple Official Website.
          </p>
          <h3>Connect with me:</h3>  {/* Added Connect with me heading */}
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
      </div>
    </section>
  );
};

export default About;
