
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MissionTopperProps {
  titleParts: { text: string; isButton: boolean }[];
  slides: any[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

export function MissionTopper({ titleParts, slides, activeSlide, setActiveSlide }: MissionTopperProps) {
  let buttonIndex = -1;

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {titleParts.map((part, index) => {
                if (part.isButton) {
                buttonIndex++;
                const slideIndex = buttonIndex;
                return (
                    <button
                    key={index}
                    onClick={() => setActiveSlide(slideIndex)}
                    className={cn(
                        "underline decoration-transparent underline-offset-8 decoration-4 transition-all duration-300",
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
            <div className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
                <p>{slides[activeSlide].description}</p>
                <Button asChild variant="link" className="p-0 text-lg mt-4 text-primary">
                    <Link href={slides[activeSlide].linkHref}>
                        {slides[activeSlide].linkText}
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
