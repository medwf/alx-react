import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Notification from "./Notifications/Notifications.js";

function App() {
  return (
    <React.Fragment>
      <Notification />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
