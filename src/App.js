import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <p>Developed by Nemat zadran</p>
      </div>
    </React.Fragment>
  );
}
export default App;
