import React from "react";
import { NavLink } from "react-router-dom";

import classNames from "classnames";

import "./Header.scss";

import logo from "./logo.svg";

const Header = ({ light, sticky }) => (
  <header className={classNames({ light: light && !sticky, sticky })}>
    <NavLink to="/" id="header--home-link">
      <img src={logo} alt="" width="45" />
      Team Health Check
    </NavLink>
    <NavLink activeClassName="header-nav--current" to="/interview/theory">
      How to ?
    </NavLink>
    <NavLink activeClassName="header-nav--current" to="/interview/tryit">
      Try it
    </NavLink>
    <NavLink activeClassName="header-nav--current" to="/visualize">
      My team
    </NavLink>
  </header>
);

export default Header;
