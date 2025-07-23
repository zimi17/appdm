import {
  ExtractLazyComponent,
  LazyComponent,
} from "design-system/components/system/lazy-component/lazy-component";
import { TeaseStyle } from "design-system/types/types";
import { MouseEventHandler } from "react";

export type LazyTeaseRowTease = ExtractLazyComponent<
  | "ArticleTease"
  | "BookTease"
  | "ParticipantStoryTease"
  | "PersonTease"
  | "PodcastTease"
  | "ProgramTease"
  | "QuoteTease"
  | "CTATease"
>;

export interface TeaseRowTeaseProps {
  tease: LazyTeaseRowTease;
  teaseStyle?: TeaseStyle;
  headingLevel: string;
  showPhone?: boolean;
  showJobTitle?: boolean;
  articleImageInset?: boolean;
  onClick?: MouseEventHandler;
}

export function TeaseRowTease({
  tease,
  teaseStyle,
  headingLevel,
  showPhone,
  showJobTitle,
  articleImageInset,
}: TeaseRowTeaseProps) {
  if (!tease.props) return null;

  if (tease.name !== "CTATease") {
    tease.props.style = teaseStyle;
    tease.props.HeadingLevel = headingLevel;
  }

  if (tease.name === "ArticleTease") {
    tease.props.teaseContext = "row";
    tease.props.imageInset = articleImageInset || tease.props.imageInset;

    if (tease.props.image && !tease.props.isLogo && !tease.props.coverImage) {
      if (!tease.props.image.aspectRatio) {
        tease.props.image.aspectRatio = tease.props.imageInset ? "1/1" : "3/2";
      }
    }
  }

  if (tease.name === "PersonTease") {
    tease.props.isTeaseRow = true;
    tease.props.hidePhone = !showPhone;
    tease.props.hideJobTitle = !showJobTitle;
  }

  return (
    <li className="hbs-tease-row__tease-mod">
      <LazyComponent {...tease} />
    </li>
  );
}
