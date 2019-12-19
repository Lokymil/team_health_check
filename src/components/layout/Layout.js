import React from "react";

import Header from "./Header";

import "./Layout.scss";

const Layout = ({ children }) => (
  <div className="layout--wrapper">
    <Header />
    <div className="layout--content">{children}</div>
  </div>
);

export default Layout;
