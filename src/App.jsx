import React from "react";
import "./style/App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="navbar">
        <Header />
      </div>
    </div>
  );
}

export default App;
