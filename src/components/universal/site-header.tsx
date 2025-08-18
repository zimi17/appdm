
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "./header-logo";
import { NavHotLinks } from "./nav-hot-links";
import { ActionButtons } from "./action-buttons";
import { GlobalMenu } from "./global-menu";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header data-theme="brand-dark" className={cn("site-header sticky top-0 z-[99] transition-all duration-300 h-[90px]", isScrolled ? "bg-[#002147]/80 backdrop-blur-sm shadow-md" : "bg-[#002147]")}>
        <div className="flex h-full justify-between items-center px-6">
          <div className="flex items-center flex-1">
            <HeaderLogo />
            <NavHotLinks />
          </div>
          <ActionButtons onMenuOpen={setIsNavOpen} />
        </div>
      </header>
      <GlobalMenu isOpen={isNavOpen} onOpenChange={setIsNavOpen} />
    </>
  );
}

