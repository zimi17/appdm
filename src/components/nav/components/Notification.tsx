import React, { useEffect, useState, createContext, useContext } from 'react';
import { cn } from './ui/utils';
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface NotificationProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose?: () => void;
  isVisible: boolean;
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
}

const icons = {
  success: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
};

const colorClasses = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800'
};

const iconColorClasses = {
  success: 'text-green-400',
  error: 'text-red-400',
  warning: 'text-yellow-400',
  info: 'text-blue-400'
};

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
};

export function Notification({
  type = 'info',
  title,
  message,
  duration = 4000,
  onClose,
  isVisible,
  position = 'top-right'
}: NotificationProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  
  const Icon = icons[type];

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsAnimatingOut(false);
    } else {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 350); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimatingOut(true);
    onClose?.();
  };

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        'fixed z-50 max-w-sm w-full mx-4',
        positionClasses[position],
        isAnimatingOut ? 'notification-slide-out' : 'notification-slide-in'
      )}
    >
      <div className={cn(
        'brand-shadow-lg rounded-lg border p-4 transition-standard',
        colorClasses[type],
        'micro-interaction-container'
      )}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon 
              className={cn('h-5 w-5', iconColorClasses[type])} 
              aria-hidden="true" 
            />
          </div>
          <div className="ml-3 flex-1">
            <h3 className={cn(
              'text-subtitle font-merriweather heading-block mb-1',
              type === 'success' && 'text-green-800',
              type === 'error' && 'text-red-800',
              type === 'warning' && 'text-yellow-800',
              type === 'info' && 'text-blue-800'
            )}>
              {title}
            </h3>
            {message && (
              <p className={cn(
                'text-body font-montserrat reading-text',
                type === 'success' && 'text-green-700',
                type === 'error' && 'text-red-700',
                type === 'warning' && 'text-yellow-700',
                type === 'info' && 'text-blue-700'
              )}>
                {message}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              type="button"
              className={cn(
                'btn-micro rounded-md p-1.5 focus-ring',
                'hover:bg-white/20',
                type === 'success' && 'text-green-500 hover:text-green-600',
                type === 'error' && 'text-red-500 hover:text-red-600',
                type === 'warning' && 'text-yellow-500 hover:text-yellow-600',
                type === 'info' && 'text-blue-500 hover:text-blue-600'
              )}
              onClick={handleClose}
              aria-label="Tutup notifikasi"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Context untuk notification management
interface NotificationContextType {
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
    isVisible: boolean;
  }>;
  addNotification: (notification: Omit<NotificationContextType['notifications'][0], 'id' | 'isVisible'>) => string;
  removeNotification: (id: string) => void;
  showSuccess: (title: string, message?: string, duration?: number) => string;
  showError: (title: string, message?: string, duration?: number) => string;
  showWarning: (title: string, message?: string, duration?: number) => string;
  showInfo: (title: string, message?: string, duration?: number) => string;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationContextType['notifications']>([]);

  const addNotification = (notification: Omit<NotificationContextType['notifications'][0], 'id' | 'isVisible'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications(prev => [...prev, { ...notification, id, isVisible: true }]);
    return id;
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, isVisible: false } : n)
    );
    // Clean up after animation
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 350);
  };

  const showSuccess = (title: string, message?: string, duration?: number) => 
    addNotification({ type: 'success', title, message, duration });
    
  const showError = (title: string, message?: string, duration?: number) => 
    addNotification({ type: 'error', title, message, duration });
    
  const showWarning = (title: string, message?: string, duration?: number) => 
    addNotification({ type: 'warning', title, message, duration });
    
  const showInfo = (title: string, message?: string, duration?: number) => 
    addNotification({ type: 'info', title, message, duration });

  const value: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
}

// Hook untuk menggunakan notifications
export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    // Create a simple standalone implementation if not wrapped in provider
    const [notifications, setNotifications] = useState<NotificationContextType['notifications']>([]);

    const addNotification = (notification: Omit<NotificationContextType['notifications'][0], 'id' | 'isVisible'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      setNotifications(prev => [...prev, { ...notification, id, isVisible: true }]);
      return id;
    };

    const removeNotification = (id: string) => {
      setNotifications(prev => 
        prev.map(n => n.id === id ? { ...n, isVisible: false } : n)
      );
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 350);
    };

    const showSuccess = (title: string, message?: string, duration?: number) => 
      addNotification({ type: 'success', title, message, duration });
      
    const showError = (title: string, message?: string, duration?: number) => 
      addNotification({ type: 'error', title, message, duration });
      
    const showWarning = (title: string, message?: string, duration?: number) => 
      addNotification({ type: 'warning', title, message, duration });
      
    const showInfo = (title: string, message?: string, duration?: number) => 
      addNotification({ type: 'info', title, message, duration });

    return {
      notifications,
      addNotification,
      removeNotification,
      showSuccess,
      showError,
      showWarning,
      showInfo
    };
  }
  return context;
}

// Container component untuk menampilkan semua notifikasi
export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          duration={notification.duration}
          isVisible={notification.isVisible}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </>
  );
}