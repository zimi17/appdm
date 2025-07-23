import { ReactNode, forwardRef } from "react";
import cn from "clsx";
import { CloudinaryProps, cloudinary } from "design-system/utils/cloudinary";
import { EditAttributes } from "design-system/types/types";
import { useStoreSelector } from "design-system/store/store";

// add support for missing attribute "fetchPriority" (experimental img attr)
declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}

export interface MediaAssetImageProps {
  src: string;
  alt?: string;
  align?: string;
  gravity?: CloudinaryProps["gravity"];
  caption?: ReactNode;
  className?: string;
  mobileWidth?: number;
  aspectRatio?: `${string}/${string}`;
  intrinsicAspectRatio?: `${string}/${string}`;
  height?: string; // height will be ignored if aspectRatio is set
  width?: string;
  quality?:
    | "q_auto"
    | "q_auto:best"
    | "q_auto:good"
    | "q_auto:eco"
    | "q_auto:low"
    | number;
  loading?: "lazy" | "eager";
  hide?: {
    caption?: boolean;
    focusables?: boolean;
  };

  editAttributes?: {
    src?: EditAttributes;
  };
}

export const MediaAssetImage = forwardRef<
  HTMLImageElement,
  MediaAssetImageProps
>(
  (
    {
      align,
      gravity,
      alt = "",
      caption,
      className,
      aspectRatio,
      intrinsicAspectRatio,
      height = "auto",
      hide,
      src,
      mobileWidth = 600,
      loading = "lazy",
      width = "100%",
      quality,
      editAttributes,
    },
    ref,
  ) => {
    const Head = useStoreSelector((store) => store.framework.Head);

    const cloudinaryProps: CloudinaryProps = {};

    if (width?.includes("px")) {
      cloudinaryProps.width = parseInt(width.replace("px", ""));
      if (cloudinaryProps.width < mobileWidth) {
        mobileWidth = cloudinaryProps.width;
      }
    }

    if (aspectRatio) {
      cloudinaryProps.ratio = aspectRatio.replace(
        "/",
        ":",
      ) as `${string}:${string}`;
    } else if (intrinsicAspectRatio) {
      cloudinaryProps.ratio = intrinsicAspectRatio.replace(
        "/",
        ":",
      ) as `${string}:${string}`;
      aspectRatio = intrinsicAspectRatio;
    }

    if (!aspectRatio && height?.includes("px")) {
      cloudinaryProps.height = parseInt(height.replace("px", ""));
    }

    if (gravity) {
      cloudinaryProps.gravity = gravity;
    }

    if (quality) {
      cloudinaryProps.quality = quality;
    }

    const defaultSrc = cloudinary(src, cloudinaryProps);
    const mobileSrc = cloudinary(src, {
      ...cloudinaryProps,
      width: mobileWidth,
    });
    const sizes = `(max-width: 600px) ${mobileWidth}px`;
    const srcSet = `${mobileSrc} ${mobileWidth}w, ${defaultSrc}`;

    let position = "center center";
    // Convert cloudinary gravity to object-position
    if (cloudinaryProps.gravity === "west") position = "left";
    if (cloudinaryProps.gravity === "north") position = "top";
    if (cloudinaryProps.gravity === "east") position = "right";
    if (cloudinaryProps.gravity === "south") position = "bottom";
    if (cloudinaryProps.gravity === "center") position = "center";
    if (cloudinaryProps.gravity === "auto") position = "inherit";

    return (
      <>
        {loading === "eager" && (
          <Head>
            <link
              rel="preload"
              as="image"
              href={defaultSrc}
              imageSrcSet={srcSet}
              imageSizes={sizes}
            ></link>
          </Head>
        )}

        <figure
          className={cn(
            `hbs-media-asset hbs-media-asset--image`,
            align && `hbs-global-${align}`,
            /* loaded && */ "hbs-media-asset--loaded", // IG: not working in next.js
            className,
          )}
        >
          <span {...editAttributes?.src} className="hbs-media-asset__wrapper">
            { }
            <img
              alt={alt}
              width={width}
              height={aspectRatio ? "auto" : height}
              loading={loading}
              src={defaultSrc}
              srcSet={srcSet}
              sizes={sizes}
              ref={ref}
              // eslint-disable-next-line react/no-unknown-property
              fetchpriority={loading === "eager" ? "high" : "low"}
              // onLoad={() => setLoaded(true)} // IG: this is not firing in Next.js for some reason - need to investigate more
              // If we don't force the aspect ratio using css, storybook will not render the image correctly since images are not hosted on cloudinary
              style={
                aspectRatio
                  ? {
                      aspectRatio,
                      objectFit: "cover",
                      objectPosition: position,
                    }
                  : {}
              }
            />
          </span>

          {!hide?.caption && caption && (
            <figcaption>
              <span className="hbs-media-asset__caption-text">{caption}</span>
            </figcaption>
          )}
        </figure>
      </>
    );
  },
);

MediaAssetImage.displayName = "MediaAssetImage";
