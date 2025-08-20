
'use client';

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ComponentHeader, type ComponentHeaderProps } from "@/components/primitives/component-header/component-header";

export interface PageSectionProps {
  header?: ComponentHeaderProps;
  children?: ReactNode;
  theme?: 'light' | 'white' | 'dark' | 'black';
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

  const themeClasses = {
      light: 'bg-muted text-foreground',
      white: 'bg-background text-foreground',
      dark: 'bg-card text-card-foreground',
      black: 'bg-black text-white'
  }

  return (
    <section 
        className={cn(
            'transition-colors duration-300',
            spacingClasses[spacing],
            themeClasses[theme],
            className
        )} 
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
            <div className="col-span-full">
                {header && <ComponentHeader {...header} />}
                {children && <div>{children}</div>}
            </div>
        </div>
      </div>
    </section>
  );
}
