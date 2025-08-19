
'use client';

import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SiteFooterPrimaryCtaProps {
  title?: ReactNode;
  description?: ReactNode;
  href?: string;
  linkText?: string;
}

export function SiteFooterPrimaryCta({
  title,
  description,
  href,
  linkText,
}: SiteFooterPrimaryCtaProps) {
  if (!title || !href) return null;

  return (
    <div className="bg-primary text-primary-foreground">
        <Link href={href} className="group">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-headline text-xl md:text-2xl font-bold">
                        {title}
                    </span>
                    <div className="flex items-center gap-4">
                        {description && <p className="text-lg opacity-90 hidden lg:block">{description}</p>}
                        <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                    </div>
                </div>
            </div>
        </Link>
    </div>
  );
}
