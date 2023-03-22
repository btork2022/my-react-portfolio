// import { Link } from "react-router-dom";


// const Header = () => {
//     return ( 
//     <header className="header">
//     <Link to="/">Home</Link>
//     <Link to="contact">Contact</Link>
//     <Link to="project">Project</Link>
//     </header>
//     );
// };

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav>
      <div className="container">
        {/* Logo and name */}
        <div className="logo">
          <NavLink to="/">My Portfolio</NavLink>
        </div>
        {/* Navigation links */}
        <ul className="nav-links">
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