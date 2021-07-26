import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Card from "./components/Card";
import Trombi from "./components/Trombi";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Trombi />
    <Card />
  </React.StrictMode>,
  document.getElementById("root")
);
