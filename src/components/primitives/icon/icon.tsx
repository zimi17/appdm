
'use client';

import * as React from 'react';
import * as Icons from '@/components/icons';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
}

export function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <IconComponent
      className={cn('h-5 w-5', className)}
      {...props}
    />
  );
}
