import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/margaridamedina.costa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maggie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/margaridamedinacosta/final-project-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Git Hub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
