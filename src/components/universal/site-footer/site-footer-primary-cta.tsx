
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
    <div className="bg-secondary text-secondary-foreground group hover:bg-accent transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto px-6">
        <Link href={href} className="block py-4 md:py-6">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-8 items-center">
            <div className="col-span-full md:col-span-4 lg:col-span-4">
              <span className="font-headline text-xl md:text-2xl font-bold">
                {title}
              </span>
            </div>
            <div className="col-span-full md:col-span-4 lg:col-span-12">
              <div className="flex items-center justify-between">
                {description && <p className="text-lg opacity-90 hidden md:block">{description}</p>}
                <ArrowRight className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-rotate-45 ml-auto md:ml-0" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
