import React from "react";
import { getFullYear, getFooterCopy } from "./utils";
import logo from "./holberton_logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="Email"> Email:</label>
          <input type="text" id="Email" name="Email" />
          <label htmlFor="Password"> Password:</label>
          <input type="text" id="Password" name="Password" />
          <button> OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
