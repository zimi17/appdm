import React, { ReactNode, useRef, useState } from "react";
import { useSetSticky } from "./components/use-set-sticky";

import { SiteHeaderWrapper } from "./components/site-header-wrapper";
import { SiteHeaderLogo } from "./components/site-header-logo";
import { SiteHeaderButtons, SiteHeaderButtonsProps } from "./components/site-header-buttons";
import { SiteHeaderSectionTitle, SiteHeaderSectionTitleProps } from "./components/site-header-section-title";
import { SiteHeaderWorkingKnowledgeTagline } from "./components/site-header-working-knowledge-tagline";
import { SiteHeaderWorkingKnowledgeTitle } from "./components/site-header-working-knowledge-title";
import { SiteHeaderAlertAndBanner, SiteHeaderAlertAndBannerProps } from "./components/alert-and-banner";

import { LocalNavigation, LocalNavigationProps } from "../local-navigation/local-navigation";
import { GlobalMenu, GlobalMenuProps } from "../global-menu/global-menu";
import globalMenuData from "../../data/globalMenuData";

export interface SiteHeaderCta {
  link?: string;
  text?: string;
  hideIcon?: boolean;
}

// Menggunakan tipe yang lebih spesifik, diimpor dari komponen anak
export interface SiteHeaderProps {
  isHomepage?: boolean;
  isWorkingKnowledge?: boolean;
  sectionTitle?: SiteHeaderSectionTitleProps["sectionTitle"];
  headerAlert?: SiteHeaderAlertAndBannerProps["headerAlert"];
  headerBanner?: SiteHeaderAlertAndBannerProps["headerBanner"];
  globalMenu?: GlobalMenuProps;
  cta?: SiteHeaderCta;
  logoLink?: string;
  position?: "fixed" | "sticky" | "relative";
  searchLink?: string;
  hasSearchOverlay?: boolean;
  search?: Record<string, unknown>;
  moreItemsTitle?: string;
  workingKnowledgeTagline?: string;
  workingKnowledgeTitleLink?: string;
  editAttributes?: LocalNavigationProps["editAttributes"];
  isMinimalHeader?: boolean;
  siteType?: string;
  logInOut?: SiteHeaderCta; // Menggunakan tipe SiteHeaderCta agar konsisten
  subscribeLink?: string;
  domain?: string;
  localNavigationItems?: LocalNavigationProps["localNavigationItems"];
  expandedNavigationItems?: Record<string, unknown>[];
  socialLinks?: Record<string, unknown>[];
}

export function SiteHeader({
  isHomepage = false,
  isWorkingKnowledge = false,
  sectionTitle,
  headerAlert,
  headerBanner,
  globalMenu,
  cta,
  logoLink,
  position = "sticky",
  searchLink,
  hasSearchOverlay = false,
  search,
  moreItemsTitle,
  workingKnowledgeTagline,
  workingKnowledgeTitleLink,
  editAttributes,
  isMinimalHeader = false,
  siteType,
  logInOut,
  subscribeLink,
  domain,
  localNavigationItems,
  expandedNavigationItems,
  socialLinks,
}: SiteHeaderProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const hasAlert = headerAlert !== undefined;
  const siteTypeOption = siteType === "internal" ? "internal" : "external";

  const isSticky = useSetSticky({
    defaultValue: false,
    isWorkingKnowledge,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerTheme =
    isMenuOpen || (isSticky && position === "sticky") ? "dark" : "light";

  let dataRegion = "uc__site-header" + (isHomepage ? "__homepage" : "__sitewide");
  if (hasAlert) dataRegion += "__alert-banner";

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleDeactivate() {
    setIsMenuOpen(false);
  }

  function closeMenuOnSearchOverlayOpen() {
    if (isMenuOpen) {
      handleDeactivate();
    }
  }

  return (
    <>
      <a href="#skipto-main" className="sr-only focus:not-sr-only">
        Skip to Main Content
      </a>
      <span data-region={dataRegion}>
        <SiteHeaderWrapper
          sticky={isSticky}
          position={position}
          isMenuOpen={isMenuOpen}
          hasAlert={hasAlert}
          isWorkingKnowledge={isWorkingKnowledge}
          isMinimalHeader={isMinimalHeader}
          isHomepage={isHomepage}
          headerTheme={headerTheme}
          domain={domain}
        >
          <SiteHeaderAlertAndBanner
            headerAlert={headerAlert}
            headerBanner={headerBanner}
            isMenuOpen={isMenuOpen}
            bannerRef={bannerRef}
            headerTheme={headerTheme}
          />

          <div className="container mx-auto flex items-center justify-between p-4">
            <SiteHeaderLogo
              logoLink={logoLink}
              headerTheme={headerTheme}
            />

            {!isHomepage && sectionTitle && !isWorkingKnowledge && (
              <SiteHeaderSectionTitle
                editAttributes={editAttributes}
                sectionTitle={sectionTitle}
              />
            )}

            {isWorkingKnowledge && (
              <SiteHeaderWorkingKnowledgeTitle
                workingKnowledgeTitleLink={workingKnowledgeTitleLink}
              />
            )}

            {!isMenuOpen && !isWorkingKnowledge && (
              <LocalNavigation
                moreItemsTitle={moreItemsTitle}
                localNavigationItems={localNavigationItems}
                isHomepage={isHomepage}
                isSticky={isSticky}
                sectionTitle={sectionTitle}
                editAttributes={editAttributes}
                mobileCta={{ href: cta?.link, children: cta?.text }}
                logInOut={{ href: logInOut?.link, children: logInOut?.text }}
                isWorkingKnowledge={isWorkingKnowledge}
              />
            )}

            {isWorkingKnowledge && !isMenuOpen && (
              <SiteHeaderWorkingKnowledgeTagline
                workingKnowledgeTagline={workingKnowledgeTagline}
                workingKnowledgeTitleLink={workingKnowledgeTitleLink}
              />
            )}

            <SiteHeaderButtons
              logInOut={logInOut}
              cta={cta}
              closeMenuOnSearchOverlayOpen={closeMenuOnSearchOverlayOpen}
              hasSearchOverlay={hasSearchOverlay}
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              searchLink={searchLink}
              search={search}
              siteTypeOption={siteTypeOption}
              globalMenu={globalMenu}
              subscribeLink={subscribeLink}
            />
          </div>
        </SiteHeaderWrapper>

        {globalMenu && (
          <GlobalMenu
            items={globalMenu.items}
            open={isMenuOpen}
            socialLinks={socialLinks}
            numBanners={
              headerAlert && headerBanner
                ? 2
                : headerAlert || headerBanner
                ? 1
                : undefined
            }
          />
        )}
      </span>
    </>
  );
}