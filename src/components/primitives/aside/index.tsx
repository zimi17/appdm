
'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AsideProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Aside({ title, children, className }: AsideProps) {
  return (
    <aside className={cn("bg-card p-6 rounded-lg shadow-sm", className)}>
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="space-y-2 text-lg text-muted-foreground [&_a]:text-primary [&_a:hover]:underline [&_a]:underline-offset-4 [&_a]:transition-colors">
        {children}
      </div>
    </aside>
  );
}
