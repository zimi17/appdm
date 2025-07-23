import React from 'react';

export interface SiteHeaderWorkingKnowledgeTaglineProps {
  workingKnowledgeTitleLink?: string;
  workingKnowledgeTagline?: string;
}

export const SiteHeaderWorkingKnowledgeTagline: React.FC<
  SiteHeaderWorkingKnowledgeTaglineProps
> = ({ workingKnowledgeTitleLink, workingKnowledgeTagline }) => {
  return (
    <div className="flex flex-col items-start p-2">
      <a
        className="text-2xl font-bold text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        href={workingKnowledgeTitleLink || "#"}
      >
        Working Knowledge
      </a>
      {workingKnowledgeTagline && (
        <div className="text-gray-600 dark:text-gray-300">
          <em>{workingKnowledgeTagline}</em>
        </div>
      )}
    </div>
  );
};
