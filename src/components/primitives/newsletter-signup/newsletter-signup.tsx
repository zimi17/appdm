'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface NewsletterSignupProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  successTitle?: ReactNode;
  successSubtitle?: ReactNode;
  placeholder?: string;
  className?: string;
}

export function NewsletterSignup({
  title = "Jangan lewatkan cerita.",
  subtitle = "Dapatkan wawasan terbaru dari para ahli STIE Dwimulya di kotak masuk Anda setiap minggu.",
  successTitle = "Terima kasih telah mendaftar.",
  successSubtitle = "Periksa kotak masuk Anda untuk wawasan terbaru dari STIE Dwimulya.",
  placeholder = "anda@contoh.com",
  className,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika pengiriman email ke backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className={cn("bg-card p-8 rounded-lg shadow-md", className)}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center"
          >
            <h3 className="text-2xl font-bold font-headline text-foreground">{successTitle}</h3>
            <p className="mt-2 text-muted-foreground">{successSubtitle}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {typeof title === 'string' ? <p className="text-2xl font-bold font-headline text-foreground">{title}</p> : title}
            {typeof subtitle === 'string' ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : subtitle}
            
            <fieldset className="mt-6">
              <div className="relative flex items-center">
                <Input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 pr-14 text-base"
                  aria-label="Alamat Email"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1.5 h-9 w-9 rounded-full bg-primary text-primary-foreground hover:bg-accent"
                  aria-label="Kirim"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </fieldset>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
