"use client";

import { cn } from "@/lib/utils";

interface SiteHeaderSectionTitleProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SiteHeaderSectionTitle({
  title,
  subtitle,
  breadcrumb,
  className,
  titleClassName,
  subtitleClassName
}: SiteHeaderSectionTitleProps) {
  return (
    <div className={cn("site-header__section-title py-4 border-b border-white/10", className)}>
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-white/40">/</span>
                  )}
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className={cn(
          "text-2xl md:text-3xl font-bold text-white",
          titleClassName
        )}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={cn(
            "mt-2 text-base text-white/80 max-w-2xl",
            subtitleClassName
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
