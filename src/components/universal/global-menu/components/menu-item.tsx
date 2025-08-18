
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
    return (
        <li
            className={cn(
              "nav-primary__item",
              hasBorder && "border-b border-gray-700"
            )}
          >
            <button
              onClick={() => onLinkClick(link, depth)}
              className={cn(
                "nav-primary__action bg-transparent border-0 inline p-0 text-left transition-colors duration-150 ease-in-out w-full group",
                 activeItem?.title === link.title ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              <div className="flex justify-between items-center py-2">
                {depth === 1 ? (
                  <span
                    className={cn(
                      "text-4xl font-headline tracking-[-0.1px] leading-[1.15] md:text-5xl min-[1260px]:text-[56px] bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat relative transition-[background-size] duration-300 bg-[0_100%] bg-[length:0%_1px] group-hover:bg-[length:100%_1px]",
                      activeItem?.title === link.title && "bg-[length:100%_1px]"
                    )}
                  >
                    {link.title}
                  </span>
                ) : (
                  <span className="flex items-center w-full">
                    <strong className="text-lg font-bold">
                       <span className={cn("bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat relative transition-[background-size] duration-300 bg-[0_100%] bg-[length:0%_1px] group-hover:bg-[length:100%_1px]", activeItem?.title === link.title && "bg-[length:100%_1px]")}>
                        {link.title}
                       </span>
                    </strong>
                    {link.sublinks && (
                      <ChevronRight className="h-5 w-5 text-gray-500 ml-auto flex-shrink-0 group-hover:text-white transition-colors duration-150" />
                    )}
                  </span>
                )}
              </div>
            </button>
          </li>
    )
}
