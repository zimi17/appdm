import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3966wvah';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  project: {
    basePath: '/studio'
  },
  // Tells the CLI that the studio configuration is in the /studio directory
  vite: (config) => ({
    ...config,
    root: __dirname + '/studio',
  }),
})