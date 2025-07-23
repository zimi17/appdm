import "./article-tease.scss";

import cn from "clsx";
import { MouseEventHandler, ReactNode } from "react";
import { MediaAsset } from "design-system/components/primitives/media-asset/media-asset";
import { MediaAssetImageProps } from "design-system/components/primitives/media-asset/media-asset-image";
import { MediaAssetVideoProps } from "design-system/components/primitives/media-asset/media-asset-video";
import { KalturaEmbedProps } from "design-system/components/primitives/kaltura-embed/kaltura-embed";
import {
  Byline,
  BylineProps,
} from "design-system/components/primitives/byline/byline";
import {
  EditAttributes,
  TeaseContext,
  TeaseStyle,
} from "design-system/types/types";
import { Icon } from "design-system/components/icons/icon";
import {
  ExpandedPalette,
  expandedPalette,
  Theme,
} from "design-system/utils/theme";
import { isExternalLink } from "design-system/utils/external";
import { Link } from "../link/link";

export interface ArticleMultiLinkProps {
  title: string;
  link: string;
}

export interface DownloadLinkProps {
  label?: string;
  link?: string;
}

export interface ArticleTeaseProps {
  type: "Article";
  color?: ExpandedPalette;
  customColor?: string;
  byline?: BylineProps;
  overline?: {
    label?: string;
    link?: string;
  };
  image?: MediaAssetImageProps;
  video?: MediaAssetVideoProps;
  kaltura?: KalturaEmbedProps;
  coverImage?: boolean;
  imageInset?: boolean;
  link?: string;
  multiLinks?: Array<ArticleMultiLinkProps>;
  ariaLabel?: string;
  tease?: ReactNode;
  title?: ReactNode;
  style?: TeaseStyle;
  theme?: Theme;
  isLogo?: boolean;
  isSmall?: boolean;
  showSource?: boolean;
  teaseContext?: TeaseContext;
  HeadingLevel?: "h2" | "h3" | "h4";
  variant?: string;
  onClick?: MouseEventHandler;
  downloadLink?: DownloadLinkProps;
  display?: unknown;
  sortDate?: string;

  editAttributes?: {
    url?: EditAttributes;
    title?: EditAttributes;
    description?: EditAttributes;
  };
}

function ArticleTeaseDesc({
  desc,
  editAttributes,
}: {
  desc: ReactNode;
  editAttributes?: ArticleTeaseProps["editAttributes"];
}) {
  if (!desc) return null;

  if (typeof desc === "string") {
    return (
      <p
        {...editAttributes?.description}
        className="hbs-article-tease__teaser"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    );
  }

  return (
    <div {...editAttributes?.description} className="hbs-article-tease__teaser">
      {desc}
    </div>
  );
}

/**
 * ## See it in use on...
 * - An [archive page](/story/example-pages-archive-pages-story-archive--story)
 *
 * - **`id: P-004-000-01`**
 */
