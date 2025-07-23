import React, { ForwardedRef, forwardRef } from "react";
import { LuChevronDown, LuChevronUp, LuArrowRight } from "react-icons/lu";

export interface NavigationLink {
  title: string;
  url?: string;
  description?: string;
}

interface EditAttributes {
  [key: string]: string | number | boolean | undefined;
}

export interface LocalNavigationItemProps extends NavigationLink {
  isCurrent?: boolean;
  isCurrentSubmenu?: boolean;
  submenu?: Array<NavigationLink>;
  isDropdownOpen?: boolean;
  showDropdown?: () => void;
  hideDropdown?: () => void;
  isHidden?: boolean;
  mobileOnly?: boolean;
  editAttributes?: {
    title?: EditAttributes;
  };
}

export const LocalNavigationItem = forwardRef(LocalNavigationItemWithRef);

function LocalNavigationItemWithRef(
  {
    submenu,
    isDropdownOpen,
    showDropdown,
    hideDropdown,
    isHidden,
    url,
    title,
    editAttributes,
    isCurrent,
    isCurrentSubmenu,
  }: LocalNavigationItemProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const hasSubmenu = Array.isArray(submenu) && submenu.length > 0;

  const handleMouseEnter = () => {
    if (hasSubmenu && showDropdown) {
      showDropdown();
    }
  };

  const handleMouseLeave = () => {
    if (hideDropdown) {
      hideDropdown();
    }
  };

  return (
    <li
      {...editAttributes?.title}
      ref={ref}
      aria-hidden={isHidden}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group ${isHidden ? "hidden" : ""} ${
        isCurrent ? "font-bold text-blue-600 dark:text-blue-400" : ""
      } ${isCurrentSubmenu ? "italic" : ""}`}
    >
      {url ? (
        <a
          href={url}
          className={`flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 ${
            hasSubmenu ? "justify-between" : ""
          }`}
          aria-current={isCurrent ? "page" : undefined}
        >
          {title}
        </a>
      ) : (
        <span
          className={`flex items-center px-3 py-2 text-gray-700 dark:text-white ${
            hasSubmenu ? "justify-between" : ""
          }`}
          aria-current={isCurrent ? "page" : undefined}
        >
          {title}
        </span>
      )}

      {hasSubmenu && (
        <button
          className="absolute right-0 top-0 h-full px-3 py-2 flex items-center justify-center text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 md:hidden" // Only show on mobile for now
          aria-label={`Menu for ${title}`}
          aria-expanded={isDropdownOpen}
          onClick={() => {
            if (isDropdownOpen && hideDropdown) {
              hideDropdown();
            } else if (showDropdown) {
              showDropdown();
            }
          }}
          aria-current={isCurrent ? "page" : undefined}
        >
          {isDropdownOpen ? (
            <LuChevronUp className="h-4 w-4" />
          ) : (
            <LuChevronDown className="h-4 w-4" />
          )}
        </button>
      )}

      {hasSubmenu && isDropdownOpen && (
        <div
          className="absolute left-0 mt-0 bg-white shadow-lg rounded-md py-2 w-48 z-20 dark:bg-gray-800"
          aria-hidden={!isDropdownOpen}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              if (hideDropdown) {
                hideDropdown();
              }
            }
          }}
        >
          <ul className="">
            {submenu?.map((link, j) => (
              <li key={j} className="">
                <a
                  href={link.url || "#"}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 flex items-center justify-between"
                  aria-current={isCurrent ? "page" : undefined} // Simplified, assumes parent handles current state
                >
                  {link.title}
                  <div className="ml-2">
                    <LuArrowRight className="h-4 w-4" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}