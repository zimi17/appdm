import type { CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import type { MediaAssetProps } from "@/components/primitives/media-asset/types";
import type { ReactNode } from "react";
import type { Theme } from "@/lib/theme";

export interface MediaTopperProps {
  title: string;
  subtitle?: ReactNode;
  assets: MediaAssetProps[];
  cta?: CtaLinkProps;
  theme?: Theme;
  isSeamless?: boolean;
  hiddenTitle?: string;
}
