import React from "react";
import "./Notification.css";
// import { getLatestNotification } from "../utils";
import imageSrc from "./32178.png";
import NotificationItem from "./NotificationItems/NotificationItem.jsx";
import { handleClick } from "../utils";
import PropTypes from "prop-types";

function Notification({ displayDrawer = false, listNotifications = [] }) {
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
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notification">
          <button style={buttonStyle} aria-label="Close" onClick={handleClick}>
            <img src={imageSrc} alt="Close button" style={bs} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem value="No new notification for now" />
            ) : (
              <>
                {listNotifications.map((notificationItem) => (
                  <NotificationItem
                    key={notificationItem.id}
                    type={notificationItem.type}
                    html={notificationItem.html || null}
                    value={notificationItem.value || null}
                  />
                ))}
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;
