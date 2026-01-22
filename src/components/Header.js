import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <h1>My portfolio</h1>
      <nav>
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/skills" className={isActive('/skills')}>Skills</Link>
        <Link to="/projects" className={isActive('/projects')}>Projects</Link>
        <Link to="/experience" className={isActive('/experience')}>Experience</Link>
        <Link to="/blogs" className={isActive('/blogs')}>Blogs</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
