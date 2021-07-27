import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import App from "./App";

//Router provides navigation between components rendered within App
ReactDOM.render(
  <Router>
      <App/>
  </Router>,
  document.getElementById('root')
);

