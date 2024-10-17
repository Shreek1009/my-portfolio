import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Shreekara B</h1>
      <nav>
        <Link to="/">Home</Link>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
