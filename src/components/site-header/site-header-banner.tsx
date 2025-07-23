import React from 'react';
import { LuBell } from 'react-icons/lu'; // Import bell icon

interface CtaLinkProps { // Simplified interface for CtaLink
  href: string;
  text: string;
}

export interface SiteHeaderBannerProps {
  title?: string;
  link?: CtaLinkProps;
  notificationHref?: string;
  notificationActive?: boolean;
}

export const SiteHeaderBanner: React.FC<SiteHeaderBannerProps> = ({
  title,
  link,
  notificationActive,
  notificationHref,
}) => {
  return (
    <div className="bg-blue-600 text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <div className="flex items-center space-x-4">
          {link ? (
            <a href={link.href} className="text-white hover:underline">
              {link.text}
            </a>
          ) : null}
          {notificationHref ? (
            <a
              href={notificationHref}
              aria-label="Notifications"
              className={`relative p-1 rounded-full hover:bg-blue-700 ${notificationActive ? "text-yellow-300" : "text-white"}`}
            >
              <LuBell className="h-5 w-5" />
              {notificationActive && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-blue-600"></span>
              )}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
