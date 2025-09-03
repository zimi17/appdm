"use client";

import { cn } from "@/lib/utils";
import { SiteHeaderWorkingKnowledgeTagline } from "./components/site-header-working-knowledge-tagline";

interface SiteHeaderBannerProps {
  show?: boolean;
  tagline?: string;
  highlight?: string;
  className?: string;
  animated?: boolean;
  type?: "gradient" | "solid" | "minimal";
}

export function SiteHeaderBanner({
  show = true,
  tagline = "Kampus Rakyat, Kampus Perubahan",
  highlight = "Gen Z Ready",
  className,
  animated = true,
  type = "gradient"
}: SiteHeaderBannerProps) {
  if (!show) {
    return null;
  }

  const bannerStyles = {
    gradient: "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600",
    solid: "bg-brand-primary",
    minimal: "bg-gray-900"
  };

  return (
    <div className={cn(
      "site-header-banner py-2 text-white",
      bannerStyles[type],
      animated && type === "gradient" && "animate-gradient-x",
      className
    )}>
      <SiteHeaderWorkingKnowledgeTagline
        tagline={tagline}
        highlight={highlight}
        animated={animated && type === "gradient"}
        className="py-0 bg-transparent"
      />
    </div>
  );
}
