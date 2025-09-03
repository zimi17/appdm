
'use client';

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ComponentHeader, type ComponentHeaderProps } from "@/components/primitives/component-header/component-header";

export interface PageSectionProps {
  header?: ComponentHeaderProps;
  children?: ReactNode;
  theme?: 'light' | 'white' | 'dark' | 'black' | 'high-contrast' | 'stie-primary' | 'stie-crimson';
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
      light: 'bg-contrast-primary text-contrast-primary',
      white: 'bg-contrast-primary text-contrast-primary',
      dark: 'bg-contrast-secondary text-contrast-primary',
      black: 'bg-contrast-inverse text-contrast-inverse',
      'high-contrast': 'bg-contrast-primary text-contrast-primary border-contrast-strong',
      'stie-primary': 'bg-contrast-primary text-contrast-primary',
      'stie-crimson': 'bg-contrast-primary text-contrast-primary'
  }

  return (
    <section 
        className={cn(
            'transition-colors duration-300',
            spacingClasses[spacing],
            themeClasses[theme],
            className
        )}
        data-theme={theme}
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6">
            <div className="col-span-full">
                {header && <ComponentHeader {...header} />}
                {children && <div>{children}</div>}
            </div>
        </div>
      </div>
      <style jsx global>{`
        .supporting-details-item::before {
          content: " ";
          display: block;
          height: 0;
          width: 3rem;
          border-top: 2px solid hsl(var(--secondary));
          flex-shrink: 0;
          margin-top: 0.5em;
        }
      `}</style>
    </section>
  );
}
