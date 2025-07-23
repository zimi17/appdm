import React, { ReactNode, createContext, useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { SocialMediaLinks } from '../primitives/social-media-links/social-media-links'; // Corrected import path
import { SocialMediaIconProps } from '../primitives/social-media-links/social-media-icon/social-media-icon'; // Corrected import path
import { toggleNavStack } from './toggle-nav-stack';

// Simplified Theme type for now
type Theme = "light" | "dark";

interface GlobalMenuNavContextProps {
  open: boolean;
  navStack: Array<string>;
  setNavStack: Dispatch<SetStateAction<Array<string>>>;
  toggleNavStack: typeof toggleNavStack;
}

/** Tracks active states for menu */
export const GlobalMenuNavContext = createContext<GlobalMenuNavContextProps>({
  open: false,
  navStack: [],
  setNavStack: () => {}, // Corrected placeholder
  toggleNavStack: toggleNavStack, // Provide the imported toggleNavStack
});

interface GlobalMenuLevelContextProps {
  level: number;
}

/** Tracks current nav level for menu */
export const GlobalMenuLevelContext = createContext<GlobalMenuLevelContextProps>({
    level: 0,
});

export interface GlobalMenuNavMainProps {
  id?: string;
  socialLinks?: Array<SocialMediaIconProps>;
  label?: string;
  open?: boolean;
  theme?: Theme;
  numBanners?: 0 | 1 | 2;
}

export type GlobalMenuNavProps = GlobalMenuNavMainProps & {
  children: ReactNode;
};

export function GlobalMenuNav({
  id = "global-menu-nav",
  children,
  socialLinks,
  label = "Global Menu",
  open = false,
  theme = "dark",
  numBanners,
}: GlobalMenuNavProps) {
  if (!Array.isArray(socialLinks)) socialLinks = [];

  const [navStack, setNavStack] = useState<Array<string>>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setNavStack([]);
    }

    if (!ref.current) {
      return;
    }

    if (open) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }

    return () => {
      enableBodyScroll(document.body); 
    };
  }, [open]);

  const classname = `
    fixed inset-0 z-[61] md:hidden
    bg-gray-800 bg-opacity-90
    transform transition-transform duration-300 ease-in-out
    ${open ? "translate-x-0" : "translate-x-full"}
    ${navStack.length > 0 ? `nav-stack-level-${navStack.length}` : ""}
  `;

  return (
    <GlobalMenuNavContext.Provider
      value={{
        open,
        navStack,
        setNavStack,
        toggleNavStack,
      }}
    >
      <GlobalMenuLevelContext.Provider
        value={{
          level: 0,
        }}
      >
        <div
          id={id}
          className={classname}
          data-theme={theme}
          ref={ref}
          data-region="uc__global-menu"
        >
          <div className="w-full h-full flex flex-col">
            <nav
              className={`flex-1 overflow-y-auto p-4 ${numBanners ? `pt-${numBanners * 4}` : ""}`}
              aria-label={label}
            >
              {children}
              <div className="mt-auto p-4 border-t border-gray-700">
                <SocialMediaLinks links={socialLinks} />
              </div>
            </nav>
          </div>
        </div>
      </GlobalMenuLevelContext.Provider>
    </GlobalMenuNavContext.Provider>
  );
}
