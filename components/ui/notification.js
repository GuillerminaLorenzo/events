import { useContext } from "react";

import NotificationStyle from "./notification.module.css";
import NotificationContext from "../../store/notification-context";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = NotificationStyle.success;
  }

  if (status === "error") {
    statusClasses = NotificationStyle.error;
  }

  if (status === "pending") {
    statusClasses = NotificationStyle.pending;
  }

  const activeClasses = `${NotificationStyle.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
