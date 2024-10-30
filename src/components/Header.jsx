import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">My Website</div>
          <div className="navbar-links">
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
            <NavLink
              to="/user"
              className="navbar-link border border-yellow-400"
            >
              User
            </NavLink>
            <NavLink
              to="/post"
              className="navbar-link border border-yellow-400"
            >
              Post
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
