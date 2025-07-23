import React, { AnchorHTMLAttributes, forwardRef, MouseEventHandler } from "react";

// Simplified LinkProps without design-system or dataLayer specific types
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  // editAttributes?: any; // Removed as it's design-system specific
  // dataLayer?: any; // Removed as it's design-system specific
  // dataParentTitle?: string; // Removed as it's design-system specific
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      target,
      children,
      className,
      rel,
      onClick,
      // editAttributes, // Removed
      // dataLayer, // Removed
      ...props
    },
    ref,
  ) => {
    let effectiveTarget = target;
    let effectiveRel = rel;

    // Simplified target logic: _blank for external links, _self for internal
    if (href) {
      const isExternal = !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:');
      if (isExternal) {
        effectiveTarget = "_blank";
        effectiveRel = "noopener noreferrer"; // Recommended for security with _blank
      } else {
        effectiveTarget = "_self";
      }
    }

    const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      // DataLayer logic removed as per previous discussion
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <a
        href={href}
        target={effectiveTarget}
        className={className}
        rel={effectiveRel}
        {...props}
        ref={ref}
        onClick={handleOnClick}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
