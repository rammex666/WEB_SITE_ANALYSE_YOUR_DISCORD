import React from "react";
import "../style/Header.css";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
        <img src={logo} className="logoayd"/>
        <h1 className="header-title">Welcome to Analyse Your Discord</h1>
    </header>
  );
}

export default Header;