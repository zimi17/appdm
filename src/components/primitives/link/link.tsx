
'use client';

import NextLink from 'next/link';
import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { isExternalLink } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  const isExternal = isExternalLink(href);
  const isButtonRole = props.role === 'button';

  return (
    <NextLink
      href={href}
      className={cn(className)}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      role={isButtonRole ? 'button' : undefined}
      {...props}
    >
      {children}
    </NextLink>
  );
}
