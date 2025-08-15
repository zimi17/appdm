import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center pt-[200px] pb-[200px] text-center text-black overflow-hidden bg-[#f3f4f4]">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/2000x667.png"
          alt="Illustration of people moving up to higher columns"
          fill
          className="object-cover"
          priority
          data-ai-hint="people progress"
        />
        <div className="absolute inset-0 bg-[rgba(224,224,224,0.7)]" />
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-normal text-black leading-none">
          Inspiring the Next Generation
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg font-body text-black">
          A dedication to mentorship has been part of Harvard’s mission for nearly 400 years, changing the lives of countless scientists, scholars, and leaders.
        </p>
      </div>
    </section>
  );
}
