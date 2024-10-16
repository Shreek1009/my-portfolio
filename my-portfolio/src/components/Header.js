import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Shreekara B</h1>
      <nav>
        <Link to="/">Home</Link>   {/* Navigates to Home */}
        <a href="#skills">Skills</a>  {/* Link for Skills on the same page */}
        <a href="#projects">Projects</a> {/* Link for Projects on the same page */}
        <Link to="/contact">Contact</Link>  {/* Navigates to Contact page */}
      </nav>
    </header>
  );
};

export default Header;
