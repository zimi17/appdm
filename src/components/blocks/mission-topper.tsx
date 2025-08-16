
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MissionTopperProps {
  titleParts: {
    text: string;
    isButton: boolean;
  }[];
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

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleTitleClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative bg-background pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight text-foreground max-w-4xl">
              {titleParts.map((part, index) =>
                part.isButton ? (
                  <button
                    key={index}
                    onClick={() => handleTitleClick(index - 1)}
                    className={cn(
                      'underline decoration-2 underline-offset-4 transition-colors duration-300',
                      current === index - 1
                        ? 'text-primary decoration-primary'
                        : 'text-foreground/80 decoration-border hover:text-primary'
                    )}
                  >
                    {part.text}
                  </button>
                ) : (
                  <span key={index}>{part.text}</span>
                )
              )}
            </h1>
          </div>

          <div className="mt-8 md:mt-12 relative">
            <Carousel setApi={setApi} className="relative">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                       <div className="relative aspect-video lg:aspect-auto lg:h-[400px]">
                        <AnimatePresence initial={false}>
                          <motion.div
                             key={current}
                             className="absolute inset-0"
                             initial={{ opacity: 0, scale: 1.05 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 1.05 }}
                             transition={{ duration: 0.5, ease: 'easeInOut' }}
                          >
                             {index === current && (
                                <Image
                                  src={slide.imageUrl}
                                  alt={slide.title}
                                  fill
                                  className="object-cover rounded-lg"
                                  data-ai-hint={slide.imageHint}
                                  priority={index === 0}
                                />
                             )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <div className="relative h-full">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="flex flex-col justify-center h-full"
                          >
                               {index === current && (
                                <>
                                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                                    {slide.title}
                                  </h3>
                                  <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                                    {slide.description}
                                  </p>
                                  <div className="mt-6">
                                    <Button asChild className="group bg-secondary hover:bg-accent text-secondary-foreground rounded-full px-6 py-3">
                                      <Link href={slide.linkHref}>
                                        {slide.linkText}
                                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                                      </Link>
                                    </Button>
                                  </div>
                                </>
                              )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-1/2 -translate-y-1/2 -left-4">
                 <CarouselPrevious className="static translate-y-0" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4">
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
