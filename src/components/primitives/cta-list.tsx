
'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CtaListProps {
  items: {
    href: string;
    text: string;
  }[];
  className?: string;
}

export function CtaList({ items, className }: CtaListProps) {
  return (
    <ul className={cn("border-t border-border mt-6", className)}>
      {items.map((item, index) => (
        <li key={index} className="border-b border-border">
          <Link href={item.href} className="flex justify-between items-center py-3 text-foreground hover:text-primary transition-colors group">
            <span className="font-semibold text-lg">{item.text}</span>
            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:animate-swipe" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
