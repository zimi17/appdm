
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, X } from "lucide-react";
import { Logo } from "@/components/primitives/logo";
import { navLinks, quickLinks } from "@/lib/data/nav";
import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopLayout } from "./global-menu/desktop-layout";
import { MobileLayout } from "./global-menu/mobile-layout";

export function GlobalMenu({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [activeL1, setActiveL1] = useState<any | null>(null);
  const [activeL2, setActiveL2] = useState<any | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setActiveL1(null);
        setActiveL2(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const resetNav = () => {
    onOpenChange(false);
  };

  const handleNavLinkClick = (link: any, depth: number) => {
    // Handle "Back" button clicks
    if (link.parent) {
      if (depth === 2) {
        setActiveL1(null);
      } else if (depth === 3) {
        setActiveL2(null);
      }
      return;
    }

    // Handle clicks on links that navigate away
    if (!link.sublinks) {
      if (link.href) {
        window.location.href = link.href;
      }
      resetNav();
      return;
    }

    // Handle clicks that open submenus
    if (depth === 1) {
      if (activeL1?.title === link.title) {
        setActiveL1(null);
        setActiveL2(null);
      } else {
        setActiveL1(link);
        setActiveL2(null);
      }
    } else if (depth === 2) {
      if (activeL2?.title === link.title) {
        setActiveL2(null);
      } else {
        setActiveL2(link);
      }
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
        <div className="absolute top-0 left-0 right-0 h-[90px] flex justify-between items-center px-6 z-[112]">
          <Link href="/" onClick={resetNav} className="inline-block relative">
            <Logo theme="dark" className="h-12 w-[190px]" />
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6 text-white" />
            </Button>
          </SheetClose>
        </div>

        {isMobile ? (
          <MobileLayout
            activeL1={activeL1}
            activeL2={activeL2}
            handleNavLinkClick={handleNavLinkClick}
          />
        ) : (
          <DesktopLayout
            activeL1={activeL1}
            activeL2={activeL2}
            handleNavLinkClick={handleNavLinkClick}
          />
        )}

        <nav className="absolute bottom-0 left-0 right-0 bg-[#0e0e0e] border-t border-solid border-t-[#464a4f] text-white overflow-hidden z-[111]">
          <div className="overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch] p-4 md:p-6 lg:px-10 lg:py-8">
            <strong
              className="text-[#8996a0] inline-block text-base font-normal tracking-[-0.1px] mr-5 lg:text-lg"
              id="quick_links_nav-label"
            >
              Quick Links
              <ChevronRight className="inline h-4 w-4 ml-1" />
            </strong>
            <ol className="inline-block">
              {quickLinks.map((link) => (
                <li
                  key={link.label}
                  className="inline-block leading-[1.15] mr-7 last-of-type:mr-0"
                >
                  <Link
                    href={link.href}
                    className="text-white font-bold text-base lg:text-lg hover:text-gray-300"
                  >
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
