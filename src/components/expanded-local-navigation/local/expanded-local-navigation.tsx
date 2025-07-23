import "design-system/components/universal/local-navigation/local-navigation.scss";

import cn from "clsx";
import { CtaLinkProps } from "../../primitives/cta-link/cta-link";
import { Link, LinkProps } from "../../primitives/link/link";
import { MediaAssetProps } from "../../primitives/media-asset/media-asset";
import { NavigationLink } from "../../local-navigation/local-navigation";
import { EditAttributes } from "../types/types";
import { ExpandedDesktopNavigation } from "../desktop/expanded-desktop-navigation";
import { ExpandedMobileNavigation } from "../mobile/expanded-mobile-navigation";

type FeatureLink = NavigationLink & { mediaAsset?: MediaAssetProps };

export interface ExpandedNavigationLinkWithSubItems {
  title?: string;
  featureLinks?: Array<FeatureLink>;
  featureLinksTitle?: string;
  featureCard?: boolean;
  featureDescription?: boolean;
  featureMedia?: boolean;
  menu?: Array<NavigationLink>;
  topLinks?: Array<NavigationLink>;
}

export interface ExpandedNavigationSubMenuProps {
  title?: string;
  pageListOrLinks?: Array<ExpandedNavigationLinkWithSubItems | FeatureLink>;
}

export interface ExpandedLocalNavigationItemProps {
  pageGroups?: Array<ExpandedNavigationSubMenuProps>;
  title: string;
  singleTopLink?: LinkProps;
  layoutType: "horizontal" | "vertical";
  cta?: CtaLinkProps;
}

export interface ExpandedLocalNavigationProps {
  expandedNavigationItems?: Array<ExpandedLocalNavigationItemProps>;
  isHomepage?: boolean;
  isSticky?: boolean;
  sectionTitle?: NavigationLink;
  moreItemsTitle?: string;
  mobileCta?: CtaLinkProps;
  logInOut?: CtaLinkProps;
  isWorkingKnowledge?: boolean;
  editAttributes?: {
    title?: EditAttributes;
  };
}

/**
 * The top navigation in the header of all pages
 *
 * ## How it works
 * On desktop, dropdowns are available on hover if submenu items are present.
 *
 * On mobile, the [Radix Collapsible](https://www.radix-ui.com/docs/primitives/components/collapsible) component is used in conjunction with the [Radix Accordion]((https://www.radix-ui.com/docs/primitives/components/accordion) block. If top level links are provided, the first link in the mobile submenu will automatically be the top level link.
 *
 * ## See it in use on...
 * - A [landing page](/story/example-pages-landing-pages-card-topper--story)
 * - The [homepage](/story/example-pages-homepage--homepage)
 *
 * - **`id: UC-002-001-00`**
 * - **`data-region: uc__local-navigation__sitewide`**
 */
export function ExpandedLocalNavigation({
  expandedNavigationItems,
  isHomepage,
  isSticky = false,
  sectionTitle,
  moreItemsTitle,
  mobileCta,
  logInOut,
  isWorkingKnowledge = false,
  editAttributes,
}: ExpandedLocalNavigationProps) {
  const dataRegion = `uc__local-navigation__${
    isHomepage ? "homepage" : "sitewide"
  }`;

  return (
    <>
      <nav
        className={cn("hbs-local-navigation", "hbs-local-navigation--desktop")}
        aria-label="Primary"
        data-region={dataRegion}
      >
        {!isHomepage && sectionTitle && !isWorkingKnowledge && (
          <div
            className="hbs-local-navigation__section-title"
            aria-hidden={isSticky}
          >
            <Link
              {...editAttributes?.title}
              className="hbs-local-navigation__section-title-link"
              href={sectionTitle.url}
              tabIndex={isSticky ? -1 : 0}
            >
              {sectionTitle.title}
            </Link>
          </div>
        )}

        {expandedNavigationItems && (
          <ExpandedDesktopNavigation
            expandedNavigationItems={expandedNavigationItems}
          />
        )}
      </nav>

      <ExpandedMobileNavigation
        expandedNavigationItems={expandedNavigationItems}
        isHomepage={isHomepage}
        mobileCta={mobileCta}
        logInOut={logInOut}
        moreItemsTitle={moreItemsTitle}
        sectionTitle={sectionTitle}
      />
    </>
  );
}
