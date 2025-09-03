import {defineField, defineType} from 'sanity'
import {ContentGenerator} from '../../src/components/ai/ContentGenerator'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'General Page', value: 'general'},
          {title: 'Academics', value: 'academics'},
          {title: 'Research', value: 'research'},
          {title: 'Student Affairs', value: 'student-affairs'},
          {title: 'Services', value: 'services'},
          {title: 'About', value: 'about'},
          {title: 'Admissions', value: 'admissions'},
          {title: 'News & Events', value: 'news-events'},
          {title: 'Registration', value: 'registration'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    // Backwards-compatible fields for legacy documents
    defineField({
      name: 'imageUrl',
      title: 'Legacy Image URL',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'imageHint',
      title: 'Legacy Image Hint',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'topper',
      title: 'Page Topper',
      type: 'array',
      description: 'Required component to start the page (HBS Design System)',
      of: [
        {type: 'bigArtTopper'},
        {type: 'courseTopper'},
        {type: 'programTopper'},
        {type: 'searchTopper'},
        {type: 'eventTopper'},
        {type: 'missionTopper'},
      ],
      validation: (rule) => rule.required().max(1),
    }),
    defineField({
      name: 'singletons',
      title: 'Page Singletons',
      type: 'array',
      description: 'Template-specific singleton components (HBS Design System)',
      of: [
        {type: 'articleFooter'},
        {type: 'relatedPeople'},
        {type: 'stickyEmailCta'},
      ],
    }),
    defineField({
      name: 'content',
      title: 'Page Content Blocks',
      type: 'array',
      description: 'Content blocks following HBS Design System',
      of: [
        // Proper HBS Blocks
        {type: 'richText'},
        {type: 'multiColumnRichText'},
        {type: 'gridList'},
        {type: 'ctaBanner'},
        
        // Statistics Components
        {type: 'statisticsGroup'},
        {type: 'statisticsRow'},
        {type: 'statisticsCTA'},
        
        // Event Components
        {type: 'eventSchedule'},
        {type: 'eventsTease'},
        
        // People Components
        {type: 'peopleListing'},
        
        // Content Components
        {type: 'table'},
        {type: 'timelineTease'},
        
        // New Critical Components
        {type: 'searchArchive'},
        {type: 'quoteCarousel'},
        {type: 'mediaAssetRow'},
        {type: 'tagArchive'},
        {type: 'formAssemblyEmbeds'},
        
        // Phase 1 - Core Content Components
        {type: 'podcastPlayer'},
        {type: 'textCallout'},
        {type: 'sideBySideSectionIntro'},
        {type: 'threeColumnList'},
        
        // Phase 1 - Archive & Search Foundation
        {type: 'bentoBoxArchive'},
        {type: 'eventsArchive'},
        {type: 'personArchive'},
        {type: 'storyArchive'},
        {type: 'searchMultiLinkArchive'},
        
        // Phase 2 - Core Content Blocks
        {type: 'quoteTestimonial'},
        {type: 'sequentialModule'},
        {type: 'truncator'},
        {type: 'programFinder'},
        {type: 'multiFeedTeaseRow'},
        
        // Phase 3 - User Experience Components
        {type: 'articleShareTools'},
        {type: 'newsletterSignup'},
        {type: 'searchBox'},
        {type: 'socialMediaLinks'},
        {type: 'teaseCarousel'},
        {type: 'hierarchicalTease'},
        
        // Legacy components (to be migrated)
        {type: 'hero'},
        {type: 'contentSection'},
      ],
    }),
    defineField({
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        description: 'Deskripsi singkat untuk SEO, akan muncul di hasil pencarian Google.',
        components: {
            input: ContentGenerator
        }
    }),
    defineField({
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
        description: 'Judul untuk SEO, jika kosong akan menggunakan title halaman.'
    }),
    defineField({
        name: 'isPublished',
        title: 'Published',
        type: 'boolean',
        description: 'Set to true to make this page visible on the website',
        initialValue: true,
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        description: 'When this page was published',
        readOnly: true,
        hidden: true,
    }),
    defineField({
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        description: 'When this page was created',
        readOnly: true,
        hidden: true,
    }),
    defineField({
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
        description: 'When this page was last updated',
        readOnly: true,
        hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      pageType: 'pageType',
      isPublished: 'isPublished',
    },
    prepare({title, slug, pageType, isPublished}) {
      const status = isPublished ? '✅' : '(Draft) 📝'
      return {
        title,
        subtitle: `${pageType} - ${slug === 'home' ? '/' : `/${slug}`} ${status}`,
        media: undefined,
      }
    }
  },
})
