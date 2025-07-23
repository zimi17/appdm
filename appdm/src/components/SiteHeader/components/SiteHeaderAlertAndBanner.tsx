import React, { FC, RefObject } from 'react';
import { SiteHeaderAlert, SiteHeaderAlertProps } from './SiteHeaderAlert';
import { SiteHeaderBanner, SiteHeaderBannerProps } from './SiteHeaderBanner';

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
