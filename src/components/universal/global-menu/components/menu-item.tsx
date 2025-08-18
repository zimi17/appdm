
"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
    link: any;
    onLinkClick: (link: any, depth: number) => void;
    activeItem: any;
    depth: number;
}

export const MenuItem = ({ link, onLinkClick, activeItem, depth }: MenuItemProps) => {
    const isActive = activeItem?.title === link.title;
    const hasSublinks = !!link.sublinks;

    return (
        <li
            className="nav-primary__item bg-[#292c2f]"
            data-sidebar="menu-item"
        >
            <button
              onClick={() => onLinkClick(link, depth)}
              data-active={isActive}
              data-depth={depth}
              className={cn(
                "menu-item-button bg-transparent border-0 inline p-0 text-left transition-colors duration-150 ease-in-out w-full group relative",
                 isActive ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              <div className="flex justify-between items-center py-2">
                {depth === 1 ? (
                  <span className="text-3xl md:text-4xl min-[1260px]:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] flex items-center gap-2">
                    <span className="bg-[#292c2f] relative z-10 pr-2">{link.title}</span>
                    {hasSublinks && (
                       <ChevronRight className={cn("chevron-indicator h-6 w-6 transition-opacity duration-300", isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100')} />
                    )}
                  </span>
                ) : (
                  <div className="flex items-center w-full">
                    <strong className="text-lg font-normal leading-[1.55] tracking-[-0.02em] flex items-center gap-2 group relative z-10 bg-[#292c2f] pr-2">
                       {link.title}
                    </strong>
                    {hasSublinks && (
                      <ChevronRight className="chevron-indicator h-5 w-5 ml-auto flex-shrink-0 transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
                    )}
                  </div>
                )}
              </div>
            </button>
          </li>
    )
}
