import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/toread"
          exact
        >
          To Read
        </NavLink>
        <NavLink
          to="/currentlyreading"
          exact
        >
          Currently Reading
        </NavLink>
        <NavLink
          to="/finishedreading"
          exact
        >
          Finished Reading
        </NavLink>
      </div>
    );
  }

  export default NavBar;