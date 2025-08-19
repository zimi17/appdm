
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
    <div className="bg-primary text-primary-foreground group hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300">
      <Link href={href}>
        <div className="max-w-screen-2xl mx-auto px-6 py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 items-center">
            <div className="md:col-span-4">
              <span className="font-headline text-xl md:text-2xl font-bold">
                {title}
              </span>
            </div>
            <div className="md:col-span-8">
              <div className="flex items-center justify-between">
                {description && <p className="text-lg opacity-90">{description}</p>}
                <ArrowRight className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-rotate-45 shrink-0 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
