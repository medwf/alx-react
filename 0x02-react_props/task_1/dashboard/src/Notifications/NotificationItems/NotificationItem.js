import React from 'react';
import "./NotificationItem.css";

function NotificationItem({type, html, value}) {
  return (
    html ?
      <li data-notification-type={type} dangerouslySetInnerHTML={html} ></li> :
      <li data-notification-type={type}>{value}</li>
  )
}

export default NotificationItem;
