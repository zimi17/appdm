"use client";

import { cn } from "@/lib/utils";

interface WorkingKnowledgeTaglineProps {
  tagline?: string;
  highlight?: string;
  className?: string;
  animated?: boolean;
}

export function SiteHeaderWorkingKnowledgeTagline({
  tagline = "Kampus Rakyat, Kampus Perubahan",
  highlight = "Gen Z Ready",
  className,
  animated = true
}: WorkingKnowledgeTaglineProps) {
  return (
    <div className={cn(
      "site-header__working-knowledge-tagline py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600",
      animated && "animate-gradient-x",
      className
    )}>
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-4 text-white">
          <span className="text-sm font-medium">
            {tagline}
          </span>
          <span className="hidden md:inline-block w-1 h-1 bg-white/60 rounded-full" />
          <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {highlight}
          </span>
        </div>
      </div>
    </div>
  );
}
