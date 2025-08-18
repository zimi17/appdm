
'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AsideProps {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
  className?: string;
}

export function Aside({ title, links, className }: AsideProps) {
  return (
    <aside className={cn("bg-card p-6 rounded-lg shadow-sm", className)}>
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="space-y-2">
        {links.map((link, index) => (
          <p key={index}>
            <Link 
              href={link.href} 
              target="_blank" 
              className="text-lg text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors"
            >
              {link.text}
            </Link>
          </p>
        ))}
      </div>
    </aside>
  );
}
