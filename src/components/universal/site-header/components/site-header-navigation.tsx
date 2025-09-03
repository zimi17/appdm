"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { SanitySiteSettings } from '@/lib/sanity-queries';
import { hotLinks } from '@/lib/data/nav';

interface SiteHeaderNavigationProps {
  siteSettings: SanitySiteSettings | null;
  className?: string;
  showHotLinks?: boolean;
}

export function SiteHeaderNavigation({ 
  siteSettings, 
  className,
  showHotLinks = true 
}: SiteHeaderNavigationProps) {
  // Use Sanity data if available, fallback to static data
  const links = siteSettings?.headerSettings?.hotLinks || hotLinks;

  if (!showHotLinks || !links.length) {
    return null;
  }

  return (
    <nav 
      className={cn("site-header__navigation ml-8 hidden md:block", className)}
      data-sanity={siteSettings?._id ? `siteSettings=${siteSettings._id};path=headerSettings.hotLinks` : undefined}
    >
      <ol className="flex items-center space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-2 text-sm font-medium text-background hover:text-primary transition-colors",
                "before:content-[''] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#df072e]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded-sm"
              )}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
