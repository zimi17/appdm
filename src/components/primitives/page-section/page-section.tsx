'use client';

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ComponentHeader } from "@/components/primitives/component-header/component-header";
import { SectionHeaderProps } from "@/components/blocks/section-header/section-header";

export interface PageSectionProps {
  header?: SectionHeaderProps;
  children?: ReactNode;
  theme?: 'light' | 'white' | 'dark' | 'black' | 'crimson';
  spacing?: 'both' | 'top' | 'bottom' | 'none';
  className?: string;
}

export function PageSection({
  header,
  children,
  theme = "light",
  spacing = 'both',
  className,
}: PageSectionProps) {

  const spacingClasses = {
      both: 'py-16 md:py-24',
      top: 'pt-16 md:pt-24',
      bottom: 'pb-16 md:pb-24',
      none: 'py-0',
  }

  // Instead of swapping Tailwind classes, we now set the data-theme attribute.
  // The actual color changes are handled by CSS variables in globals.css.
  const themeClasses = {
    light: 'bg-background text-foreground',
    white: 'bg-card text-card-foreground',
    dark: 'bg-brand-gray-800 text-white',
    black: 'bg-black text-white',
    crimson: 'bg-red-700 text-white',
  };

  return (
    <section 
        className={cn(
            themeClasses[theme], 
            spacingClasses[spacing],
            className
        )} 
        data-theme={theme}
    >
      <div className="container mx-auto px-6">
        {header && <ComponentHeader {...header} />}
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}
