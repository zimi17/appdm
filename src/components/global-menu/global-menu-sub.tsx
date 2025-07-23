import React, { ReactNode, useContext } from 'react';
import { GlobalMenuLevelContext, GlobalMenuNavContext } from './global-menu-nav';
import { GlobalMenuItemContext, GlobalMenuNavItem } from './global-menu-item';
import { GlobalMenuList } from './global-menu-list';
import { Link } from '../primitives/link/link'; // Our Link primitive
import { LuArrowLeft } from 'react-icons/lu';

export interface GlobalMenuSubmenuHeader {
  title: string; // Changed from label to title for consistency with GlobalMenuNavItem
  url?: string; // Changed from link to url for consistency with GlobalMenuNavItem
  subtitle?: ReactNode;

  editAttributes?: Record<string, unknown>;
}

export interface GlobalMenuSubmenu {
  header: GlobalMenuSubmenuHeader;
  items: Array<GlobalMenuNavItem>;
}

export interface GlobalMenuSubmenuProps extends GlobalMenuSubmenu {
  level: number; // Passed from parent GlobalMenuItem
}

export const GlobalMenuSub: React.FC<GlobalMenuSubmenuProps> = ({
  header,
  items,
  level,
}) => {
  const { navStack, setNavStack, toggleNavStack } = useContext(GlobalMenuNavContext);
  const { id, triggerButton } = useContext(GlobalMenuItemContext);
  const { level: parentLevel } = useContext(GlobalMenuLevelContext);

  const shouldShowBackButton = level > 0;

  const handleBackClick = () => {
    setNavStack((prevStack) => toggleNavStack(id, parentLevel, prevStack, false));
    triggerButton?.focus();
  };

  return (
    <GlobalMenuLevelContext.Provider value={{ level }}>
      <div
        id={id}
        className={`absolute top-0 left-0 w-full h-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${navStack.includes(id) ? "translate-x-0" : "translate-x-full"}`}
        aria-label={header.title}
      >
        <div className="p-4 border-b border-gray-700 flex items-center">
          {shouldShowBackButton && (
            <button
              className="p-2 rounded-full hover:bg-gray-700 text-white mr-4"
              onClick={handleBackClick}
            >
              <LuArrowLeft className="h-5 w-5" />
            </button>
          )}
          <div className="flex flex-col">
            <Link
              className="text-xl font-semibold text-white hover:text-gray-300"
              href={header.url || "#"}
              {...(header.editAttributes as React.HTMLAttributes<HTMLElement>)}
            >
              {header.title}
            </Link>
            {header.subtitle && (
              <div
                className="text-sm text-gray-400"
                {...(header.editAttributes as React.HTMLAttributes<HTMLElement>)}
              >
                {header.subtitle}
              </div>
            )}
          </div>
        </div>

        <GlobalMenuList items={items} isVisible={true} />
      </div>
    </GlobalMenuLevelContext.Provider>
  );
};
