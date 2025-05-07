import React from "react";
import "./style/App.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Header />
      </div>
      <div className="content">
        <MainCard />
      </div>
    </div>
  );
}

export default App;
