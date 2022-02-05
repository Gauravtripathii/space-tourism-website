import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../media/logo.svg";

const Nav = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
      <ul>
        <li>
          <NavLink to="/">00 home</NavLink>
        </li>
        <li>
          <NavLink to="/destination">01 destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">02 crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">03 technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
