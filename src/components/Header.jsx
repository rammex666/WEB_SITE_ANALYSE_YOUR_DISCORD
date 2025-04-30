import React from "react";
import "../style/Header.css";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
        <img src={logo} className="logoayd"/>
        <h2 className="brandname">AYD</h2>
    </header>
  );
}

export default Header;