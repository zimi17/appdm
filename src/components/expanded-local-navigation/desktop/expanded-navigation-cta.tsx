import React, { FC } from "react";
import { CtaLink, CtaLinkProps } from "../../primitives/cta-link/cta-link";

interface ExpandedNavigationCTAProps extends CtaLinkProps {
  layout: "horizontal" | "vertical";
}

export const ExpandedNavigationCTA: FC<ExpandedNavigationCTAProps> = ({
  layout,
  ...ctaProps
}) => {
  return (
    <div className={`expanded-navigation-cta-${layout} p-4`}> {/* Added padding for visual */} 
      <CtaLink {...ctaProps} type="primary-button" isSmall />
    </div>
  );
};