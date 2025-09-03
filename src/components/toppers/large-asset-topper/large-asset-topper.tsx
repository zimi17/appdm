
'use client';
import Link from "next/link";
import { CtaList } from "@/components/primitives/cta-list/cta-list";
import { MediaAsset } from "@/components/primitives/media-asset/media-asset";
import { cn } from "@/lib/utils";
import { type LargeAssetTopperProps } from "./types";
import { expandedPalette, getLargeAssetTopperTheme } from "@/lib/theme";
import "./large-asset-topper.scss";
import { ReactNode } from "react";

function Overline({ overline }: { overline?: { text: string; link?: string } }) {
    if (!overline?.text) return null;
    if (overline.link) {
      return (
        <Link href={overline.link} className="hbs-overline hbs-large-asset-topper__overline">
          {overline.text}
        </Link>
      );
    }
    return <span className="hbs-overline hbs-large-asset-topper__overline">{overline.text}</span>;
}

function Subtitle({ subtitle }: { subtitle?: ReactNode }) {
    if (!subtitle) return null;
    return <div className="hbs-large-asset-topper__subtitle">{subtitle}</div>
}

export function LargeAssetTopper({
  title,
  subtitle,
  overline,
  asset,
  ctaList,
  spotTheme = 'light',
  hiddenTitle,
}: LargeAssetTopperProps) {

  const theme = getLargeAssetTopperTheme(spotTheme);
  const backgroundColor = expandedPalette[spotTheme] || expandedPalette.light;

  return (
    <div 
        className="hbs-topper-wrapper hbs-large-asset-topper-wrapper" 
        data-theme={theme}
        style={{ backgroundColor }}
    >
      <div className="hbs-topper hbs-large-asset-topper">
        <div className="hbs-large-asset-topper__content">
            <Overline overline={overline} />
            <h1 className="hbs-large-asset-topper__title hbs-large-asset-topper__title--short">
                {title}
            </h1>
            <Subtitle subtitle={subtitle} />
            {ctaList?.items && (
                <div className="hbs-large-asset-topper__cta">
                    <div className="hbs-large-asset-topper__cta-list">
                         <CtaList items={ctaList.items} />
                    </div>
                </div>
            )}
        </div>
        <div className="hbs-large-asset-topper__media">
            <MediaAsset {...asset} />
        </div>
      </div>
    </div>
  );
}
