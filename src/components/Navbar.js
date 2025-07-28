import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <nav className="navbar">
        <div className="brand">
      <span className="kallen">Kallen</span>
      <span className="dev">Dev</span> <span className="emoji">💻</span>
    </div>

      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/portfolio" onClick={() => setIsOpen(false)}>Work</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <button 
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;