
'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MissionTopperProps {
  titleParts: { text: string; isButton: boolean }[];
  slides: {
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    linkText: string;
    linkHref: string;
  }[];
}

export function MissionTopper({ titleParts, slides }: MissionTopperProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  const handleTitleClick = (index: number) => {
    api?.scrollTo(index);
  };

  let buttonIndex = 0;

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <Carousel 
        setApi={setApi} 
        className="w-full h-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="w-full h-full relative">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.imageHint}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight font-bold max-w-4xl">
          {titleParts.map((part, index) => {
            if (part.isButton) {
              const slideIndex = buttonIndex;
              buttonIndex++;
              return (
                <button
                  key={index}
                  onClick={() => handleTitleClick(slideIndex)}
                  className={cn(
                    "underline decoration-transparent underline-offset-8 decoration-2 transition-all duration-300",
                    current === slideIndex ? "text-primary decoration-primary" : "hover:decoration-white/50"
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

      <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end p-8 md:p-12 lg:p-16 w-full md:w-1/2 lg:w-2/5">
         <Card className="bg-background/80 backdrop-blur-sm border-none w-full max-w-md">
            <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="flex flex-col justify-center h-full"
                  >
                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                      {slides[current].title}
                    </h2>
                    <p className="mt-4 text-lg text-foreground max-w-lg">
                      {slides[current].description}
                    </p>
                    <div className="mt-6">
                      <Button asChild className="group bg-secondary hover:bg-accent text-secondary-foreground rounded-full px-6 py-3">
                        <Link href={slides[current].linkHref}>
                          {slides[current].linkText}
                          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
            </CardContent>
         </Card>
      </div>
    </section>
  );
}
