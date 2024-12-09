import React from "react";
import "./NotificationItem.css";
import PropTypes from "prop-types";

function NotificationItem({ type = "default", html, value }) {
  return html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );
}

NotificationItem.prototypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItem;
