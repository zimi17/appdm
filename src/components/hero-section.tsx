import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="STIE Dwimulya Campus"
          fill
          className="object-cover"
          priority
          data-ai-hint="university campus"
        />
        <div className="absolute inset-0 bg-accent/80" />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary drop-shadow-lg">
          STIE Dwimulya
        </h1>
        <p className="mt-4 font-headline text-2xl md:text-3xl font-semibold text-background drop-shadow-md">
          Kampus Rakyat, Kampus Perubahan
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-background/90">
          Empowering society through accessible, quality education for a brighter future. Join us in making a difference.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
            <Link href="#programs">Explore Programs</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-accent shadow-lg transition-transform hover:scale-105">
            <Link href="#admissions">How to Apply</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
