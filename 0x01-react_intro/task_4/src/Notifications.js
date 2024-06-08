import React from "react";
import "./Notification.css";
import { getLatestNotification } from "./utils";
import imageSrc from "./32178.png";
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
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notification">
      <button style={buttonStyle} aria-label="Close" onClick={handleClick}>
        <img src={imageSrc} alt="Close button" style={bs} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
