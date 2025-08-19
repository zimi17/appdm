
'use client';

import { CtaLink, CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import { slugify } from "@/lib/slugify";
import { ReactNode } from "react";

export interface SectionHeaderProps {
  title?: string;
  description?: ReactNode;
  cta?: CtaLinkProps;
}

export function SectionHeader({ title, description, cta }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="grid lg:grid-cols-2 gap-8 items-end">
        <div>
          {title && (
            <h2
              className="font-headline text-4xl md:text-5xl text-foreground font-bold max-w-lg"
              id={slugify(title)}
            >
              {title}
            </h2>
          )}
        </div>
        <div className="text-lg text-muted-foreground">
          {description && <p>{description}</p>}
          {cta && (
            <div className="mt-4">
              <CtaLink {...cta} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

