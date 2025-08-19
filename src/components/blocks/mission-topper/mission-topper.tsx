
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface MissionTopperProps {
  titleParts: { text: string; isButton: boolean }[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  className?: string;
}

export function MissionTopper({ titleParts, activeSlide, setActiveSlide, className }: MissionTopperProps) {
  let buttonIndex = -1;

  return (
    <section className={cn("bg-background text-foreground py-12 md:py-16", className)}>
        <div className="max-w-5xl">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {titleParts.map((part, index) => {
              if (part.isButton) {
                buttonIndex++;
                const slideIndex = buttonIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(slideIndex)}
                    className={cn(
                      "underline decoration-transparent underline-offset-4 decoration-4 transition-all duration-300",
                      activeSlide === slideIndex ? "text-primary decoration-primary" : "hover:decoration-muted-foreground/50"
                    )}
                  >
                    {part.text}
                  </button>
                );
              }
              return <span key={index}>{part.text}</span>;
            })}
          </h1>
        </div>
    </section>
  );
}
