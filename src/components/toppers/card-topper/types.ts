import type { CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import type { MediaAssetProps } from "@/components/primitives/media-asset/types";
import type { ReactNode } from "react";

export interface CtaListProps {
    items?: Array<{
      href: string;
      children: ReactNode;
    }>;
}

export interface CardTopperProps {
    type: "Card";
    title: string;
    subtitle?: ReactNode;
    media: MediaAssetProps;
    ctaList?: CtaListProps;
    ctaButton?: CtaLinkProps;
    theme?: "light" | "white" | "dark" | "black" | "crimson";
    spotTheme?: "light" | "white" | "dark" | "black" | "crimson" | "red" | "purple" | "blue";
  }
  