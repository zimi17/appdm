import { defineType } from 'sanity';

export default defineType({
  name: 'podcastPlayer',
  title: 'Podcast Player',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the podcast player section'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional description for the podcast player section'
    },
    {
      name: 'audioSrc',
      title: 'Audio Source',
      type: 'url',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      }),
      description: 'URL to the audio file'
    },
    {
      name: 'episodeTitle',
      title: 'Episode Title',
      type: 'string',
      description: 'Title of the podcast episode'
    },
    {
      name: 'episodeDescription',
      title: 'Episode Description',
      type: 'text',
      rows: 3,
      description: 'Description of the podcast episode'
    },
    {
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
      description: 'Duration of the episode in seconds (optional, will be auto-detected)'
    },
    {
      name: 'showControls',
      title: 'Show Controls',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show player controls'
    },
    {
      name: 'showDownload',
      title: 'Show Download Button',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show download button'
    },
    {
      name: 'showShare',
      title: 'Show Share Button',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to show share button'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
      description: 'Whether to autoplay the audio'
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
      episodeTitle: 'episodeTitle',
      audioSrc: 'audioSrc'
    },
    prepare({ title, episodeTitle, audioSrc }) {
      return {
        title: title || 'Podcast Player',
        subtitle: episodeTitle || audioSrc || 'No episode title'
      };
    }
  }
});
