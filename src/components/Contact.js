import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>

        <p className="contact-text">
          Feel free to reach out via email or connect with me on social media:
        </p>

        <p className="contact-email">
          Email:
          <a href="mailto:shreekarab5@gmail.com">shreekarab5@gmail.com</a>
        </p>

        <p className="contact-text">
          Connect with me on:
        </p>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/shreekara1009"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://instagram.com/b_shreekara"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;