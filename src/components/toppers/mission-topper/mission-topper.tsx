'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import './mission-topper.scss';

interface MissionTopperProps {
  titleParts: { text: string; isButton: boolean }[];
  slides: {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    imageUrl: string;
    imageHint?: string;
  }[];
  theme?: 'light' | 'dark';
}

export function MissionTopper({ titleParts, slides, theme = 'light' }: MissionTopperProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = React.useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );


  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial active slide

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleTitleButtonClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };
  
  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  let buttonIndex = -1;

  return (
    <section className="hbs-mission-topper" data-theme={theme} data-region="topper-mission">
      <div className="hbs-mission-topper__content max-w-screen-2xl mx-auto">
        <h1 className="sr-only">STIE Dwimulya</h1>
        
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
          <div className="col-span-full py-12 md:py-16">
            <div className="max-w-7xl">
              <div className="hbs-mission-topper__title">
                {titleParts.map((part, index) => {
                  if (part.isButton) {
                    buttonIndex++;
                    const slideIndex = buttonIndex;
                    return (
                      <button
                        key={index}
                        onClick={() => handleTitleButtonClick(slideIndex)}
                        className={cn(
                          "hbs-mission-topper__has-details underline decoration-transparent underline-offset-4 decoration-4 transition-all duration-300",
                          activeSlide === slideIndex ? "text-primary decoration-primary" : "text-foreground hover:decoration-muted-foreground/50"
                        )}
                        aria-label={part.text}
                        aria-description="advance to this slide in the carousel"
                      >
                        {part.text}
                      </button>
                    );
                  }
                  return <span key={index}>{part.text}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="hbs-mission-topper__media relative w-full px-6">
            <Carousel
                setApi={setApi}
                plugins={[autoplayPlugin.current]}
                opts={{ loop: true }}
                className="w-full relative aspect-video md:aspect-[32/18] overflow-hidden"
            >
                <CarouselContent className="h-full">
                {slides.map((slide, index) => (
                    <CarouselItem key={index} className="h-full relative">
                        <Image
                            src={slide.imageUrl}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            data-ai-hint={slide.imageHint}
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </CarouselItem>
                ))}
                </CarouselContent>
                <div className="absolute top-8 right-8 z-10 flex gap-2">
                    <Button size="icon" variant="outline" className="rounded-full bg-white/80 hover:bg-white text-black" onClick={scrollPrev} aria-label="Previous slide">
                        <ArrowLeft className="h-6 w-6"/>
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full bg-white/80 hover:bg-white text-black" onClick={scrollNext} aria-label="Next slide">
                        <ArrowRight className="h-6 w-6"/>
                    </Button>
                </div>
                
                <div className="absolute top-8 left-8 z-10">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                         <Link href={slides[activeSlide].linkHref} className="block group cursor-pointer">
                            <div className="w-full max-w-sm bg-card/90 backdrop-blur-sm p-4 transition-colors duration-300 group-hover:bg-card">
                                <p className="mb-6 text-base font-normal text-card-foreground">{slides[activeSlide].description}</p>
                                <span className="text-secondary font-bold self-start group-hover:underline flex items-center gap-2">
                                    {slides[activeSlide].linkText}
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                    </AnimatePresence>
                </div>
            </Carousel>
        </div>
      </div>
    </section>
  );
}