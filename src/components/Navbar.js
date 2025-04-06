import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Kallen.</div>
      <div className="nav-links">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;