/* eslint-disable react/no-unescaped-entities */
import cn from "clsx";
import { usePrefersReducedMotion } from "design-system/hooks/use-prefers-reduced-motion";
import {
  MouseEvent,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { IconPause } from "design-system/components/icons/icon-pause";
import { IconPlay } from "design-system/components/icons/icon-play";
import { EditAttributes } from "design-system/types/types";
import { MediaAssetImage } from "./media-asset-image";

export interface MediaAssetVideoProps {
  align?: string;
  caption?: ReactNode;
  description?: string;
  backupImage?: string;
  className?: string;
  inline?: boolean;
  autoplay?: boolean;
  src: string;
  mimeType: string;
  width?: string;
  aspectRatio?: `${string}/${string}`;
  hide?: {
    caption?: boolean;
    focusables?: boolean;
  };

  editAttributes?: {
    src?: EditAttributes;
  };
}

export function MediaAssetVideo({
  align,
  description,
  backupImage,
  caption,
  className,
  hide,
  inline = true,
  autoplay = true,
  src,
  mimeType,
  width = "100%",
  aspectRatio,
  editAttributes,
}: MediaAssetVideoProps) {
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(inline && autoplay);
  const figureRef = useRef<HTMLElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageBackupRef = useRef<HTMLSpanElement>(null);
  const staticImageRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const id = useId();

  const figureClass = cn(
    `hbs-media-asset hbs-media-asset--video`,
    align && `hbs-global-${align}`,
    loaded && "hbs-media-asset--loaded",
    backupImage && "hidden with-backup-image",
    className,
  );

  const isInline = inline && {
    autoPlay: autoplay,
    controls: false,
    loop: true,
    muted: true,
    playsInline: true,
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video && autoplay) {
      if (prefersReducedMotion) {
        video.pause();
      } else {
        void video.play();
      }
    }
  }, [prefersReducedMotion, autoplay]);

  useEffect(() => {
    const figure = figureRef.current;

    function removeImage() {
      const figureSpan = spanRef.current;
      const imageBackup = imageBackupRef.current;
      if (!figure?.classList.contains("hbs-media-asset--loaded")) {
        figure?.classList.add("hbs-media-asset--loaded");
      }
      if (!figureSpan?.classList.contains("hbs-media-asset__wrapper")) {
        figureSpan?.classList.add("hbs-media-asset__wrapper");
      }
      figure?.classList.remove("hidden");
      imageBackup?.classList.add("hidden");
    }

    if (loaded) {
      if (!figure?.classList.contains("hbs-media-asset--loaded")) {
        setLoaded(true);
        removeImage();
      }
    }

    if (figure?.classList.contains("hbs-media-asset--loaded")) {
      removeImage();
    }
  }, [loaded, spanRef, imageBackupRef]);

  useEffect(() => {
    const removeStaticImage = () => {
      const figure = figureRef.current;

      if (figure?.classList.contains("hbs-media-asset--loaded")) {
        const figureSpan = spanRef.current;
        const imageBackup = imageBackupRef.current;
        if (!figure?.classList.contains("hbs-media-asset--loaded")) {
          figure?.classList.add("hbs-media-asset--loaded");
        }
        if (!figureSpan?.classList.contains("hbs-media-asset__wrapper")) {
          figureSpan?.classList.add("hbs-media-asset__wrapper");
        }
        figure?.classList.remove("hidden");
        imageBackup?.classList.add("hidden");
      }
    };

    window.addEventListener("canplay", removeStaticImage);
    return () => window.removeEventListener("canplay", removeStaticImage);
  }, []);

  const togglePause = (e: MouseEvent<HTMLButtonElement | HTMLVideoElement>) => {
    e.stopPropagation();

    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }

    setIsPlaying(!video.paused);
  };

  return (
    <>
      <figure className={figureClass} ref={figureRef}>
        <span
          {...editAttributes?.src}
          className={
            backupImage ? "media-span-wrapper" : "hbs-media-asset__wrapper"
          }
          ref={spanRef}
        >
          <video
            id={`video-${id}`}
            ref={videoRef}
            width={width}
            poster={backupImage}
            {...isInline}
            onCanPlay={() => setLoaded(true)}
            onClick={togglePause}
            style={
              aspectRatio
                ? {
                    aspectRatio,
                    objectFit: "cover",
                    objectPosition: "center center",
                  }
                : {}
            }
            aria-label={description ? `Video of ${description}` : ""}
          >
            <source src={src} type={mimeType}></source>
            <track kind="captions" />
            <p>Sorry, your browser doesn't support embedded videos.</p>
          </video>

          <button
            className="hbs-media-asset__pause"
            // Hiding play/pause button assuming any non-kaltura video uploaded will be a silent autoplay video and in that case a screen reader user won't need these controls
            aria-hidden="true"
            /**aria-label={`${isPlaying ? "Pause" : "Play"} video`}
          aria-controls={`video-${id}`}
          aria-live="polite"**/
            onClick={togglePause}
          >
            {isPlaying ? (
              <IconPause className="hbs-media-asset__pause-icon" />
            ) : (
              <IconPlay className="hbs-media-asset__pause-icon" />
            )}
          </button>
        </span>
        {!hide?.caption && caption && (
          <figcaption className="hbs-media-asset__caption">
            <span className="hbs-media-asset__caption-text">
              <p>{caption}</p>
            </span>
          </figcaption>
        )}
      </figure>

      {backupImage && (
        <span className="backup-image" ref={imageBackupRef}>
          <MediaAssetImage
            ref={staticImageRef}
            src={backupImage}
            width={width}
            alt={description}
          />
        </span>
      )}
    </>
  );
}
