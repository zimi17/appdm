import React, { useRef } from "react";

interface NavigationLink {
  url: string;
  title: string;
  description?: string;
}

interface EditAttributes {
  [key: string]: string | number | boolean | undefined;
}

export interface SiteHeaderSectionTitleProps {
  sectionTitle: NavigationLink;
  editAttributes?: {
    title?: EditAttributes;
    moreItemsTitle?: EditAttributes;
  };
}

export const SiteHeaderSectionTitle: React.FC<SiteHeaderSectionTitleProps> = ({
  sectionTitle,
  editAttributes,
}) => {
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center" ref={sectionTitleRef}>
      <a
        href={sectionTitle.url}
        className="text-lg font-semibold text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        {...editAttributes?.title}
      >
        {sectionTitle.title}
      </a>
    </div>
  );
};
