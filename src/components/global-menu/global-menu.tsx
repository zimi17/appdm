import React from 'react';
import { GlobalMenuNav, GlobalMenuNavMainProps } from './global-menu-nav';
import { GlobalMenuList } from './global-menu-list';
import { GlobalMenuNavItem } from './global-menu-item';

export interface GlobalMenuProps extends GlobalMenuNavMainProps {
  items?: Array<GlobalMenuNavItem>;
}

export function GlobalMenu({ items, socialLinks, ...props }: GlobalMenuProps) {
  if (!Array.isArray(items)) items = [];

  return (
    <GlobalMenuNav socialLinks={socialLinks} {...props}>
      <GlobalMenuList items={items} isVisible={props.open} />
    </GlobalMenuNav>
  );
}