import React from "react";
import { NavLink } from "react-router-dom";

export default ({ toggleMenu, toggleSearch }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <i
      className="fas fa-bars fa-lg sidemenu-toggle-icon"
      onClick={toggleMenu}
    ></i>
    <NavLink className="navbar-brand" to="/">
      <img
        src="https://i.imgur.com/GqhnLR4_d.webp?maxwidth=760&fidelity=grand"
        alt="logo"
        width="200"
        height="auto"
      />
    </NavLink>
    {/* <ul className="navbar-nav">
      <li className="nav-item">
        <span className="nav-link" onClick={toggleSearch}>
          Search
        </span>
      </li>
    </ul> */}
  </nav>
);
