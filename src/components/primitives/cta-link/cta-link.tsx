import React from 'react';
import { Link, LinkProps } from '../link/link'; // Our Link primitive

export interface CtaLinkProps extends LinkProps {
  type?: "primary-button" | "secondary-button" | "outline"; // Simplified types
  isSmall?: boolean;
  children?: React.ReactNode;
}

export const CtaLink: React.FC<CtaLinkProps> = ({
  type = "primary-button",
  isSmall = false,
  children,
  className,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200";
  const sizeClasses = isSmall ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-base";

  let colorClasses = "";
  switch (type) {
    case "primary-button":
      colorClasses = "bg-blue-600 text-white hover:bg-blue-700"; // Example colors
      break;
    case "secondary-button":
      colorClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "outline":
      colorClasses = "border border-blue-600 text-blue-600 hover:bg-blue-50";
      break;
  }

  return (
    <Link className={`${baseClasses} ${sizeClasses} ${colorClasses} ${className || ''}`} {...props}>
      {children}
    </Link>
  );
};