
'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  title: string;
  link: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  theme?: 'light' | 'dark'; // Although not used yet, we can build for it
  rootLink?: {
    title: string;
    href: string;
  }
}

export function Breadcrumbs({ breadcrumbs, theme = 'light', rootLink = { title: 'Beranda', href: '/' } }: BreadcrumbsProps) {
  return (
    <div className={cn(theme === 'dark' && 'text-secondary-foreground')}>
        <nav aria-label="Breadcrumbs">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground py-4">
            <li>
                <Link href={rootLink.href} className="hover:text-primary transition-colors">
                {rootLink.title}
                </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                {crumb.isCurrent || index === breadcrumbs.length -1 ? (
                    <span className="font-semibold text-foreground">{crumb.title}</span>
                ) : (
                    <Link href={crumb.link} className="hover:text-primary transition-colors">
                    {crumb.title}
                    </Link>
                )}
                </li>
            ))}
            </ol>
        </nav>
    </div>
  );
}
