import React, { useRef } from "react";
import { SiteHeaderCta } from "../site-header";
import { LuSearch, LuMenu, LuX } from "react-icons/lu"; // Import icons
import { GlobalMenuProps } from "../../global-menu/global-menu";

interface SearchBoxDropdownProps {
  searchLink?: string;
  dropdownItems?: Record<string, unknown>[];
  isOverlay?: boolean;
  onOpenCallback?: () => void;
}

interface SessionProps {
  [key: string]: unknown;
}

export interface SiteHeaderButtonsProps {
  session?: SessionProps;
  logInOut?: SiteHeaderCta;
  enableLogout?: boolean;
  cta?: SiteHeaderCta;
  hasSearchOverlay?: boolean;
  searchLink?: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenuOnSearchOverlayOpen: () => void;
  search?: SearchBoxDropdownProps;
  siteTypeOption: "internal" | "external";
  globalMenu?: GlobalMenuProps;
  subscribeLink?: string;
}

export const SiteHeaderButtons: React.FC<SiteHeaderButtonsProps> = ({
  logInOut,
  cta,
  closeMenuOnSearchOverlayOpen,
  hasSearchOverlay,
  isMenuOpen,
  toggleMenu,
  searchLink,
  siteTypeOption,
  globalMenu,
  subscribeLink,
}) => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  let hasGlobalMenu = true;
  if (siteTypeOption === "internal") hasGlobalMenu = false;
  else if (!globalMenu?.items || globalMenu.items.length === 0) {
    hasGlobalMenu = false;
  }

  return (
    <div className="flex items-center space-x-4" ref={buttonsRef}>
      {logInOut?.text && (
        <a
          href={logInOut.link || "#"}
          className="px-3 py-1 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {logInOut.text}
        </a>
      )}

      {cta && (
        <a
          href={cta.link || "#"}
          className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          {cta.text}
        </a>
      )}

      {subscribeLink && (
        <a
          className="px-3 py-1 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          href={subscribeLink}
          aria-label="Subscribe"
        >
          Subscribe
        </a>
      )}

      {hasSearchOverlay ? (
        // Simplified SearchBoxDropdown to a basic search button/link
        <button
          onClick={closeMenuOnSearchOverlayOpen}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-label="Search"
        >
          <LuSearch className="h-5 w-5 text-gray-700 dark:text-white" />
        </button>
      ) : (
        searchLink && (
          <a
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            href={searchLink}
            aria-label="Search"
          >
            <LuSearch className="h-5 w-5 text-gray-700 dark:text-white" />
          </a>
        )
      )}

      {hasGlobalMenu && (
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          onClick={toggleMenu}
          data-testid="global-menu-trigger"
          aria-label="Quick Links Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <LuX className="h-6 w-6 text-gray-700 dark:text-white" />
          ) : (
            <LuMenu className="h-6 w-6 text-gray-700 dark:text-white" />
          )}
        </button>
      )}
    </div>
  );
};