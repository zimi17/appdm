
'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { backgroundColors } from '@/lib/theme';
import { Byline } from '@/components/primitives/byline/byline';
import { CtaLink } from '@/components/primitives/cta-link/cta-link';
import { MediaAsset } from '@/components/primitives/media-asset/media-asset';
import { type ArticleTopperProps } from './types';
import './article-topper.scss';

const Overline = ({ overline }: { overline?: ArticleTopperProps['overline'] }) => {
  if (!overline?.text) return null;
  const Wrapper = overline.link ? Link : 'span';
  return (
    <Wrapper href={overline.link || ''} className="hbs-overline hbs-article-topper__overline">
      {overline.text}
    </Wrapper>
  );
};

const Subtitle = ({ subtitle }: { subtitle?: ReactNode }) => {
    if (!subtitle) return null;
    return <div className="hbs-article-topper__subheading">{subtitle}</div>
};

export function ArticleTopper({
  title,
  subtitle,
  overline,
  byline,
  isBigArt = false,
  isKnowledgeBase = false,
  mediaAsset,
  theme = 'light',
  cta,
}: ArticleTopperProps) {
  const hasBackground = Object.keys(backgroundColors).includes(theme);

  return (
    <div
      className="hbs-topper-wrapper"
      data-theme={theme}
      style={{ backgroundColor: hasBackground ? backgroundColors[theme as keyof typeof backgroundColors] : undefined }}
    >
      <section
        className={cn('hbs-article-topper', {
          'hbs-article-topper--big-art': isBigArt,
          'hbs-article-topper--knowledge-base': isKnowledgeBase,
        })}
      >
        <div className="hbs-article-topper__content">
            <div className="hbs-article-topper__main">
                <Overline overline={overline} />
                <h1 className="hbs-article-topper__heading hbs-article-topper__heading--long">{title}</h1>
                <Subtitle subtitle={subtitle} />
                <div className="hbs-article-topper__meta">
                    {byline && <Byline {...byline} />}
                </div>
            </div>
            {isKnowledgeBase && cta && (
                <aside className="hbs-article-topper__aside">
                    <CtaLink {...cta} />
                </aside>
            )}
        </div>
        {isBigArt && mediaAsset && (
            <div className="hbs-article-topper__art">
                <MediaAsset {...mediaAsset} />
            </div>
        )}
      </section>
    </div>
  );
}
