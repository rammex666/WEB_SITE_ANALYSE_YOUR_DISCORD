import React from "react";
import "../style/Header.css";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
        <img src={logo} className="logoayd">AYD</img>
    </header>
  );
}

export default Header;