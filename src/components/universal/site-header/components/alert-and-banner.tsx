"use client";

import { useState } from "react";
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AlertBannerProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
  linkText?: string;
  linkHref?: string;
  dismissible?: boolean;
  className?: string;
  onDismiss?: () => void;
}

const alertIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

const alertStyles = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  success: "bg-green-50 border-green-200 text-green-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  error: "bg-red-50 border-red-200 text-red-800",
};

export function AlertAndBanner({ 
  type = "info",
  title,
  message,
  linkText,
  linkHref,
  dismissible = true,
  className,
  onDismiss
}: AlertBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) {
    return null;
  }

  const Icon = alertIcons[type];

  return (
    <div className={cn(
      "site-header__alert-banner relative border-b transition-all duration-300",
      alertStyles[type],
      className
    )}>
      <div className="max-w-screen-2xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              {title && (
                <h4 className="text-sm font-medium">{title}</h4>
              )}
              <p className="text-sm">{message}</p>
              {linkText && linkHref && (
                <Link 
                  href={linkHref}
                  className="text-sm font-medium underline hover:no-underline"
                >
                  {linkText}
                </Link>
              )}
            </div>
          </div>
          
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 p-1 rounded-md hover:bg-black/10 transition-colors"
              aria-label="Tutup notifikasi"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
