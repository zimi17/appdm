import "./media-asset.scss";

import { MediaAssetImage, MediaAssetImageProps } from "./media-asset-image";
import { MediaAssetVideo, MediaAssetVideoProps } from "./media-asset-video";
import { MediaAssetKalturaModal } from "./media-asset-kaltura-modal";
import {
  KalturaEmbed,
  KalturaEmbedProps,
} from "design-system/components/primitives/kaltura-embed/kaltura-embed";
import { forwardRef } from "react";
import { Embed, EmbedProps } from "../embed/embed";
import { WowzaEmbed, WowzaEmbedProps } from "../wowza-embed/wowza";

export interface MediaAssetProps {
  image?: MediaAssetImageProps;
  video?: MediaAssetVideoProps;
  kaltura?: KalturaEmbedProps;
  embed?: EmbedProps;
  wowzaEmbed?: WowzaEmbedProps;
  className?: string;
  aspectRatio?: `${string}/${string}`;
  hide?: {
    caption?: boolean;
    focusables?: boolean;
  };
}

/**
 * - **`id: P-018-000-11`**
 */
export const MediaAsset = forwardRef<HTMLButtonElement, MediaAssetProps>(
  (
    { className, hide, image, video, kaltura, embed, aspectRatio, wowzaEmbed },
    ref,
  ) => {
    if (image) {
      return (
        <MediaAssetImage
          aspectRatio={aspectRatio}
          {...image}
          hide={hide}
          className={className}
        />
      );
    }

    if (video) {
      return (
        <MediaAssetVideo
          aspectRatio={aspectRatio}
          {...video}
          hide={hide}
          className={className}
        />
      );
    }

    if (embed) {
      return <Embed {...embed} className={className} />;
    }

    if (wowzaEmbed) {
      return <WowzaEmbed {...wowzaEmbed} />;
    }

    if (kaltura) {
      if (kaltura.withModal) {
        return (
          <MediaAssetKalturaModal
            aspectRatio={aspectRatio}
            ref={ref}
            kaltura={kaltura}
            hide={hide}
            className={className}
          />
        );
      }
      return <KalturaEmbed {...kaltura} className={className} />;
    }

    return null;
  },
);

MediaAsset.displayName = "MediaAsset";
