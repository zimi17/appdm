
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "./header-logo";
import { NavHotLinks } from "./nav-hot-links";
import { ActionButtons } from "./action-buttons";
import { GlobalMenu } from "../global-menu/global-menu";
import { SanitySiteSettings, SanityNavigation } from "@/lib/sanity-queries";

interface SiteHeaderProps {
  siteSettings: SanitySiteSettings | null;
  navigation: SanityNavigation | null;
}

export function SiteHeader({ siteSettings, navigation }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  return (
    <>
      <header
        data-theme="dark"
        className={cn(
          "site-header sticky top-0 z-[99] transition-all duration-300 h-[90px]",
          isScrolled
            ? "bg-brand-primary/80 backdrop-blur-sm shadow-md"
            : "bg-brand-primary"
        )}
        data-sanity={siteSettings?._id ? `siteSettings=${siteSettings._id}` : undefined}
      >
        <div className="max-w-screen-2xl mx-auto px-6 h-full flex justify-between items-center">
            <div className="flex items-center flex-1">
                <HeaderLogo />
                <NavHotLinks siteSettings={siteSettings} />
            </div>
            <ActionButtons siteSettings={siteSettings} onMenuOpen={setIsNavOpen} />
        </div>
      </header>

      <GlobalMenu navigation={navigation} isOpen={isNavOpen} onOpenChange={setIsNavOpen} />
    </>
  );
}
