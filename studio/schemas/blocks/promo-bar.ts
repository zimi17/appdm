import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'promoBar',
  title: 'Promo Bar',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),
    defineField({name: 'linkText', title: 'Link Text', type: 'string'}),
    defineField({name: 'linkHref', title: 'Link Href', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Promo Bar',
        subtitle: 'Promo Bar',
      }
    },
  },
})
