"use client";

import Link from "next/link";
import { Logo } from "@/components/primitives/logo/logo";
import { cn } from "@/lib/utils";

interface SiteHeaderLogoProps {
  className?: string;
  logoClassName?: string;
  href?: string;
  ariaLabel?: string;
}

export function SiteHeaderLogo({ 
  className,
  logoClassName,
  href = "/",
  ariaLabel = "Beranda"
}: SiteHeaderLogoProps) {
  return (
    <div className={cn("site-header__logo flex-shrink-0", className)}>
      <Link 
        href={href} 
        aria-label={ariaLabel}
        className="inline-block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded-sm"
      >
        <Logo 
          theme="dark" 
          className={cn("h-12 w-[190px] transition-transform hover:scale-105", logoClassName)} 
        />
      </Link>
    </div>
  );
}
