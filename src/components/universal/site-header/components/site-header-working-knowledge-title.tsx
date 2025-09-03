"use client";

import { cn } from "@/lib/utils";

interface WorkingKnowledgeTitleProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  showPattern?: boolean;
}

export function SiteHeaderWorkingKnowledgeTitle({
  title,
  subtitle,
  highlight,
  className,
  titleClassName,
  subtitleClassName,
  showPattern = true
}: WorkingKnowledgeTitleProps) {
  return (
    <div className={cn(
      "site-header__working-knowledge-title relative py-8 md:py-12",
      "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      className
    )}>
      {/* Background Pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
      )}

      <div className="relative max-w-screen-2xl mx-auto px-6 text-center">
        {/* Highlight Badge */}
        {highlight && (
          <div className="inline-flex items-center mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {highlight}
            </span>
          </div>
        )}

        {/* Main Title */}
        <h1 className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4",
          "bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent",
          titleClassName
        )}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed",
            subtitleClassName
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
