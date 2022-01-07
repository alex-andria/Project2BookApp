import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavButton">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <br />
      <NavLink to="/toread" exact>
        To Read
      </NavLink>
      <br />
      <NavLink to="/currentlyreading" exact>
        Currently Reading
      </NavLink>
      <br />
      <NavLink to="/finishedreading" exact>
        Finished Reading
      </NavLink>
    </div>
  );
}

export default NavBar;
