"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
    link: any;
    onLinkClick: (link: any, depth: number) => void;
    activeItem: any;
    depth: number;
    hasBorder?: boolean;
}

export const MenuItem = ({ link, onLinkClick, activeItem, depth, hasBorder }: MenuItemProps) => {
    const isActive = activeItem?.title === link.title;

    return (
        <li
            className={cn(
              "nav-primary__item",
              hasBorder && "border-b border-gray-700"
            )}
            data-sidebar="menu-item"
          >
            <button
              onClick={() => onLinkClick(link, depth)}
              className={cn(
                "nav-primary__action bg-transparent border-0 inline p-0 text-left transition-colors duration-150 ease-in-out w-full group",
                 isActive ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              <div className="flex justify-between items-center py-2 relative">
                {depth === 1 ? (
                  <span className="text-3xl md:text-4xl min-[1260px]:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] flex items-center gap-2">
                    {link.title}
                    {link.sublinks && (
                       <ChevronRight className={cn("h-6 w-6 transition-opacity duration-300", isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100')} />
                    )}
                  </span>
                ) : (
                  <div className="flex items-center w-full">
                    <strong className="text-lg font-bold flex items-center gap-2">
                       {link.title}
                       {link.sublinks && (
                        <ChevronRight className={cn("h-5 w-5 transition-opacity duration-300", isActive ? 'text-white opacity-0' : 'text-gray-500 group-hover:text-white group-hover:opacity-100')} />
                       )}
                    </strong>
                  </div>
                )}
              </div>
            </button>
          </li>
    )
}
