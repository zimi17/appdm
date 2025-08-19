
'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselCard } from '../carousel-card';
import { Button } from '../../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HeroCarouselProps {
  slides: {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    imageUrl: string;
    imageHint?: string;
  }[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

export function HeroCarousel({ slides, activeSlide, setActiveSlide }: HeroCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setActiveSlide(api.selectedScrollSnap());
    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap());
    });
  }, [api, setActiveSlide]);

  React.useEffect(() => {
    if (api && api.selectedScrollSnap() !== activeSlide) {
      api.scrollTo(activeSlide);
    }
  }, [api, activeSlide]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api]);

  return (
    <section className="relative w-full px-6 mb-2 md:mb-24">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="w-full max-w-screen-xl mx-auto relative aspect-video overflow-hidden"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full relative">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                layout="fill"
                className="object-cover"
                data-ai-hint={slide.imageHint}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-8 right-8 z-10 flex gap-2">
            <Button size="icon" variant="outline" className="rounded-full bg-white/80 hover:bg-white text-black" onClick={scrollPrev}>
            <ArrowLeft className="h-6 w-6"/>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full bg-white/80 hover:bg-white text-black" onClick={scrollNext}>
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
                <CarouselCard slide={slides[activeSlide]} />
            </motion.div>
            </AnimatePresence>
        </div>
      </Carousel>
    </section>
  );
}
