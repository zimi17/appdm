import type { CtaLinkProps } from '@/components/primitives/cta-link/cta-link';
import type { CtaListProps } from '@/components/primitives/cta-list/cta-list';
import type { MediaAssetProps } from '@/components/primitives/media-asset/types';
import type { ReactNode } from 'react';
import type { Theme, ExpandedPalette } from '@/lib/theme';
import type { BylineProps } from '@/components/primitives/article-tease/types';

export interface OverlineProps {
    text: string;
    link?: string;
}

export interface SplitTopperProps {
  title: string;
  subtitle?: ReactNode;
  theme?: Exclude<Theme, 'purple' | 'blue'>;
  cta?: CtaLinkProps;
  ctaList?: CtaListProps;
  mediaAsset?: MediaAssetProps;
  isPodcast?: boolean;
  variant?: "article" | "default" | "bulletin";
  overline?: OverlineProps;
  byline?: BylineProps;
  spotTheme?: ExpandedPalette;
}
