import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const bgURL = "img/bg.jpg";

ReactDOM.render(
  <React.StrictMode>
    <div
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <div
        className="glass h-screen w-screen flex justify-center items-center"
        style={{ background: "none", boxShadow: "none" }}
      >
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
