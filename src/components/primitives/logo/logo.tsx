
'use client';

import { cn } from "@/lib/utils";

export function Logo({ className, theme = 'bright' }: { className?: string, theme?: 'bright' | 'dark' }) {
  const fillColor = theme === 'dark' ? '#FFFFFF' : '#002147';
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn(className)}
      aria-label="Logo"
    >
      <circle cx="50" cy="50" r="48" stroke={fillColor} strokeWidth="4" fill="transparent" />
      <text x="50" y="55" fontFamily="Arial, sans-serif" fontSize="40" fill={fillColor} textAnchor="middle" dy=".3em">
        D
      </text>
    </svg>
  );
}
