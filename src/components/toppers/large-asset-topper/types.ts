import type { CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import type { MediaAssetProps } from "@/components/primitives/media-asset/types";
import type { ReactNode } from "react";
import type { ExpandedPalette } from "@/lib/theme";

export interface CtaListProps {
    items?: Array<{
      href: string;
      children: ReactNode;
    }>;
}

export interface OverlineProps {
    text: string;
    link?: string;
}

export interface LargeAssetTopperProps {
    title: string;
    subtitle?: ReactNode;
    overline?: OverlineProps;
    asset: MediaAssetProps;
    ctaList?: CtaListProps;
    ctaButton?: CtaLinkProps;
    spotTheme?: ExpandedPalette;
    hiddenTitle?: string;
}
