import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

// the active links did not work like the examples provided in class, which dont work either. I added NavLink, instead of Link, and the exact prop to the root link to remedy this. 
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light" >
      <NavLink className="navbar-brand" to="/">
        Google-Book-Search
      </NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              exact className="nav-link" activeClassName="active" 
               >
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/saved"
              className="nav-link" activeClassName="active" 
              >
              Saved
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
