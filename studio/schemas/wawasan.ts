import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wawasan',
  title: 'Wawasan & Penelitian',
  type: 'document',
  fields: [
    defineField({
      name: 'overline',
      title: 'Overline',
      type: 'string',
      description: 'Teks singkat di atas judul, cth: "Publikasi Dwimulya"',
    }),
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'string',
      description: 'Informasi penulis dan tanggal, cth: "Oleh Bambang Arianto. Diterbitkan 12 Agustus 2025."',
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'hint',
          title: 'Petunjuk Gambar (Hint)',
          type: 'string',
          description: 'Deskripsi singkat untuk gambar, cth: "small business digital"',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'meta',
      media: 'image',
    },
  },
})
