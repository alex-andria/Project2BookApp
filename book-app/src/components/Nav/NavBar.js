import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
        >
          <span className="NavButton">Home</span>
        </NavLink>

        <NavLink
          to="/toread"
          exact
        >
          <span className="NavButton">To Read</span>
        </NavLink>

        <NavLink
          to="/currentlyreading"
          exact
        >
          <span className="NavButton">Currently Reading</span>
        </NavLink>

        <NavLink
          to="/finishedreading"
          exact
        >
          <span className="NavButton">Finished Reading</span> 
        </NavLink>

      </div>
    );
  }

  export default NavBar;