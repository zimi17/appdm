import React, { useContext, useRef, createContext } from 'react';
import { GlobalMenuLevelContext, GlobalMenuNavContext } from './global-menu-nav';
import { GlobalMenuSub, GlobalMenuSubmenu } from './global-menu-sub';
import { GlobalMenuLink } from './global-menu-link';
import { GlobalMenuSubmenuTrigger } from './global-menu-submenu-trigger';

interface GlobalMenuItemContextProps {
  id: string;
  triggerButton: HTMLButtonElement | null;
}

export const GlobalMenuItemContext = createContext<GlobalMenuItemContextProps>({
  id: "",
  triggerButton: null,
});

export interface GlobalMenuNavItem {
  id: string;
  title: string;
  label?: string;
  url?: string;
  href?: string; // Menambahkan href untuk kompatibilitas
  description?: string;
  subtitle?: string; // Menambahkan subtitle untuk kompatibilitas
  submenu?: GlobalMenuNavItem[]; // Mengubah menjadi array rekursif
}

export interface GlobalMenuItemProps {
  index: number;
  item: GlobalMenuNavItem;
  isVisible?: boolean;
}

export const GlobalMenuItem: React.FC<GlobalMenuItemProps> = ({
  item,
  index,
  isVisible,
}) => {
  const { navStack, setNavStack, toggleNavStack } = useContext(GlobalMenuNavContext);
  const { level } = useContext(GlobalMenuLevelContext);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const isSub = level > 0;
  const isActive = navStack.includes(item.id);

  // Simplified classname logic for Tailwind
  const rootClass = isSub ? "" : ""; // Add specific classes if needed
  const classname = `${rootClass} ${isActive ? "is-active" : ""}`;

  const hasSubmenu = item.submenu && item.submenu.items && item.submenu.items.length > 0;

  return (
    <GlobalMenuItemContext.Provider
      value={{ id: item.id, triggerButton: triggerRef.current }}
    >
      <li className={classname}>
        {hasSubmenu ? (
          <>
            <GlobalMenuSubmenuTrigger
              ref={triggerRef}
              label={item.label || item.title} // Use label or title as label
              index={index}
              isVisible={isVisible}
              isOpen={isActive} // Use isActive from navStack
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setNavStack((prevStack) => toggleNavStack(item.id, level, prevStack));
              }}
            />
            {isActive && item.submenu && (
              <GlobalMenuSub
                header={{ title: item.title, subtitle: item.subtitle, url: item.href }}
                items={item.submenu}
                level={level + 1}
              />
            )}
          </>
        ) : (
          <GlobalMenuLink href={item.url || item.href} title={item.title} index={index} isVisible={isVisible}>
            {item.label || item.title}
          </GlobalMenuLink>
        )}
      </li>
    </GlobalMenuItemContext.Provider>
  );
};