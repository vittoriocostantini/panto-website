import { useState, useCallback } from "react";
import { type NotificationType } from "../components/common/notification-toast";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}

export function useNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = useCallback(
    (message: string, type: NotificationType = "info") => {
      const id = Date.now().toString();
      setNotifications((prev) => [...prev, { id, message, type }]);
    },
    []
  );

  const hideNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const success = useCallback(
    (message: string) => showNotification(message, "success"),
    [showNotification]
  );

  const error = useCallback(
    (message: string) => showNotification(message, "error"),
    [showNotification]
  );

  const warning = useCallback(
    (message: string) => showNotification(message, "warning"),
    [showNotification]
  );

  const info = useCallback(
    (message: string) => showNotification(message, "info"),
    [showNotification]
  );

  return {
    notifications,
    showNotification,
    hideNotification,
    success,
    error,
    warning,
    info,
  };
}

