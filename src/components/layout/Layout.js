import React from "react";

import Header from "./Header";

import "./Layout.scss";

const Layout = ({ children }) => (
  <div className="layout--wrapper">
    <Header />
    <main className="layout--content">{children}</main>
  </div>
);

export default Layout;
