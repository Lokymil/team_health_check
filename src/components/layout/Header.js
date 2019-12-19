import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => (
  <div className="header-wrapper">
    <Link to="/" className="header-home">
      <img
        src="/logo192.png"
        alt="logo"
        width="45"
        height="auto"
        className="header-home--logo"
      />
      Team Health Check
    </Link>
    <div className="header-nav">
      <NavLink
        className="header-nav--link"
        activeClassName="header-nav--current"
        to="/interview/theory"
      >
        How to ?
      </NavLink>
      <NavLink
        className="header-nav--link"
        activeClassName="header-nav--current"
        to="/interview/tryit"
      >
        Try it
      </NavLink>
      <NavLink
        className="header-nav--link"
        activeClassName="header-nav--current"
        to="/visualize"
      >
        My team
      </NavLink>
    </div>
  </div>
);

export default Header;
