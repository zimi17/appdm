import { CtaList } from "@/components/primitives/cta-list/cta-list";
import { MediaAsset } from "@/components/primitives/media-asset/media-asset";
import { cn } from "@/lib/utils";
import { type CardTopperProps } from "./types";
import "./card-topper.scss";

export function CardTopper({
  title,
  subtitle,
  media,
  ctaList,
  theme = 'crimson',
}: CardTopperProps) {
  return (
    <div className={cn("hbs-topper-wrapper hbs-card-topper__container")}>
      <div className="hbs-card-topper">
        <div className="hbs-card-topper__content">
          <div className="hbs-card-topper__inner" data-theme={theme}>
            <div className="hbs-card-topper__wrapper">
              <h1 className="hbs-card-topper__heading">{title}</h1>
              {subtitle && (
                <div className="hbs-card-topper__subheading">{subtitle}</div>
              )}
              {ctaList?.items && (
                <div className="hbs-card-topper__cta">
                  <CtaList items={ctaList.items} />
                </div>
              )}
            </div>
          </div>
        </div>
        {media && (
          <div className="hbs-card-topper__art">
            <MediaAsset {...media} className="w-full h-full" aspectRatio="3/2" />
          </div>
        )}
      </div>
    </div>
  );
}
