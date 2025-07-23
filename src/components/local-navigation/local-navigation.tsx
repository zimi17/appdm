import "./local-navigation.scss";

import * as RadixAccordion from "@radix-ui/react-accordion";
import * as Collapsible from "@radix-ui/react-collapsible";
import cn from "clsx";
import { Icon } from "../../icons/icon";
import {
  CtaLink,
  CtaLinkProps,
} from "../primitives/cta-link/cta-link";
import { Link } from "../primitives/link/link";
import { useResizeObserver } from "../../lib/hooks/use-resize-observer";
import { EditAttributes } from "../types/types";
import { usePageProps } from "../hooks/use-page-props";
import { useRef, useState } from "react";
import { getFittingItemsIndex } from "./get-fitting-items-index";
import {
  LocalNavigationItem,
  LocalNavigationItemProps,
} from "./local-navigation-item";

export interface NavigationLink {
  title: string;
  url?: string;
  description?: string;

  editAttributes?: {
    title?: EditAttributes;
  };
}

export interface LocalNavigationProps {
  localNavigationItems?: Array<LocalNavigationItemProps>;
  isHomepage?: boolean;
  isWorkingKnowledge?: boolean;
  isSticky?: boolean;
  sectionTitle?: NavigationLink;
  moreItemsTitle?: string;
  mobileCta?: CtaLinkProps;
  logInOut?: CtaLinkProps;

