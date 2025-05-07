import React from "react";
import "../style/MainCard.css";
import logo from "../assets/logo.png";

function MainCard() {
    return (
        <div className="MainCard">
            <div className="left-section">
                <img src={logo} alt="Placeholder" className="image" />
                <p className="text">ANALYZE <span style={{color : "limegreen"}}>YOUR </span>DISCORD</p>
                <p className="text">
                    <span style={{color : "limegreen"}}>HIGH </span>
                    QUALITY SERVER
                    <span style={{color : "limegreen"}}> STATISTICS </span>
                    SOFTWARE</p>
            </div>
            <div className="right-section">
                <div className="card">Carte 1</div>
                <div className="card">Carte 2</div>
                <div className="card">Carte 3</div>
            </div>
        </div>
    );
}

export default MainCard;