export function ArticleTease({
  byline,
  color,
  overline,
  customColor,
  image,
  video,
  kaltura,
  coverImage,
  imageInset,
  link,
  multiLinks,
  ariaLabel,
  tease,
  title,
  style = "expanded",
  theme,
  isLogo,
  isSmall,
  showSource,
  HeadingLevel = "h2",
  editAttributes,
  teaseContext,
  variant,
  onClick,
  downloadLink,
}: ArticleTeaseProps) {
  const hasAsset = image || kaltura || video;
  const showOverline =
    (overline && style === "expanded") ||
    style === "full" ||
    style === "text-only";
  const showDesc = style === "full" || style === "content";
  const showByline = style !== "content";
  const isCard = style === "content" && !hasAsset;
  const isSmallTease = isSmall && style === "content";
  const textOnly = style === "text-only";
  const useNoImageFallback = !textOnly && !isCard && teaseContext === "row";
  const computedTheme = theme
    ? theme
    : useNoImageFallback && !hasAsset && !theme
      ? "blue"
      : "unset";

  let source;
  let host;
  let isExternal: boolean | undefined;

  if (link) {
    isExternal = isExternalLink(link);
  }

  const arrowClassNames = cn(
    "hbs-article-tease__arrow-icon hbs-icon",
    isExternal && "hbs-article-tease__arrow-icon--external",
  );

  const teaseColorStyle = customColor
    ? {
        backgroundColor: customColor,
      }
    : color
      ? {
          backgroundColor: expandedPalette[color],
        }
      : undefined;

  return (
    <div
      {...editAttributes?.url}
      data-theme={computedTheme}
      className={cn(
        "hbs-article-tease",
        `hbs-article-tease--${style}`,
        isLogo && "hbs-article-tease--logo",
        !hasAsset && useNoImageFallback && "hbs-article-tease--no-image",
        isSmallTease && "hbs-article-tease--small",
      )}
    >
      {!isCard && (
        <>
          {image && !textOnly && (
            <div className="hbs-article-tease__image">
              <Link
                style={teaseColorStyle}
                href={link}
                className={cn(
                  "hbs-article-tease__image__link",
                  coverImage && "hbs-article-tease__image__link--cover",
                )}
                aria-hidden="true"
                tabIndex={-1}
                onClick={onClick}
              ></Link>
              <MediaAsset
                image={{ ...image, mobileWidth: 560 }}
                className={cn(
                  isLogo && "hbs-media-asset--logo",
                  imageInset && "hbs-article-tease__media--inset",
                  coverImage && "hbs-article-tease__media--cover",
                  variant === "artwork" && "hbs-media-asset--no-aspect-ratio",
                  variant === "profile-search" &&
                    "hbs-participant-story-media__image",
                )}
              />
            </div>
          )}

          {video && !textOnly && (
            <Link
              href={link}
              aria-label={ariaLabel}
              className="hbs-article-tease__image"
            >
              <MediaAsset video={video} />
            </Link>
          )}

          {kaltura && !textOnly && (
            <div className="hbs-article-tease__image">
              <MediaAsset kaltura={kaltura} />
            </div>
          )}

          <div
            className={cn(
              "hbs-article-tease__content",
              !image && !video && !kaltura && !textOnly
                ? "tease-without-media"
                : "",
            )}
          >
            {showOverline && (
              <span className="hbs-article-tease__overline">
                {overline?.link ? (
                  <Link href={overline.link}>{overline.label}</Link>
                ) : (
                  overline?.label
                )}
              </span>
            )}

            <HeadingLevel
              {...editAttributes?.title}
              className="hbs-article-tease__title hbs-text-h2"
            >
              {!link && title && (
                <div className="hbs-article-tease__title__no-link">{title}</div>
              )}

              {link && title && typeof title === "string" && (
                <Link
                  href={link}
                  aria-label={ariaLabel}
                  className="hbs-article-tease__title__link"
                  dangerouslySetInnerHTML={{ __html: title }}
                  onClick={onClick}
                ></Link>
              )}
              {link && title && typeof title !== "string" && (
                <Link
                  href={link}
                  onClick={onClick}
                  aria-label={ariaLabel}
                  className="hbs-article-tease__title__link"
                >
                  {title}
                </Link>
              )}
            </HeadingLevel>

            {showDesc && tease && (
              <ArticleTeaseDesc desc={tease} editAttributes={editAttributes} />
            )}

            {multiLinks && (
              <ul className="hbs-article-tease__multi-link__list">
                {multiLinks.map((linkItem) => (
                  <li
                    className="hbs-article-tease__multi-link__item"
                    key={linkItem.title}
                  >
                    <Link
                      className="hbs-article-tease__multi-link__link"
                      aria-label={ariaLabel}
                      href={linkItem.link}
                    >
                      {linkItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {byline && showByline && (
              <div className="hbs-article-tease__meta">
                <Byline {...byline} disableLinks />
              </div>
            )}
            {showSource && source && link && host && !downloadLink && (
              <div className="hbs-article-tease__source">
                <p className="hbs-global-visually-hidden">From {host}</p>

                <Link
                  className="hbs-article-tease__source-link"
                  href={link}
                  aria-hidden
                  tabIndex={-1}
                >
                  {source}
                </Link>
              </div>
            )}
            {downloadLink && (
              <div className="hbs-article-tease__download">
                <Link
                  className="hbs-article-tease__download-link"
                  href={downloadLink.link}
                >
                  {downloadLink.label}
                </Link>
              </div>
            )}
          </div>
        </>
      )}

      {isCard && !isSmallTease && (
        <div
          className={cn(
            "hbs-article-tease__content__card hbs-article-tease__content--big",
            link && "hbs-article-tease__content--link",
          )}
        >
          <HeadingLevel
            {...editAttributes?.title}
            className="hbs-article-tease__title hbs-text-h2"
          >
            {link ? (
              <Link href={link} aria-label={ariaLabel} onClick={onClick}>
                {title}
              </Link>
            ) : (
              title
            )}
          </HeadingLevel>

          {showDesc && tease && (
            <ArticleTeaseDesc desc={tease} editAttributes={editAttributes} />
          )}

          {link && (
            <div className="hbs-article-tease__arrow">
              <Icon name="arrow" className={arrowClassNames} />
            </div>
          )}
        </div>
      )}

      {isCard && isSmallTease && (
        <div
          className={cn(
            "hbs-article-tease__content__card hbs-article-tease__content--small",
            link && "hbs-article-tease__content--link",
          )}
        >
          <div className="hbs-article-tease__content-wrapper--small">
            <HeadingLevel
              {...editAttributes?.title}
              className="hbs-article-tease__title--small"
            >
              {link ? (
                <Link href={link} aria-label={ariaLabel}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </HeadingLevel>
            {link && (
              <div className="hbs-article-tease__arrow">
                <Icon name="arrow" className={arrowClassNames} />
              </div>
            )}
          </div>

          {showDesc && tease && (
            <ArticleTeaseDesc desc={tease} editAttributes={editAttributes} />
          )}
        </div>
      )}
    </div>
  );
}
