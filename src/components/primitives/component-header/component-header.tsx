import "./component-header.scss";

import { ReactNode } from "react";
import cn from "clsx";
import { Alignment, EditAttributes, Position } from "design-system/types/types";
import { CtaLink } from "design-system/components/primitives/cta-link/cta-link";
import { slugify } from "design-system/utils/slugify";

export type BorderPosition = Exclude<Position, "right" | "left">;

export interface ComponentHeaderProps {
  align?: Alignment;
  description?: ReactNode;
  isSmall?: boolean;
  link?: string;
  linkText?: string;
  ariaLabel?: string;
  title?: string;
  className?: string;
  anchored?: boolean;
  borderPosition?: BorderPosition;
  HeadingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  titleId?: string;

  editAttributes?: {
    title?: EditAttributes;
    description?: EditAttributes;
    linkText?: EditAttributes;
  };
}

/**
 * Header for various components
 *
 * ## See it in use on...
 * - The [big style grid list component](/story/content-components-blocks-grid-lists-big-style--with-media-and-header)
 *
 * - **`id: P-009-000-00`**
 */
export function ComponentHeader({
  align,
  className,
  description,
  isSmall = true,
  link,
  linkText,
  ariaLabel,
  title,
  anchored,
  borderPosition = "top",
  HeadingLevel = "h2",
  editAttributes,
}: ComponentHeaderProps) {
  if (!title) return null;

  const ctaLink = link ? (
    <CtaLink
      editAttributes={editAttributes?.linkText}
      href={link}
      aria-label={ariaLabel}
      isSmall
    >
      {linkText}
    </CtaLink>
  ) : null;

  return (
    <div
      className={cn(
        align && `hbs-global-align-${align}`,
        className,
        "hbs-component--component-header",
      )}
    >
      <div
        className={cn(
          "hbs-component-header",
          `hbs-component-header--${isSmall ? "small" : "large"}`,
          !isSmall && anchored && "hbs-component-header--anchored",
          !isSmall &&
            borderPosition === "bottom" &&
            `hbs-component-header--border-${borderPosition}`,
          isSmall && `hbs-component-header--border-${borderPosition}`,
        )}
      >
        <div className="hbs-component-header__inner">
          <div className="hbs-component-header__wrapper">
            <HeadingLevel
              className="hbs-component-header__title"
              id={slugify(title)}
              {...editAttributes?.title}
            >
              {title}
            </HeadingLevel>

            {description && (
              <span
                {...editAttributes?.description}
                className={"hbs-component-header__description"}
              >
                {description}
              </span>
            )}
          </div>

          {ctaLink &&
            (isSmall ? (
              ctaLink
            ) : (
              <div className={"hbs-component-header__cta"}>{ctaLink}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
