import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">00 home</NavLink>
        </li>
        <li>
          <NavLink to="/">01 destination</NavLink>
        </li>
        <li>
          <NavLink to="/">02 crew</NavLink>
        </li>
        <li>
          <NavLink to="/">03 technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
