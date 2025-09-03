import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import wawasan from './schemas/wawasan'
import page from './schemas/page'
import homepage from './schemas/homepage'
import siteSettings from './schemas/siteSettings'
import navigation from './schemas/navigation'
// HBS Design System Blocks
import richText from './schemas/blocks/rich-text'
import multiColumnRichText from './schemas/blocks/multi-column-rich-text'
import gridList from './schemas/blocks/grid-list'
import ctaBanner from './schemas/blocks/cta-banner'

// Statistics Components
import statisticsGroup from './schemas/blocks/statistics-group'
import statisticsRow from './schemas/blocks/statistics-row'
import statisticsCTA from './schemas/blocks/statistics-cta'

// Event Components
import eventSchedule from './schemas/blocks/event-schedule'
import eventsTease from './schemas/blocks/events-tease'

// People Components
import peopleListing from './schemas/blocks/people-listing'

// Content Components
import table from './schemas/blocks/table'
import timelineTease from './schemas/blocks/timeline-tease'

// New Critical Components
import searchArchive from './schemas/blocks/search-archive'
import quoteCarousel from './schemas/blocks/quote-carousel'
import mediaAssetRow from './schemas/blocks/media-asset-row'
import tagArchive from './schemas/blocks/tag-archive'
import formAssemblyEmbeds from './schemas/blocks/form-assembly-embeds'

// Phase 1 - Core Content Components
import podcastPlayer from './schemas/blocks/podcast-player'
import textCallout from './schemas/blocks/text-callout'
import sideBySideSectionIntro from './schemas/blocks/side-by-side-section-intro'
import threeColumnList from './schemas/blocks/three-column-list'

// Phase 1 - Archive & Search Foundation
import bentoBoxArchive from './schemas/blocks/bento-box-archive'
import eventsArchive from './schemas/blocks/events-archive'
import personArchive from './schemas/blocks/person-archive'
import storyArchive from './schemas/blocks/story-archive'
import searchMultiLinkArchive from './schemas/blocks/search-multi-link-archive'

// Phase 2 - Core Content Blocks
import quoteTestimonial from './schemas/blocks/quote-testimonial'
import sequentialModule from './schemas/blocks/sequential-module'
import truncator from './schemas/blocks/truncator'
import programFinder from './schemas/blocks/program-finder'
import multiFeedTeaseRow from './schemas/blocks/multi-feed-tease-row'

// Phase 3 - User Experience Components
import articleShareTools from './schemas/blocks/article-share-tools'
import newsletterSignup from './schemas/blocks/newsletter-signup'
import searchBox from './schemas/blocks/search-box'
import socialMediaLinks from './schemas/blocks/social-media-links'
import teaseCarousel from './schemas/blocks/tease-carousel'
import hierarchicalTease from './schemas/blocks/hierarchical-tease'

// Phase 4 - Advanced Toppers
import bigArtTopper from './schemas/toppers/big-art-topper'
import courseTopper from './schemas/toppers/course-topper'
import programTopper from './schemas/toppers/program-topper'
import searchTopper from './schemas/toppers/search-topper'
import eventTopper from './schemas/toppers/event-topper'
import missionTopper from './schemas/toppers/mission-topper'

// Phase 5 - Template Singletons
import articleFooter from './schemas/singletons/article-footer'
import relatedPeople from './schemas/singletons/related-people'
import stickyEmailCta from './schemas/singletons/sticky-email-cta'
// Legacy blocks (to be migrated)
import hero from './schemas/blocks/hero'
import accordionSection from './schemas/blocks/accordion-section'
import contentSection from './schemas/blocks/content-section'
import { structure } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3966wvah';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'STIE Dwimulya Website Studio',
  basePath: '/studio',
  projectId: projectId, 
  dataset: dataset,
  plugins: [
    structureTool({ structure }), 
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: typeof(window) === 'undefined' ? 'http://localhost:9002' : window.location.origin,
        draftMode: {
          enable: '/api/draft',
        },
        previewMode: {
          enable: '/api/draft'
        }
      },
      name: 'presentation',
      title: 'Preview',
    }),
  ],
             schema: {
               types: [
            homepage,
            siteSettings,
            navigation,
            wawasan, 
            page,
            // HBS Design System Blocks
            richText,
            multiColumnRichText,
            gridList,
            ctaBanner,
            
            // Statistics Components
            statisticsGroup,
            statisticsRow,
            statisticsCTA,
            
            // Event Components
            eventSchedule,
            eventsTease,
            
            // People Components
            peopleListing,
            
            // Content Components
            table,
            timelineTease,
            
            // New Critical Components
            searchArchive,
            quoteCarousel,
            mediaAssetRow,
            tagArchive,
            formAssemblyEmbeds,
            
            // Phase 1 - Core Content Components
            podcastPlayer,
            textCallout,
            sideBySideSectionIntro,
            threeColumnList,
            
            // Phase 1 - Archive & Search Foundation
            bentoBoxArchive,
            eventsArchive,
            personArchive,
            storyArchive,
            searchMultiLinkArchive,
            
            // Phase 2 - Core Content Blocks
            quoteTestimonial,
            sequentialModule,
            truncator,
            programFinder,
            multiFeedTeaseRow,
            
            // Phase 3 - User Experience Components
            articleShareTools,
            newsletterSignup,
            searchBox,
            socialMediaLinks,
            teaseCarousel,
            hierarchicalTease,
            
            // Phase 4 - Advanced Toppers
            bigArtTopper,
            courseTopper,
            programTopper,
            searchTopper,
            eventTopper,
            missionTopper,
            
            // Phase 5 - Template Singletons
            articleFooter,
            relatedPeople,
            stickyEmailCta,
            
            // Legacy blocks (to be migrated)
            hero,
            accordionSection,
            contentSection
        ],
     },
})
