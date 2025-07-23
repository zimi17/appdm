import React, { useRef } from 'react';

export interface SiteHeaderWorkingKnowledgeTitleProps {
  workingKnowledgeTitleLink?: string;
}

export const SiteHeaderWorkingKnowledgeTitle: React.FC<
  SiteHeaderWorkingKnowledgeTitleProps
> = ({ workingKnowledgeTitleLink }) => {
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center" ref={sectionTitleRef}>
      <a
        className="text-lg font-semibold text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        href={workingKnowledgeTitleLink || "#"}
      >
        Working Knowledge
      </a>
    </div>
  );
};
