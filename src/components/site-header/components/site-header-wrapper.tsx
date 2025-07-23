import React, { CSSProperties, FC, ReactNode, RefObject, useRef } from 'react';
import { useResizeObserver } from '../hooks/use-resize-observer';

type SiteHeaderPosition = "fixed" | "sticky" | "relative";

export interface SiteHeaderWrapperProps {
  children?: ReactNode;
  bannerRef?: RefObject<HTMLElement>; // Make optional as it might not always be passed
  sticky?: boolean;
  position: SiteHeaderPosition;
  isMenuOpen?: boolean;
  hasAlert?: boolean;
  isWorkingKnowledge?: boolean;
  isMinimalHeader?: boolean;
  isHomepage?: boolean;
  headerTheme?: "light" | "dark"; // Simplified to light/dark
  domain?: string;
}

export const SiteHeaderWrapper: FC<SiteHeaderWrapperProps> = ({
  children,
  bannerRef,
  sticky,
  position,
  isMenuOpen,
  hasAlert,
  isWorkingKnowledge,
  isMinimalHeader,
  isHomepage,
  headerTheme,
  domain,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { height: bannerHeight } = useResizeObserver(bannerRef || { current: null }); // Handle optional bannerRef

  // Simplified class generation using Tailwind CSS
  const headerClass = `
    relative z-50 w-full
    ${domain === "online" ? "" : "noindex"} /* Adjust based on your needs */
    ${sticky && position === "sticky" ? "sticky top-0" : ""}
    ${position === "relative" ? "relative" : ""}
    ${isMenuOpen ? "" : ""} /* Add classes for menu open state if needed */
    ${hasAlert ? "" : ""} /* Add classes for alert state if needed */
    ${isWorkingKnowledge ? "" : ""} /* Add classes for working knowledge state if needed */
    ${isMinimalHeader ? "" : ""} /* Add classes for minimal header state if needed */
    ${isHomepage ? "" : ""} /* Add classes for homepage state if needed */
    ${headerTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
  `;

  return (
    <header
      className={headerClass}
      data-theme={headerTheme}
      data-testid="site-header"
      ref={ref}
      role="banner"
      style={
        {
          "--banner-height": `${bannerHeight || 0}px`,
        } as CSSProperties
      }
    >
      {children}
    </header>
  );
};
