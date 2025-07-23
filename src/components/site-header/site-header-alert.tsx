import React, { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu"; // Import arrow icon

interface EditAttributes {
  [key: string]: string | number | boolean | undefined;
}

type SiteHeaderTheme = "light" | "dark"; // Re-using from SiteHeaderAlertAndBanner

export interface SiteHeaderAlertProps {
  title?: string;
  href?: string;
  description?: ReactNode;
  menuIsOpen?: boolean;
  hasBanner?: boolean;
  parentTheme?: SiteHeaderTheme;

  editAttributes?: {
    url?: EditAttributes;
    title?: EditAttributes;
    description?: EditAttributes;
  };
}

export const SiteHeaderAlert: React.FC<SiteHeaderAlertProps> = ({
  title,
  description,
  href,
  hasBanner,
  editAttributes,
}) => {
  if (!title) return null;

  // Simplified theme logic for Tailwind CSS
  const alertBgClass = "bg-red-600"; // Example: use a strong color for alerts
  const alertTextColorClass = "text-white";

  return (
    <div
      className={`py-2 px-4 text-sm ${alertBgClass} ${alertTextColorClass} ${
        hasBanner ? "border-b border-red-700" : ""
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span
          className="font-semibold text-center md:text-left"
          {...editAttributes?.title}
        >
          {href ? (
            <a href={href} className="hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </span>

        <div
          className="flex items-center mt-2 md:mt-0 text-center md:text-left"
          {...editAttributes?.description}
        >
          <span className="mr-2">{description}</span>

          {href && <LuArrowRight className="h-4 w-4" />}
        </div>
      </div>
    </div>
  );
};
