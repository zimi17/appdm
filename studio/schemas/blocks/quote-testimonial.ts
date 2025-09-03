import { defineType } from 'sanity';

export default defineType({
  name: 'quoteTestimonial',
  title: 'Quote Testimonial',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the quote testimonial section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the quote testimonial section'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required()
            },
            {
              name: 'author',
              title: 'Author Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Author Title',
              type: 'string'
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Author Image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'hint',
                  title: 'Image Hint',
                  type: 'string'
                }
              ]
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: Rule => Rule.min(1).max(5),
              description: 'Rating from 1 to 5 stars'
            }
          ],
          preview: {
            select: {
              title: 'author',
              subtitle: 'quote',
              media: 'image'
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled Testimonial',
                subtitle: subtitle ? subtitle.substring(0, 100) + '...' : 'No quote',
                media: media
              };
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1),
      description: 'Collection of testimonials to display'
    },
    {
      name: 'variant',
      title: 'Display Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Single', value: 'single' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Grid', value: 'grid' }
        ]
      },
      initialValue: 'carousel'
    },
    {
      name: 'showIndicators',
      title: 'Show Indicators',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show carousel indicators'
    },
    {
      name: 'showNavigation',
      title: 'Show Navigation',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show navigation arrows'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to autoplay the carousel'
    },
    {
      name: 'autoplayInterval',
      title: 'Autoplay Interval (ms)',
      type: 'number',
      initialValue: 5000,
      description: 'Time between slides in milliseconds'
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
          { title: 'Accent', value: 'accent' }
        ]
      },
      initialValue: 'default'
    }
  ],
  preview: {
    select: {
      title: 'title',
      testimonials: 'testimonials'
    },
    prepare({ title, testimonials }) {
      const testimonialCount = testimonials ? testimonials.length : 0;
      return {
        title: title || 'Quote Testimonial',
        subtitle: `${testimonialCount} testimonial${testimonialCount !== 1 ? 's' : ''}`
      };
    }
  }
});
