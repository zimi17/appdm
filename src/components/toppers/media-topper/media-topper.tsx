'use client';
import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import { MediaAsset } from "@/components/primitives/media-asset/media-asset";
import { cn } from "@/lib/utils";
import { type MediaTopperProps } from "./types";
import { backgroundColors, theme } from "@/lib/theme";
import "./media-topper.scss";
import { ReactNode } from "react";


const Subtitle = ({ subtitle }: { subtitle?: ReactNode }) => {
    if (!subtitle) return null;
    return <div className="hbs-media-topper__subtitle">{subtitle}</div>
};

export function MediaTopper({
  title,
  subtitle,
  cta,
  assets,
  theme = 'light',
  isSeamless = false,
  hiddenTitle
}: MediaTopperProps) {
  const assetCount = assets.length;
  const hasBackground = theme && Object.keys(backgroundColors).includes(theme);

  return (
    <div
      className={cn(
        "hbs-media-topper-wrapper",
        "hbs-topper-wrapper"
      )}
      data-theme={theme}
      style={{ backgroundColor: theme ? theme[theme as keyof typeof theme] : undefined }}
    >
      <div
        className={cn(
          "hbs-media-topper",
          "hbs-topper",
          `hbs-media-topper--${assetCount}`,
          hasBackground && "hbs-media-topper--w-background",
          isSeamless && "hbs-media-topper--seamless"
        )}
      >
        <div className="hbs-media-topper__title hbs-media-topper__title--long">
          {hiddenTitle ? <h1 className="sr-only">{hiddenTitle}</h1> : <h1>{title}</h1>}
        </div>
        <div className="hbs-media-topper__child">
          <Subtitle subtitle={subtitle} />
          {cta && (
            <div className="hbs-media-topper__cta">
                <CtaLink {...cta} isSmall />
            </div>
          )}
        </div>
        <div className="hbs-media-topper__media">
            {assets.map((asset, i) => (
                <div key={i} className="hbs-media-topper__media-asset">
                    <MediaAsset {...asset} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}