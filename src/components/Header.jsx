import React from "react";
import "../style/Header.css";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
        <img src={logo} className="logoayd"/>
        <h2 className="brandname">AYD</h2>
        <div className="navbutton">
            <button className="AccountButton">
                <i className="bi bi-person-circle"></i>
                Account
            </button>
        </div>
    </header>
  );
}

export default Header;