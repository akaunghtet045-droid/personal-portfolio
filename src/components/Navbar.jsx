import React, { useState } from 'react';
import '../css/Navbar.css';
import newcv from '../assets/newcv.pdf'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="nav-logo">Snakey<span>.</span></a>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li className="nav-item"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="nav-item"><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <a href={newcv} download='Kyaw_yi_mon_Frontend_Developer_CV.pdf' target="_blank" rel="noreferrer">
              <button className="resume-btn">Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;