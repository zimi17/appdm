
'use client';

import { LazyImage } from "@/components/primitives/lazy-image/lazy-image";
import { ReactNode } from "react";

export interface SupportingDetailsListItem {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export interface SupportingDetailsProps {
  items?: Array<SupportingDetailsListItem>;
  mediaAsset?: {
    src: string;
    alt: string;
    hint?: string;
  };
}

export function SupportingDetails({ items = [], mediaAsset }: SupportingDetailsProps) {
  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {items.map((item, i) => (
            <li key={i} className="flex items-baseline gap-4">
              <div className="w-16 shrink-0 border-t-2 border-primary translate-y-3"></div>
              <div>
                {item.title && (
                  <h3 className="text-xl font-bold font-headline text-foreground">
                    {item.title}
                  </h3>
                )}
                {item.subtitle && (
                  <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {mediaAsset && (
          <div className="row-start-1 lg:row-start-auto">
             <LazyImage 
                src={mediaAsset.src} 
                alt={mediaAsset.alt}
                data-ai-hint={mediaAsset.hint}
                className="aspect-[4/5]"
                imageClassName="object-cover"
                fill
            />
          </div>
        )}
      </div>
    </div>
  );
}
