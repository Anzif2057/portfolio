import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="gradient-text">Anzif Anvaj</span>
        </NavLink>

        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Update
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Work
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
