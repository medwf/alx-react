import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.jsx";
import Login from "./Login/Login.jsx";
import Notification from "./Notifications/Notifications.jsx";
import PropTypes from "prop-types";
import CourseList from "./CourseList/CourseList.jsx";
import { getLatestNotification } from "./utils.jsx";

function App({ isLoggedIn = false }) {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  return (
    <React.Fragment>
      <Notification listNotifications={listNotifications} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
