import React from "react";
import "./Notification.css";
import { getLatestNotification } from "../utils";
import imageSrc from "./32178.png";
import NotificationItem from "./NotificationItems/NotificationItem";
import { handleClick } from "../utils";
export default function Notification() {
  const buttonStyle = {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const bs = {
    height: 17,
    width: 17,
  };


  return (
    <div className="Notification">
      <button style={buttonStyle} aria-label="Close" onClick={handleClick}>
        <img src={imageSrc} alt="Close button" style={bs} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
      </ul>
    </div>
  );
}