  editAttributes?: {
    title?: EditAttributes;
    moreItemsTitle?: EditAttributes;
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
export function LocalNavigation({
  localNavigationItems,
  isHomepage,
  isWorkingKnowledge,
  isSticky = false,
  sectionTitle,
  moreItemsTitle,
  mobileCta,
  logInOut,
  editAttributes,
}: LocalNavigationProps) {
  const { entry } = usePageProps();
  const currentPageUrl = (entry as AppUrlEntry)?.fields?.url;
  const items = Array.isArray(localNavigationItems) ? localNavigationItems : [];
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [accordionValue, setRadixAccordionValue] = useState<Array<string>>();
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null,
  );

  const listRef = useRef<HTMLUListElement | null>(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const moreItemRef = useRef<HTMLLIElement | null>(null);

  let { width: listWidth } = useResizeObserver(listRef);

  /**
   * Reduce list width by the width of the buttons and section title
   * so that list will not overlap with them.
   */
  if (isSticky) {
    listWidth =
      listWidth -
      (buttonsRef?.current?.offsetWidth || 0) -
      (sectionTitleRef?.current?.offsetWidth || 0);
  }

  const onRadixAccordionValueChange = (newValue: Array<string>) => {
    setRadixAccordionValue(newValue);
  };

  const dataRegion = `uc__local-navigation__${
    isHomepage ? "homepage" : "sitewide"
  }`;

  // Render the whole list on first render (when width will be 0) to avoid flashing empty list.
  // There will still be a flash if the whole list can't fit, but it should happen less often.

  const moreIndex =
    listWidth === 0
      ? items.length
      : getFittingItemsIndex(
          listWidth,
          itemsRef.current.map((el) => (el ? el.offsetWidth : 0)),
          moreItemRef.current?.offsetWidth,
        );

  const hasLocalNavigationItems = items.length > 0;

  // Helper function to normalize URLs for comparison
  const normalizeUrl = (url = "") => {
    return url.replace(/^(?:https?:\/\/)?(?:[^/]+)/, "");
  };

  const normalizedCurrentUrl = normalizeUrl(currentPageUrl);

  return (
    <>
      {/* DESKTOP */}
      <nav
        className={cn(
          "hbs-local-navigation",
          "hbs-local-navigation--desktop",
          isHomepage && "hbs-local-navigation--homepage",
        )}
        aria-label="Primary"
        data-region={dataRegion}
      >
        {!isHomepage && sectionTitle && !isWorkingKnowledge && (
          <div
            className={cn(
              "hbs-local-navigation__section-title",
              !hasLocalNavigationItems &&
                "hbs-local-navigation__section-title--with-border",
            )}
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

        {hasLocalNavigationItems && (
          <ul className="hbs-local-navigation__items" ref={listRef}>
            {items.map((item, i) => {
              const normalizedItemUrl = normalizeUrl(item.url);
              const normalizedSubmenuUrls = item.submenu?.map((submenuItem) =>
                normalizeUrl(submenuItem.url),
              );
              return (
                <LocalNavigationItem
                  {...item}
                  key={i}
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  isCurrent={normalizedItemUrl === normalizedCurrentUrl}
                  isCurrentSubmenu={normalizedSubmenuUrls?.includes(
                    normalizedCurrentUrl,
                  )}
                  isDropdownOpen={activeDropdownIndex === i && i < moreIndex}
                  showDropdown={() => setActiveDropdownIndex(i)}
                  hideDropdown={() => setActiveDropdownIndex(null)}
                  isHidden={i >= moreIndex || item.mobileOnly}
                />
              );
            })}

            <LocalNavigationItem
              ref={moreItemRef}
              title="More"
              submenu={
                moreIndex < items.length
                  ? items
                      .slice(moreIndex, items.length)
                      .map((item) => ({ title: item.title, url: item.url }))
                  : [{ title: "More" }]
              }
              isDropdownOpen={activeDropdownIndex === moreIndex}
              showDropdown={() => setActiveDropdownIndex(moreIndex)}
              hideDropdown={() => setActiveDropdownIndex(null)}
              isHidden={moreIndex >= items.length}
            />
          </ul>
        )}
      </nav>

      {/* MOBILE */}
      {((!isHomepage && sectionTitle) || isWorkingKnowledge) && (
        <Collapsible.Root
          className="hbs-local-navigation--mobile"
          data-region={dataRegion}
        >
          <div className="hbs-local-navigation__accordion-header">
            {sectionTitle && (
              <div className="hbs-local-navigation__accordion-header-title">
                <Link
                  className="hbs-local-navigation__accordion-header-title__link"
                  href={sectionTitle.url}
                >
                  {sectionTitle.title}
                </Link>
              </div>
            )}
            <Collapsible.Trigger className="hbs-local-navigation__accordion-header-button">
              <span
                {...editAttributes?.moreItemsTitle}
                className="hbs-local-navigation__accordion-header-button-label"
              >
                {moreItemsTitle ? moreItemsTitle : "More"}
              </span>
            </Collapsible.Trigger>
          </div>
          <Collapsible.CollapsibleContent className="hbs-local-navigation__accordion-menu">
            <RadixAccordion.Root
              type="multiple"
              value={accordionValue}
              onValueChange={onRadixAccordionValueChange}
            >
              {items.map((item, i) =>
                item.submenu ? (
                  <RadixAccordion.Item
                    key={i}
                    className="hbs-local-navigation__accordion-item"
                    value={`accordion-item-${i + 1}`}
                  >
                    <RadixAccordion.Header className="hbs-local-navigation__accordion-item-header">
                      <RadixAccordion.Trigger className="hbs-local-navigation__accordion-item-trigger">
                        <span className="hbs-local-navigation__accordion-item-trigger-label">
                          {item.title}
                        </span>
                        <span className="hbs-local-navigation__accordion-item-trigger-icon">
                          <Icon
                            name={
                              accordionValue?.includes(
                                `accordion-item-${i + 1}`,
                              )
                                ? "minus"
                                : "plus"
                            }
                          />
                        </span>
                      </RadixAccordion.Trigger>
                    </RadixAccordion.Header>
                    <RadixAccordion.Content className="hbs-local-navigation__accordion-submenu">
                      <ul>
                        {item.url && (
                          <li className="hbs-local-navigation__accordion-submenu-item">
                            <Link
                              href={item.url}
                              className="hbs-local-navigation__accordion-submenu-item-link"
                            >
                              {item.title}
                            </Link>
                          </li>
                        )}
                        {item.submenu.map((link, j) => (
                          <li
                            key={j}
                            className="hbs-local-navigation__accordion-submenu-item"
                          >
                            <Link
                              href={link.url}
                              className="hbs-local-navigation__accordion-submenu-item-link"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </RadixAccordion.Content>
                  </RadixAccordion.Item>
                ) : (
                  <div key={i} className="hbs-local-navigation__accordion-item">
                    <div className="hbs-local-navigation__accordion-item-header">
                      <Link
                        className="hbs-local-navigation__accordion-item-trigger"
                        href={item.url}
                      >
                        <span className="hbs-local-navigation__accordion-item-trigger-label">
                          {item.title}
                        </span>
                      </Link>
                    </div>
                  </div>
                ),
              )}
            </RadixAccordion.Root>
            {mobileCta && (
              <CtaLink
                {...mobileCta}
                type="primary-button"
                className="hbs-local-navigation__mobile-cta"
              >
                {mobileCta.children}
              </CtaLink>
            )}
            {logInOut?.children && (
              <CtaLink
                {...logInOut}
                type="primary-button"
                className="hbs-local-navigation__mobile-cta"
              >
                {logInOut.children}
              </CtaLink>
            )}
          </Collapsible.CollapsibleContent>
        </Collapsible.Root>
      )}
    </>
  );
}
