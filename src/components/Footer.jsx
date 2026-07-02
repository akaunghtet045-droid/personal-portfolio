import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Snakey<span>.</span></div>
        <p className="footer-text">Building modern web solutions with clean structural styling templates.</p>
        
        <div className="footer-socials">
          <a href="https://github.com/akaunghtet045-droid" className="footer-social-link">GitHub</a>
        </div>

        <p className="copyright">&copy; {new Date().getFullYear()} Snakey. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;