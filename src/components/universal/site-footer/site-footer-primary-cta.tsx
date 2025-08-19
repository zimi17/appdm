
'use client';

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SiteFooterPrimaryCtaProps {
  title?: ReactNode;
  description?: ReactNode;
  href?: string;
}

export function SiteFooterPrimaryCta({
  title,
  description,
  href,
}: SiteFooterPrimaryCtaProps) {
  if (!title || !href) return null;

  return (
    <div className="bg-primary text-primary-foreground">
       <Link href={href} className="group block hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
            <div className="flex items-center justify-between">
                <span className="font-headline text-xl md:text-2xl font-bold">
                    {title}
                </span>
                <div className="hidden md:flex items-center gap-4">
                    {description && <p className="text-lg opacity-90">{description}</p>}
                    <ArrowRight className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
                </div>
            </div>
        </div>
      </Link>
    </div>
  );
}
