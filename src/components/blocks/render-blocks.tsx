
'use client';

import React from 'react';
// HBS Design System Components
import { RichText } from './rich-text/rich-text';
import { MultiColumnRichText } from './multi-column-rich-text/multi-column-rich-text';
import { GridList } from './grid-list/grid-list';
import { CTABanner } from './cta-banner/cta-banner';
import { SupportingDetails } from './supporting-details/supporting-details';
import { HierarchicalTease } from './hierarchical-tease/hierarchical-tease';
import { PullQuote } from './pull-quote/pull-quote';
import { TeaseRow } from './tease-row/tease-row';
import { TeaseFeed } from './tease-feed/tease-feed';
import { MediaCarousel } from './media-carousel/media-carousel';
import { KeywordScrollList } from './keyword-scroll-list/keyword-scroll-list';
import { HeroStatement } from './hero-statement/hero-statement';

// Statistics Components
import { StatisticsGroup } from './statistics-group/statistics-group';
import { StatisticsRow } from './statistics-row/statistics-row';
import { StatisticsCTA } from './statistics-cta/statistics-cta';

// Event Components
import { EventSchedule } from './event-schedule/event-schedule';
import { EventsTease } from './events-tease/events-tease';

// People Components
import { PeopleListing } from './people-listing/people-listing';

// Content Components
import { Table } from './table/table';
import { TimelineTease } from './timeline-tease/timeline-tease';

// New Critical Components
import { SearchArchive } from './search-archive/search-archive';
import { QuoteCarousel } from './quote-carousel/quote-carousel';
import { MediaAssetRow } from './media-asset-row/media-asset-row';
import { TagArchive } from './tag-archive/tag-archive';
import { FormAssemblyEmbeds } from './form-assembly-embeds/form-assembly-embeds';

// Phase 1 - Core Content Components
import { PodcastPlayer } from './podcast-player/podcast-player';
import { TextCallout } from './text-callout/text-callout';
import { SideBySideSectionIntro } from './side-by-side-section-intro/side-by-side-section-intro';
import { ThreeColumnList } from './three-column-list/three-column-list';

// Phase 1 - Archive & Search Foundation
import { BentoBoxArchive } from './bento-box-archive/bento-box-archive';
import { EventsArchive } from './events-archive/events-archive';
import { PersonArchive } from './person-archive/person-archive';
import { StoryArchive } from './story-archive/story-archive';
import { SearchMultiLinkArchive } from './search-multi-link-archive/search-multi-link-archive';

// Phase 2 - Core Content Blocks
import { QuoteTestimonial } from './quote-testimonial/quote-testimonial';
import { SequentialModule } from './sequential-module/sequential-module';
import { Truncator } from './truncator/truncator';
import { ProgramFinder } from './program-finder/program-finder';
import { MultiFeedTeaseRow } from './multi-feed-tease-row/multi-feed-tease-row';

// Phase 3 - User Experience Components
import { ArticleShareTools } from './article-share-tools/article-share-tools';
import { NewsletterSignup } from './newsletter-signup/newsletter-signup';
import { SearchBox } from './search-box/search-box';
import { SocialMediaLinks } from './social-media-links/social-media-links';
import { TeaseCarousel } from './tease-carousel/tease-carousel';
// Legacy components (to be migrated)
import { AccordionSection } from './accordion/accordion';
import { urlFor } from '@/lib/sanity-client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const blockComponents: { [key: string]: React.ComponentType<any> } = {
  // HBS Design System Components
  richText: RichText,
  multiColumnRichText: MultiColumnRichText,
  gridList: GridList,
  ctaBanner: CTABanner,
  accordion: AccordionSection,
  supportingDetails: SupportingDetails,
  hierarchicalTease: HierarchicalTease,
  pullQuote: PullQuote,
  teaseRow: TeaseRow,
  teaseFeed: TeaseFeed,
  mediaCarousel: MediaCarousel,
  keywordScrollList: KeywordScrollList,
  heroStatement: HeroStatement,
  
  // Statistics Components
  statisticsGroup: StatisticsGroup,
  statisticsRow: StatisticsRow,
  statisticsCTA: StatisticsCTA,
  
  // Event Components
  eventSchedule: EventSchedule,
  eventsTease: EventsTease,
  
  // People Components
  peopleListing: PeopleListing,
  
  // Content Components
  table: Table,
  timelineTease: TimelineTease,
  
  // New Critical Components
  searchArchive: SearchArchive,
  quoteCarousel: QuoteCarousel,
  mediaAssetRow: MediaAssetRow,
  tagArchive: TagArchive,
  formAssemblyEmbeds: FormAssemblyEmbeds,
  
  // Phase 1 - Core Content Components
  podcastPlayer: PodcastPlayer,
  textCallout: TextCallout,
  sideBySideSectionIntro: SideBySideSectionIntro,
  threeColumnList: ThreeColumnList,
  
  // Phase 1 - Archive & Search Foundation
  bentoBoxArchive: BentoBoxArchive,
  eventsArchive: EventsArchive,
  personArchive: PersonArchive,
  storyArchive: StoryArchive,
  searchMultiLinkArchive: SearchMultiLinkArchive,
  
  // Phase 2 - Core Content Blocks
  quoteTestimonial: QuoteTestimonial,
  sequentialModule: SequentialModule,
  truncator: Truncator,
  programFinder: ProgramFinder,
  multiFeedTeaseRow: MultiFeedTeaseRow,
  
  // Phase 3 - User Experience Components
  articleShareTools: ArticleShareTools,
  newsletterSignup: NewsletterSignup,
  searchBox: SearchBox,
  socialMediaLinks: SocialMediaLinks,
  teaseCarousel: TeaseCarousel,
  
  // Legacy components (to be migrated)
};

// Helper function to process block data, especially image URLs
const processBlockData = (block: any) => {
  if (block.image) {
    block.imageUrl = urlFor(block.image as SanityImageSource).toString();
    block.imageHint = block.image.hint;
  }
  if (block.items) {
    block.items = block.items.map((item: any) => {
        if (item.image) {
            return {
                ...item,
                image: urlFor(item.image as SanityImageSource).width(768).height(576).toString(),
                hint: item.image.hint,
            }
        }
        // Add an 'id' to accordion items if it's missing, for the key
        if(block._type === 'accordionSection' && !item.id) {
            return {...item, id: item._key || item.title}
        }
        return item;
    });
  }
  return block;
};

export const RenderBlocks = ({ blocks }: { blocks: any[] }) => {
  if (!blocks || blocks.length === 0) {
    return <p className="text-center py-12">Tidak ada konten untuk halaman ini.</p>;
  }

  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type];
        if (!Component) {
          console.warn(`Component for block type "${block._type}" not found.`);
          return (
            <div key={block._key} className="bg-red-100 p-4 my-2">
              <p>Unknown block type: {block._type}</p>
              <pre>{JSON.stringify(block, null, 2)}</pre>
            </div>
          );
        }
        const processedProps = processBlockData({ ...block });
        return <Component key={block._key} {...processedProps} />;
      })}
    </>
  );
};
