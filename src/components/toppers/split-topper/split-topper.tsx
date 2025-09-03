
'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { CtaLink, CtaLinkProps } from '@/components/primitives/cta-link/cta-link';
import { CtaList } from '@/components/primitives/cta-list/cta-list';
import { MediaAsset } from '@/components/primitives/media-asset/media-asset';
import { cn } from '@/lib/utils';
import { type SplitTopperProps, type OverlineProps } from './types';
import { backgroundColors } from '@/lib/theme';
import { Byline } from '@/components/primitives/byline/byline';
import './split-topper.scss';

const Title = ({ title }: { title?: ReactNode }) => {
  if (!title) return null;
  return <h1 className="hbs-split-topper__title hbs-split-topper__title--long">{title}</h1>;
};

const Subtitle = ({ subtitle }: { subtitle?: ReactNode }) => {
  if (!subtitle) return null;
  return <div className="hbs-split-topper__subtitle">{subtitle}</div>;
};

const Cta = ({ cta, ctaList }: { cta?: CtaLinkProps, ctaList?: CtaListProps }) => {
  if (!cta && !ctaList?.items) return null;
  return (
    <div className="hbs-split-topper__cta">
      {cta && <CtaLink {...cta} />}
      {ctaList && ctaList.items && <CtaList items={ctaList.items} />}
    </div>
  );
};

const Overline = ({ overline }: { overline?: OverlineProps }) => {
    if (!overline?.text) return null;
    return (
      <Link href={overline.link || '#'} className="hbs-split-topper__overline">
        {overline.text}
      </Link>
    );
  };

export function SplitTopper({
  title,
  subtitle,
  theme = 'light',
  cta,
  ctaList,
  mediaAsset,
  isPodcast,
  variant = 'default',
  byline,
  overline,
  spotTheme,
}: SplitTopperProps) {
  const bgColor = spotTheme ? backgroundColors[spotTheme as keyof typeof backgroundColors] : backgroundColors[theme];

  return (
    <div
      className={cn("hbs-split-topper-wrapper hbs-topper-wrapper")}
      data-theme={theme}
      style={{
        '--topper-bg-color': bgColor || 'transparent',
      } as React.CSSProperties}
    >
      <div className="hbs-split-topper">
        <div className="hbs-split-topper__content">
          <div className="hbs-split-topper__content-child">
            {variant === 'article' && <Overline overline={overline} />}
            <Title title={title} />
            {variant === 'article' && byline && <div className="hbs-split-topper__byline"><Byline {...byline} /></div>}
            <Subtitle subtitle={subtitle} />
            <Cta cta={cta} ctaList={ctaList} />
          </div>
        </div>
        <div className={cn("hbs-split-topper__media-podcast", { 'aspect-square': isPodcast })}>
          {mediaAsset && <MediaAsset {...mediaAsset} />}
        </div>
      </div>
    </div>
  );
}
