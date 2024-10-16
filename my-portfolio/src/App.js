import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';  // Importing Skills
import Projects from './components/Projects';  // Import Projects
import Contact from './components/Contact';  // Importing Contact

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Projects /> {/* Add Projects to the main page */}
            </>
          } />
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
