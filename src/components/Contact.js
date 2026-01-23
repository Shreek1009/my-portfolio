import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or connect with me on social media:</p>
      <p>Email: <a href="mailto:shreekarab5@gmail.com">shreekarab5@gmail.com</a></p>
      <p>Connect with me on:</p>
      <div className="social-icons">
        <a href="https://linkedin.com/in/shreekara1009" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" />
        </a>
        <a href="https://instagram.com/b_shreekara" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" />
        </a>
      </div>
    </section>
  );
};
export default Contact;
