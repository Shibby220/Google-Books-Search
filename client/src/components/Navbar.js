import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link 
        className="navbar-brand" 
        to="/">
        Google Books Search
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/" ? "text-primary" : ""}`} 
            to="/">
            Search For Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-info ${window.location.pathname === "/saved" ? "text-primary" : ""}`} 
            to="/saved">
            View Saved Books
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;