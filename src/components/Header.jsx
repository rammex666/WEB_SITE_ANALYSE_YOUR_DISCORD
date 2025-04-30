import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <header className="header">
        <img src="../assets/logoayd.png" className="logoayd"/>
        <h1 className="header-title">Welcome to Analyse Your Discord</h1>
    </header>
  );
}

export default Header;