
'use client';

import "./cta-link.scss";
import { MouseEvent, ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "../link/link";
import { isDocumentLink } from "@/lib/utils";
import { isExternalLink } from "@/lib/utils";
import type { IconName } from "../icon/icon";
import { Icon } from "../icon/icon";


export type CtaLinkType = "primary-button" | "secondary-button" | "link";

export interface CtaLinkProps {
  children?: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: CtaLinkType;
  className?: string;
  isSmall?: boolean;
  isNested?: boolean;
  icon?: IconName;
  hideIcon?: boolean;
  "aria-label"?: string;
  id?: string;
  "aria-selected"?: boolean;
  "aria-describedby"?: string;
  tabIndex?: number;
}

export const CtaLink = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  CtaLinkProps
>(
  (
    {
      children,
      className,
      href,
      onClick,
      type = "link",
      isSmall,
      isNested,
      icon,
      hideIcon,
      "aria-label": ariaLabel,
      "aria-selected": ariaSelected,
      "aria-describedby": ariaDescribedBy,
      id,
      tabIndex,
    },
    ref,
  ) => {
    let isExternal: boolean | undefined;

    if (href) {
      isExternal = isExternalLink(href);
    }

    if (!icon && href) {
      icon = isDocumentLink(href) ? "Download" : "ArrowRight";
    }

    const ctaClassNames = cn(
      "hbs-cta-link",
      isSmall && "hbs-cta-link--small",
      `hbs-cta-link--${type}`,
      isNested ? "hbs-cta-link--nested" : "",
      className,
    );

    const iconClassNames = cn(
      "hbs-cta-link__icon",
      `hbs-cta-link__icon--${icon?.toLowerCase() || ""}`,
      isExternal && "hbs-cta-link__icon--external",
    );

    let lastWord;
    let firstWords;
    if (typeof children === "string") {
      const words = children.trim().split(" ");
      lastWord = words.pop();
      firstWords = words.join(" ");
    }
    
    const IconComponent = icon === 'Download' ? Download : ArrowRight;

    const withoutSplitWords = (
      <span className="hbs-cta-link__text-nowrap">
        <span className="hbs-cta-link__text">{children}</span>
        {!hideIcon && icon && <IconComponent className={iconClassNames} />}
      </span>
    );

    const commonProps = {
      className: ctaClassNames,
      ref,
      id,
      "aria-selected": ariaSelected,
      "aria-describedby": ariaDescribedBy,
      "aria-label": ariaLabel,
      tabIndex,
    };

    if (onClick) {
      return (
        <button {...commonProps} onClick={onClick}>
          {withoutSplitWords}
        </button>
      );
    }

    if (
      typeof children !== "string" ||
      type === "primary-button" ||
      type === "secondary-button"
    ) {

      return (
        <Link
          {...commonProps}
          href={href || '#'}
        >
          {withoutSplitWords}
        </Link>
      );
    }

    const withSplitWords = (
      <span className="hbs-cta-link__text">
        {firstWords}{" "}
        <span className="hbs-cta-link__text-last">
          {lastWord}
          {!hideIcon && icon && <IconComponent className={iconClassNames} />}
        </span>
      </span>
    );

    if (isNested) {
      return (
        <span
          id={id}
          aria-describedby={ariaDescribedBy}
          className={ctaClassNames}
        >
          {withSplitWords}
        </span>
      );
    }

    return (
      <Link
        {...commonProps}
        href={href || '#'}
        aria-label={
          typeof children === "string" ? ariaLabel || children : undefined
        }
      >
        {withSplitWords}
      </Link>
    );
  },
);
CtaLink.displayName = "CtaLink";
