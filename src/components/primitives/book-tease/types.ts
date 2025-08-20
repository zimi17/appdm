import type { ReactNode } from "react";

export interface Author {
    name: string;
    link?: string;
}
  
export interface MediaAssetImageProps {
    alt: string;
    src: string;
    width?: string;
    height?: string;
    hint?: string;
}

export interface BookTeaseProps {
    type: "Book";
    title: ReactNode;
    subtitle?: ReactNode;
    link: string;
    description?: ReactNode;
    authors?: Author[];
    date?: string;
    media: {
        image: MediaAssetImageProps;
    };
    style?: "content" | "full" | "text-only" | "compressed" | "expanded";
    HeadingLevel?: 'h2' | 'h3' | 'h4';
    className?: string;
}