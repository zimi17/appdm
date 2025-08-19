
import { ReactNode } from "react";

export interface Author {
    name: string;
    link?: string;
}

export interface BylineProps {
    authors: Author[];
    publicationDate: string;
    disableLinks?: boolean;
}

export interface MediaAssetImageProps {
    alt: string;
    src: string;
    width?: string;
    height?: string;
    hint?: string;
}

export interface ArticleTeaseProps {
    type: "Article";
    title: ReactNode;
    link: string;
    byline?: BylineProps;
    overline?: {
        label?: string;
        link?: string;
    };
    tease?: ReactNode;
    image?: MediaAssetImageProps;
    style?: "full" | "text-only";
    HeadingLevel?: 'h2' | 'h3' | 'h4';
    className?: string;
}
