import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-section">
          <h3>Kallen Mugambi</h3>
          <p>Software Engineer & Graphic Designer</p>
        </div>
        
        {/* Middle Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Socials + Logo */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/Kallendev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/kallen-mugambi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://x.com/kallenmugambi" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
          </div>
          {/* Logo */}
          <div className="footer-logo" style={{ marginTop: "10px" }}>
            <img 
              src="/images/Kallendev-logo.jpg" 
              alt="Kallen Logo" 
              style={{ width: "100px", height: "auto" }} 
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kallen. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
