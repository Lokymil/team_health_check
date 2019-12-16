import React from "react";
import "./Layout.css";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="layout--wrapper">
    <Header />
    <div className="layout--content">{children}</div>
  </div>
);

export default Layout;
