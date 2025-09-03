'use client';

import React from 'react';
// Topper Components
import { MissionTopper } from '../toppers/mission-topper/mission-topper';
import { ProgramTopper } from '../toppers/program-topper/program-topper';
import { BigArtTopper } from '../toppers/big-art-topper/big-art-topper';
import { CourseTopper } from '../toppers/course-topper/course-topper';
import { SearchTopper } from '../toppers/search-topper/search-topper';
import { EventTopper } from '../toppers/event-topper/event-topper';
import { ArticleTopper } from '../toppers/article-topper/article-topper';
import { CardTopper } from '../toppers/card-topper/card-topper';
import { LargeAssetTopper } from '../toppers/large-asset-topper/large-asset-topper';
import { MediaTopper } from '../toppers/media-topper/media-topper';
import { SimplePageTopper } from '../toppers/simple-page-topper/simple-page-topper';
import { SplitTopper } from '../toppers/split-topper/split-topper';

const topperComponents: { [key: string]: React.ComponentType<any> } = {
  missionTopper: MissionTopper,
  programTopper: ProgramTopper,
  bigArtTopper: BigArtTopper,
  courseTopper: CourseTopper,
  searchTopper: SearchTopper,
  eventTopper: EventTopper,
  articleTopper: ArticleTopper,
  cardTopper: CardTopper,
  largeAssetTopper: LargeAssetTopper,
  mediaTopper: MediaTopper,
  simplePageTopper: SimplePageTopper,
  splitTopper: SplitTopper,
};

export const RenderToppers = ({ toppers }: { toppers: any[] }) => {
  if (!toppers || toppers.length === 0) {
    return null;
  }

  return (
    <>
      {toppers.map((topper, index) => {
        const Component = topperComponents[topper._type];
        // Generate unique key using multiple factors to ensure uniqueness
        const reactKey = topper._key ||
                         topper._id ||
                         `${topper._type}-${index}-${Date.now()}-${Math.random()}`;

        if (!Component) {
          console.warn(`Topper component for type "${topper._type}" not found.`);
          return (
            <div key={reactKey} className="bg-yellow-100 p-4 my-2">
              <p>Unknown topper type: {topper._type}</p>
              <pre>{JSON.stringify(topper, null, 2)}</pre>
            </div>
          );
        }
        return <Component key={reactKey} {...topper} />;
      })}
    </>
  );
};