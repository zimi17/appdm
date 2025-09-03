
import type { CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import type { MediaAssetProps } from "@/components/primitives/media-asset/types";
import type { ReactNode } from "react";
import { Theme } from "@/lib/theme";

export interface SimplePageTopperProps {
  title: string;
  intro?: ReactNode;
  theme?: Exclude<Theme, 'purple' | 'blue'>;
  cta?: CtaLinkProps;
  media?: MediaAssetProps;
  hiddenTitle?: string;
}
