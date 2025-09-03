
import type { CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import type { BylineProps } from "@/components/primitives/article-tease/types";
import type { MediaAssetProps } from "@/components/primitives/media-asset/types";
import type { ReactNode } from "react";
import type { Theme } from "@/lib/theme";

export interface OverlineProps {
    text: string;
    link?: string;
}

export interface ArticleTopperProps {
    title: string;
    subtitle?: ReactNode;
    overline?: OverlineProps;
    byline?: BylineProps;
    isBigArt?: boolean;
    isKnowledgeBase?: boolean;
    mediaAsset?: MediaAssetProps;
    theme?: Theme;
    cta?: CtaLinkProps;
    mediaHighlightCaption?: ReactNode;
}
