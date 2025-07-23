import {
  ExtractLazyComponent,
  LazyComponent,
} from "design-system/components/system/lazy-component/lazy-component";
import { TeaseStyle } from "design-system/types/types";
import { MouseEventHandler } from "react";

export type LazyTeaseFeedTease = ExtractLazyComponent<
  | "ArticleTease"
  | "BookTease"
  | "EventFeedTease"
  | "ProgramTease"
  | "SocialMediaTease"
  | "PersonSearchResultTease"
  | "VideoTease"
  | "CourseCard"
>;

export interface TeaseFeedTeaseProps {
  tease: LazyTeaseFeedTease;
  teaseStyle?: TeaseStyle;
  headingLevel: "h2" | "h3" | "h4" | undefined;
  onClick?: MouseEventHandler;
}

export function TeaseFeedTease({
  tease,
  teaseStyle,
  headingLevel,
}: TeaseFeedTeaseProps) {
  if (!tease.props) return null;

  tease.props.style = teaseStyle;
  tease.props.HeadingLevel = headingLevel;

  if (tease.name === "ArticleTease") {
    tease.props.teaseContext = "feed";

    if (tease.props.image && tease.props.variant !== "artwork") {
      tease.props.image.aspectRatio = "3/2";
    }
    if (
      tease.props.image &&
      (tease.props.variant === "profile" ||
        tease.props.variant === "profile-search")
    ) {
      tease.props.image.aspectRatio = "1/1";
    }
  }

  if (tease.name === "BookTease") {
    tease.props.style = "content";
  }

  if (tease.name === "ProgramTease") {
    if (tease.props.image) tease.props.image.aspectRatio = "3/2";
  }

  if (tease.name === "SocialMediaTease") {
    if (tease.props.image) tease.props.image.aspectRatio = "1/1";
  }

  return (
    <li className="hbs-tease-feed__item">
      <LazyComponent {...tease} />
    </li>
  );
}
