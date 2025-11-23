import { CheckCircle, Error, Warning, Close } from "@mui/icons-material";
import { useEffect } from "react";

export type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationToastProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
  duration?: number;
}

export function NotificationToast({
  message,
  type,
  onClose,
  duration = 3000,
}: NotificationToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-500",
          text: "text-green-800",
          icon: <CheckCircle className="text-green-500" />,
        };
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-500",
          text: "text-red-800",
          icon: <Error className="text-red-500" />,
        };
      case "warning":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-500",
          text: "text-yellow-800",
          icon: <Warning className="text-yellow-500" />,
        };
      case "info":
        return {
          bg: "bg-blue-50",
          border: "border-blue-500",
          text: "text-blue-800",
          icon: <Warning className="text-blue-500" />,
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`fixed top-24 right-4 z-50 min-w-[300px] max-w-md ${styles.bg} ${styles.text} border-l-4 ${styles.border} rounded-lg shadow-lg p-4 animate-slide-in-right`}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{styles.icon}</div>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Cerrar notificación"
        >
          <Close fontSize="small" />
        </button>
      </div>
    </div>
  );
}

