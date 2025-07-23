import React from "react";
import { Logo } from "../../primitives/logo/logo"; // Import the new Logo primitive

export interface SiteHeaderLogoProps {
  logoLink?: string;
  headerTheme?: "light" | "dark"; // Added to pass theme to Logo
}

export const SiteHeaderLogo: React.FC<SiteHeaderLogoProps> = ({
  logoLink,
  headerTheme,
}) => {
  const logoAltText = "STIE Dwimulya Logo";

  // Determine text color based on headerTheme
  const logoColorClass =
    headerTheme === "dark" ? "text-white" : "text-gray-900";

  return (
    <div className="flex-shrink-0">
      <a href={logoLink || "/"} className="block">
        <span className="sr-only">{logoAltText}</span>
        <Logo
          className={`h-10 w-auto ${logoColorClass}`}
          title={logoAltText}
        />{" "}
        {/* Use the Logo primitive */}
      </a>
    </div>
  );
};