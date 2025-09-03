"use client";

import { useState } from "react";
import { SanitySiteSettings, SanityNavigation } from "@/lib/sanity-queries";
import { GlobalMenu } from "../global-menu/global-menu";

// Import modular components
import { SiteHeaderWrapper } from "./components/site-header-wrapper";
import { SiteHeaderLogo } from "./components/site-header-logo";
import { SiteHeaderNavigation } from "./components/site-header-navigation";
import { SiteHeaderButtons } from "./components/site-header-buttons";
import { SiteHeaderAlert } from "./site-header-alert";
import { SiteHeaderBanner } from "./site-header-banner";
import { SiteHeaderSectionTitle } from "./components/site-header-section-title";
import { SiteHeaderWorkingKnowledgeTitle } from "./components/site-header-working-knowledge-title";

interface SiteHeaderProps {
  siteSettings: SanitySiteSettings | null;
  navigation: SanityNavigation | null;
  
  // Layout options
  variant?: "default" | "minimal" | "hero" | "section";
  theme?: "light" | "dark" | "white" | "black" | "crimson" | "purple" | "blue" | "red";
  
  // Component visibility
  showAlert?: boolean;
  showBanner?: boolean;
  showNavigation?: boolean;
  showSearch?: boolean;
  showCTA?: boolean;
  
  // Section/Hero specific
  sectionTitle?: string;
  sectionSubtitle?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
  heroTitle?: string;
  heroSubtitle?: string;
  heroHighlight?: string;
  
  // Customization
  className?: string;
  sticky?: boolean;
  enableBlur?: boolean;
}

export function SiteHeader({
  siteSettings,
  navigation,
  variant = "default",
  theme = "dark",
  showAlert = true,
  showBanner = false,
  showNavigation = true,
  showSearch = true,
  showCTA = true,
  sectionTitle,
  sectionSubtitle,
  breadcrumb,
  heroTitle,
  heroSubtitle,
  heroHighlight,
  className,
  sticky = true,
  enableBlur = true
}: SiteHeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Global Alert (optional) */}
      {showAlert && variant !== "minimal" && (
        <SiteHeaderAlert siteSettings={siteSettings} />
      )}

      {/* Banner (optional) */}
      {showBanner && variant !== "minimal" && (
        <SiteHeaderBanner />
      )}

      {/* Hero Title (for hero variant) */}
      {variant === "hero" && heroTitle && (
        <SiteHeaderWorkingKnowledgeTitle
          title={heroTitle}
          subtitle={heroSubtitle}
          highlight={heroHighlight}
        />
      )}

      {/* Main Header */}
      <SiteHeaderWrapper
        theme={theme}
        sticky={sticky}
        enableBlur={enableBlur}
        className={className}
        dataSanity={siteSettings?._id ? `siteSettings=${siteSettings._id}` : undefined}
      >
        <div className="flex justify-between items-center h-full">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center flex-1">
            <SiteHeaderLogo />
            {showNavigation && variant !== "minimal" && (
              <SiteHeaderNavigation siteSettings={siteSettings} />
            )}
          </div>

          {/* Right side: Action Buttons */}
          <SiteHeaderButtons
            siteSettings={siteSettings}
            onMenuOpen={setIsNavOpen}
            showSearch={showSearch}
            showAlert={variant === "minimal"} // Show alert in buttons for minimal variant
            showCTA={showCTA}
          />
        </div>
      </SiteHeaderWrapper>

      {/* Section Title (for section variant) */}
      {variant === "section" && sectionTitle && (
        <SiteHeaderSectionTitle
          title={sectionTitle}
          subtitle={sectionSubtitle}
          breadcrumb={breadcrumb}
        />
      )}

      {/* Global Menu */}
      <GlobalMenu 
        navigation={navigation} 
        isOpen={isNavOpen} 
        onOpenChange={setIsNavOpen} 
      />
    </>
  );
}
