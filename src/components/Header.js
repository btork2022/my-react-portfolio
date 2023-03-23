import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav>
      <div className="container">
        {/* Navigation links */}
        {/* Logo and name */}
        <ul className="nav-links">
          <li>
        <div className="logo">
          <NavLink to="/" activeClassName="active">My Portfolio</NavLink>
        </div>
          </li>
          <li>
            <NavLink to="/project" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;