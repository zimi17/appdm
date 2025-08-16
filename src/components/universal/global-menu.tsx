
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/primitives/logo";
import { navLinks, quickLinks } from "@/lib/data";

const NavColumn = ({
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
        "h-full overflow-y-auto w-full pt-[90px] pr-6 pb-0 pl-6 [-webkit-overflow-scrolling:touch] after:content-[''] after:block after:h-[50px] after:w-full min-[1260px]:after:h-[88px] md:pt-[137px] min-[960px]:pl-10 min-[960px]:pr-10 min-[1260px]:pt-[146px] nav-scrollbar z-[111]",
        className
      )}
    >
      {depth > 1 && parentItem && (
        <div className="nav-primary__subsec--top pt-[8px] mb-6 md:mb-[41px]">
          <div className="nav-primary__back mb-9 md:hidden">
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
                      <ChevronRight className="h-5 w-5 text-gray-500 ml-2 flex-shrink-0 group-hover:text-white transition-colors duration-150" />
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

export function GlobalMenu({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [activeL1, setActiveL1] = useState<any | null>(null);
  const [activeL2, setActiveL2] = useState<any | null>(null);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setActiveL1(null);
        setActiveL2(null);
      }, 300); // Delay matches the sheet close animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const resetNav = () => {
    onOpenChange(false);
  };

  const handleNavLinkClick = (link: any, depth: number) => {
    if (link.parent) {
      if (link.depth === 2) {
        setActiveL1(null);
      } else if (link.depth === 3) {
        setActiveL2(null);
      }
      return;
    }

    if (!link.sublinks) {
        if(link.href) {
            window.location.href = link.href;
        }
        resetNav();
        return;
    }

    if (depth === 1) {
        setActiveL1({ ...link, parentTitle: "Main Menu" });
        setActiveL2(null);
    } else if (depth === 2) {
        setActiveL2({ ...link, parentTitle: activeL1?.title });
    }
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="top"
        className="w-full h-full bg-[#292c2f] p-0 text-white overflow-hidden border-0 z-[100]"
      >
        <span className="sr-only">
          <SheetTitle>Main Menu</SheetTitle>
          <SheetDescription>
            Site navigation menu. Use the tab key to navigate through the links.
          </SheetDescription>
        </span>
        <div className="absolute top-0 left-0 right-0 h-[90px] flex justify-between items-center px-6 z-10">
          <Link href="/" onClick={resetNav} className="inline-block relative">
            <Logo theme="dark" className="h-12 w-[190px]" />
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6 text-white" />
            </Button>
          </SheetClose>
        </div>

        <div className="h-full flex w-full">
          <div className={cn("h-full md:w-[350px] lg:w-[350px] shrink-0 md:border-r border-gray-700 absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out", {"-translate-x-full md:translate-x-0": activeL1})}>
             <NavColumn
                links={navLinks}
                onLinkClick={handleNavLinkClick}
                activeItem={activeL1}
                depth={1}
              />
          </div>
          <div
            className={cn(
              "h-full md:w-[350px] lg:w-[350px] shrink-0 md:border-r border-gray-700 absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out",
              activeL1 ? "translate-x-0" : "translate-x-full",
              {"-translate-x-full md:translate-x-0": activeL2}
            )}
          >
             {activeL1?.sublinks && (
                <NavColumn
                  links={activeL1.sublinks}
                  onLinkClick={handleNavLinkClick}
                  parentItem={activeL1}
                  activeItem={activeL2}
                  depth={2}
                />
              )}
          </div>
          <div
            className={cn(
              "h-full grow absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out",
              activeL2 ? "translate-x-0" : "translate-x-full",
            )}
          >
            {activeL2?.sublinks && (
                <NavColumn
                  links={activeL2.sublinks}
                  onLinkClick={handleNavLinkClick}
                  parentItem={activeL2}
                  activeItem={null}
                  depth={3}
                />
              )}
          </div>
        </div>
         <nav className="absolute bottom-0 left-0 right-0 bg-[#0e0e0e] border-t border-solid border-t-[#464a4f] text-white overflow-hidden" aria-labelledby="quick_links_nav-label">
            <div className="overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch] p-4 md:p-6 lg:px-10 lg:py-8">
              <strong className="text-[#8996a0] inline-block text-base font-normal tracking-[-0.1px] mr-5 lg:text-lg" id="quick_links_nav-label">
                Quick Links
                <ChevronRight className="inline h-4 w-4 ml-1" />
              </strong>
              <ol className="inline-block">
                {quickLinks.map(link => (
                  <li key={link.label} className="inline-block leading-[1.15] mr-7 last-of-type:mr-0">
                    <Link href={link.href} className="text-white font-bold text-base lg:text-lg hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
      </SheetContent>
    </Sheet>
  );
}
