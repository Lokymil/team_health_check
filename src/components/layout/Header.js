import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import classNames from "classnames";
import useSize from "../../hooks/useSize";

import "./Header.scss";

import logo from "./logo.svg";

const Header = ({ light, sticky }) => {
  const { medium } = useSize();
  const { pathname } = useLocation();

  const [hidden, setHidden] = useState(medium);

  useEffect(() => {
    setHidden(medium);
  }, [medium]);

  useEffect(() => {
    setHidden(true);
  }, [pathname]);

  function toggleMenu() {
    setHidden(!hidden);
  }

  return (
    <header className={classNames({ medium, light: light && !sticky, sticky })}>
      <span className="icon material-icons" onClick={toggleMenu}>
        menu
      </span>
      <nav className={classNames("menu", { hidden })}>
        <span className="icon material-icons" onClick={toggleMenu}>
          close
        </span>
        <Link to="/" className="brand">
          <img src={logo} alt="" width="45" />
          Team Health Check
        </Link>
        <NavLink activeClassName="header-nav--current" to="/interview/theory">
          How to ?
        </NavLink>
        <NavLink activeClassName="header-nav--current" to="/interview/tryit">
          Try it
        </NavLink>
        <NavLink activeClassName="header-nav--current" to="/visualize">
          My team
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
