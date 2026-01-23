import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Shreekara B</p>
      <nav>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> |
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </footer>
  );
};
useEffect(() => {
  document.title = "Shreekara B | Footer";
}, []);

export default Footer;
