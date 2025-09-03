
'use client';

import { cn } from "@/lib/utils";
import { type SimplePageTopperProps } from "./types";
import { backgroundColors, theme } from "@/lib/theme";
import { MediaAsset } from "@/components/primitives/media-asset/media-asset";
import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import "./simple-page-topper.scss";
import { ReactNode } from "react";

const Intro = ({ intro }: { intro?: ReactNode }) => {
    if (!intro) return null;
    return <div className="hbs-simple-page-topper__intro">{intro}</div>
}

const Cta = ({ cta }: { cta?: SimplePageTopperProps['cta'] }) => {
    if (!cta) return null;
    return (
      <div className="hbs-simple-page-topper__cta">
        <CtaLink {...cta} />
      </div>
    );
};

export function SimplePageTopper({
    title,
    intro,
    theme = 'light',
    cta,
    media
}: SimplePageTopperProps) {
    const hasMedia = !!media;
    const hasBackground = theme && Object.keys(backgroundColors).includes(theme);

    return (
        <div
            className={cn(
                "hbs-simple-page-topper",
                "hbs-topper",
                hasMedia && "hbs-simple-page-topper--with-media"
            )}
            data-theme={theme}
            style={{ backgroundColor: hasBackground ? theme[theme as keyof typeof theme] : undefined }}
        >
            <div className="hbs-simple-page-topper__content">
                <h1 className={cn("hbs-simple-page-topper__title", hasMedia && "hbs-simple-page-topper__title-media")}>
                    {title}
                </h1>
                <div className={cn("hbs-simple-page-topper__text", hasMedia && "hbs-simple-page-topper__text--with-image")}>
                    <Intro intro={intro} />
                    <Cta cta={cta} />
                </div>
                {hasMedia && (
                    <MediaAsset 
                        {...media}
                        className="hbs-simple-page-topper__title-media"
                        aspectRatio="3/4"
                    />
                )}
            </div>
        </div>
    )
}
