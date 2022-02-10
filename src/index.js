import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./Css/main.css";
import { BrowserRouter } from "react-router-dom";
import Trial from "./Pages/Trial";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
