
"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const MenuColumn = ({
  links,
  onLinkClick,
  parentItem,
  activeItem,
  depth = 1,
  className,
}: {
  links: any[];
  onLinkClick: (link: any, depth: number) => void;
  parentItem?: any;
  activeItem?: any;
  depth?: number;
  className?: string;
}) => {
  const handleBackClick = () => {
    onLinkClick({ parent: true, depth }, depth);
  };

  return (
    <div
      className={cn(
        "h-full overflow-y-auto w-full pt-[90px] px-6 pb-24 [-webkit-overflow-scrolling:touch] after:content-[''] after:block after:h-[50px] after:w-full min-[1260px]:after:h-[88px] md:pt-[137px] min-[960px]:pl-10 min-[960px]:pr-10 min-[1260px]:pt-[146px] nav-scrollbar z-[111]",
        className
      )}
    >
      {depth > 1 && parentItem && (
        <div className="nav-primary__subsec--top pt-[8px] mb-6 md:mb-[41px]">
          <div className="nav-primary__back mb-9">
            <button
              onClick={handleBackClick}
              className="nav-primary__back-action bg-transparent border-0 text-white text-sm tracking-wider uppercase pt-0 pr-0 pb-0 pl-[26px] relative flex items-center font-medium"
            >
              <span className="icon bg-[#656f77] rounded-full text-white inline-block text-[11px] h-4 left-0 leading-[17px] absolute text-center w-4 top-0.5">
                <ChevronLeft className="w-4 h-4" />
              </span>
              {parentItem.parentTitle || "Back"}
            </button>
          </div>
          {parentItem?.href ? (
            <Link href={parentItem.href} className="hover:underline group">
              <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal flex items-center">
                {parentItem?.title}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </strong>
            </Link>
          ) : (
            <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal">
              {parentItem?.title}
            </strong>
          )}
          {parentItem?.description && (
            <span className="block text-sm leading-normal mt-2 text-gray-400">
              {parentItem.description}
            </span>
          )}
        </div>
      )}

      <ol className={cn(depth > 1 && "border-t border-gray-700")}>
        {links.map((link) => (
          <li
            key={link.title}
            className={cn(
              "nav-primary__item",
              depth > 1 && "border-b border-gray-700"
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
        ))}
      </ol>
    </div>
  );
};
