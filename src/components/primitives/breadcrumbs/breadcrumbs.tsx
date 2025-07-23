import "./breadcrumbs.scss";

import { useState } from "react";
import { BreadcrumbsItem, BreadcrumbsItemProps } from "./breadcrumbs-item";
import { useBreakpoint } from "design-system/hooks/use-breakpoint";
import {
  SimpleTheme,
  defaultPageSectionTheme,
} from "design-system/utils/theme";
import { Icon } from "design-system/components/icons/icon";

export interface BreadcrumbsProps {
  breadcrumbs: Array<BreadcrumbsItemProps>;
  theme?: SimpleTheme;
  rootLink?: string;
  siteType?: string;
}

/**
 * ## See it in use on...
 * - A [detail page](/story/example-pages-detail-pages-advancing-racial-equity-diversity-action--story)
 *
 * - **`id: P-007-000-00`**
 */
export function Breadcrumbs({
  breadcrumbs,
  theme = defaultPageSectionTheme,
  rootLink = "/",
  siteType,
}: BreadcrumbsProps) {
  const { isMobile, isTablet, isDesktop } = useBreakpoint({ isMobile: true });
  const [isExpanded, setIsExpanded] = useState(false);

  if (!breadcrumbs || breadcrumbs.length < 1) {
    return null;
  }

  const homeLabel =
    siteType === "internal" ? "myHBS" : "Harvard Business School";
  const homeLabelMobile = siteType === "internal" ? "myHBS" : "HBS";

  const formattedBreadcrumbs: Array<BreadcrumbsItemProps> = [
    {
      link: rootLink,
      title: isMobile ? homeLabelMobile : homeLabel,
    },
    ...breadcrumbs,
  ];

  breadcrumbs.unshift();

  const smallScreensSplitIndex = isDesktop
    ? formattedBreadcrumbs.length
    : isTablet
      ? 4
      : 2;
  const isTruncated =
    smallScreensSplitIndex + 1 < formattedBreadcrumbs.length && !isExpanded;

  return (
    <div className="hbs-breadcrumbs__wrapper noindex" data-theme={theme}>
      <nav className="hbs-breadcrumbs" aria-label="Breadcrumbs">
        <div className="hbs-breadcrumbs__content">
          <ol className="hbs-breadcrumbs__list">
            {isTruncated ? (
              <li className="hbs-breadcrumbs-item">
                <button
                  className="hbs-breadcrumbs-item__link"
                  aria-label="Show more"
                  onClick={() => {
                    setIsExpanded(true);
                  }}
                >
                  ...
                </button>
                <Icon name="caret" />
              </li>
            ) : null}
            {(isTruncated
              ? formattedBreadcrumbs.slice(
                  formattedBreadcrumbs.length - smallScreensSplitIndex,
                  formattedBreadcrumbs.length,
                )
              : formattedBreadcrumbs
            ).map((item, i) => (
              <BreadcrumbsItem {...item} key={i} />
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
}
