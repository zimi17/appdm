import "./cta-list.scss";

import cn from "clsx";
import {
  CtaLink,
  CtaLinkProps,
} from "design-system/components/primitives/cta-link/cta-link";

export interface CtaListProps {
  items?: Array<CtaLinkProps>;
  className?: string;
  label?: string;
  hideIcon?: boolean;
  HeadingLevel?: "h2" | "p";
}

/**
 * ## See it in use on...
 * - The [kitchen sink detail page](/story/example-pages-detail-pages-kitchen-sink--story)
 *
 * - **`id: P-010-000-10`**
 */
export function CtaList({
  items,
  className,
  label,
  hideIcon = false,
  HeadingLevel = "p",
}: CtaListProps) {
  if (!items) return null;
  const globalHideIcon = hideIcon;

  return (
    <>
      {label && (
        <HeadingLevel className="hbs-cta-list-label">{label}</HeadingLevel>
      )}
      <ul className={cn("hbs-cta-list", className)}>
        {items.map(
          ({ children, className, href, editAttributes, hideIcon }, i) => {
            return (
              <li
                key={i}
                {...editAttributes}
                className={cn("hbs-cta-list-item", className)}
              >
                <CtaLink
                  className="hbs-cta-list-item__link"
                  href={href}
                  hideIcon={globalHideIcon || hideIcon}
                >
                  {children}
                </CtaLink>
              </li>
            );
          },
        )}
      </ul>
    </>
  );
}
