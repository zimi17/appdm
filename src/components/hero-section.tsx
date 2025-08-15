'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection({ theme = 'bright' }: { theme?: 'bright' | 'dark' }) {
  const gradientClass = theme === 'bright'
    ? 'bg-gradient-to-b from-transparent from-30% to-[#f3f4f4]'
    : 'bg-gradient-to-b from-transparent from-30% to-[#1a1a1a]';

  return (
    <section className={`relative flex items-center justify-center pt-[200px] pb-[200px] text-center overflow-hidden ${theme === 'bright' ? 'bg-[#f3f4f4] text-black' : 'bg-[#1a1a1a] text-white'}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://placehold.co/2000x667.png"
          alt="Illustration of people moving up to higher columns"
          fill
          className="object-cover"
          priority
          data-ai-hint="people progress"
        />
        <div className={`absolute inset-0 ${gradientClass}`} />
      </motion.div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <motion.h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-normal text-black leading-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Inspiring the Next Generation
        </motion.h1>
        <motion.p
          className="mt-8 max-w-xl mx-auto text-lg font-body text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A dedication to mentorship has been part of Harvard’s mission for nearly 400 years, changing the lives of countless scientists, scholars, and leaders.
        </motion.p>
      </div>
    </section>
  );
}