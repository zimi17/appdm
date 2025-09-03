"use client";

import { cn } from "@/lib/utils";
import { useSetSticky } from "./useSetSticky";
import { ReactNode } from "react";

interface SiteHeaderWrapperProps {
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark" | "white" | "black" | "crimson" | "purple" | "blue" | "red";
  sticky?: boolean;
  stickyOffset?: number;
  height?: string;
  zIndex?: string;
  enableBlur?: boolean;
  dataSanity?: string;
}

export function SiteHeaderWrapper({
  children,
  className,
  theme = "dark",
  sticky = true,
  stickyOffset = 10,
  height = "h-[90px]",
  zIndex = "z-[99]",
  enableBlur = true,
  dataSanity
}: SiteHeaderWrapperProps) {
  const { isSticky, mounted } = useSetSticky({ threshold: stickyOffset });

  const baseClasses = cn(
    "site-header-wrapper transition-all duration-300",
    height,
    zIndex,
    sticky && "sticky top-0",
    className
  );

  const stickyClasses = cn(
    isSticky && enableBlur && "backdrop-blur-sm shadow-md",
    isSticky && theme === "dark" && "bg-brand-primary/80",
    isSticky && theme === "light" && "bg-white/80",
    isSticky && theme === "white" && "bg-white/90",
    isSticky && theme === "black" && "bg-black/80",
    !isSticky && theme === "dark" && "bg-brand-primary",
    !isSticky && theme === "light" && "bg-white",
    !isSticky && theme === "white" && "bg-white",
    !isSticky && theme === "black" && "bg-black"
  );

  if (!mounted && sticky) {
    // Prevent hydration mismatch
    return (
      <header
        data-theme={theme}
        className={cn(baseClasses, `bg-${theme === "dark" ? "brand-primary" : theme}`)}
        data-sanity={dataSanity}
      >
        <div className="max-w-screen-2xl mx-auto px-6 h-full">
          {children}
        </div>
      </header>
    );
  }

  return (
    <header
      data-theme={theme}
      className={cn(baseClasses, stickyClasses)}
      data-sanity={dataSanity}
    >
      <div className="max-w-screen-2xl mx-auto px-6 h-full">
        {children}
      </div>
    </header>
  );
}
