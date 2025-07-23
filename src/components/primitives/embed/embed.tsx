import "./embed.scss";

import cn from "clsx";
import { Alignment } from "../types/types";

export interface EmbedProps {
  className?: string;
  align?: Alignment;
  type?: string;
  src: string;
  aspectRatio?: boolean;
  width?: number;
  height?: number;
  title?: string;
}

/**
 * For video & audio embeds
 *
 * ## See it in use on...
 * - The [kitchen sink detail page](/story/example-pages-detail-pages-kitchen-sink--story)
 *
 * - **`id: P-011-000-00`**
 */
export function Embed({
  align = "center",
  type,
  src,
  aspectRatio = true,
  width,
  height,
  title,
  className,
}: EmbedProps) {
  let ratio = aspectRatio ? false : 56.25; // Default to 16:9

  const ariaTitle = `Podcast: ${title}`;

  if (width && height && aspectRatio) {
    ratio = (height / width) * 100;
  }

  return (
    <div
      className={cn(
        align && `hbs-global-align-${align}`,
        className,
        "hbs-embed-align-wrapper",
      )}
    >
      <div
        className={cn(
          "hbs-embed-wrapper",
          aspectRatio && "hbs-embed-wrapper--aspect-ratio",
        )}
        style={{ paddingTop: `${aspectRatio ? ratio : "0"}%` }}
      >
        <embed
          data-chromatic="ignore"
          className="hbs-embed"
          type={type}
          src={src}
          width={aspectRatio ? "100%" : width}
          height={aspectRatio ? "100%" : height}
          title={title}
          aria-label={ariaTitle}
        />
      </div>
    </div>
  );
}
