import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'twoColumnContent'},
        {type: 'cardGrid'},
        {type: 'accordionSection'},
        {type: 'promoBar'},
        // Tambahkan tipe blok lain di sini saat dibuat
      ],
    }),
    defineField({
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        description: 'Deskripsi singkat untuk SEO, akan muncul di hasil pencarian Google.'
    })
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title,
        subtitle: slug === 'home' ? '/' : `/${slug}`,
      }
    }
  }
})
