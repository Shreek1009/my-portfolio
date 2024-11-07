import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Blogs from './components/Blogs';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Blogs />
              <Skills />
              <Projects />
              <Contact />  {/* Added Contact component here */}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
