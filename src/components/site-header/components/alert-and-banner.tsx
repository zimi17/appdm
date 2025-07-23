import React, { FC, RefObject } from 'react';
import { SiteHeaderAlert, SiteHeaderAlertProps } from '../site-header-alert';
import { SiteHeaderBanner, SiteHeaderBannerProps } from '../site-header-banner';

type SiteHeaderTheme = "light" | "dark"; // Simplified

export interface SiteHeaderAlertAndBannerProps {
  bannerRef?: RefObject<HTMLDivElement>;
  headerAlert?: SiteHeaderAlertProps;
  headerTheme?: SiteHeaderTheme;
  isMenuOpen: boolean;
  headerBanner?: SiteHeaderBannerProps;
}

export const SiteHeaderAlertAndBanner: FC<SiteHeaderAlertAndBannerProps> = ({
  bannerRef,
  isMenuOpen,
  headerAlert,
  headerBanner,
  headerTheme,
}) => {
  return (
    <div ref={bannerRef}>
      {headerAlert && (
        <SiteHeaderAlert
          {...headerAlert}
          parentTheme={headerTheme}
          menuIsOpen={isMenuOpen}
          hasBanner={Boolean(headerBanner)}
        />
      )}
      {headerBanner && <SiteHeaderBanner {...headerBanner} />}
    </div>
  );
};