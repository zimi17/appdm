
import { ReactNode } from "react";

export interface MediaAssetImageProps {
    alt: string;
    src: string;
    width?: string;
    height?: string;
    hint?: string;
    caption?: ReactNode;
}

export interface Author {
    name: string;
    link?: string;
    avatar?: {
      image: MediaAssetImageProps
    }
}

export interface BylineProps {
    authors?: Author[];
    featuredAuthors?: Author[];
    publicationDate: string;
    disableLinks?: boolean;
    type?: "Authors" | "Featured" | "PeopleOnly" | "ShowAll" | "DateOnly";
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
