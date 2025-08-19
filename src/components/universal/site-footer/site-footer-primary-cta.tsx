
'use client';

import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import { ReactNode } from "react";

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
        <div className="container mx-auto px-6 py-8 md:py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">{title}</h2>
                    {description && <p className="mt-2 text-lg opacity-90">{description}</p>}
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                    <CtaLink 
                        href={href} 
                        variant="secondary" 
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-4 text-lg"
                    >
                        {title}
                    </CtaLink>
                </div>
            </div>
        </div>
    </div>
  );
}
