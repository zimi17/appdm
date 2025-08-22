
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import wawasan from './schemas/wawasan'

// IMPORTANT: This configuration is for the Sanity Studio and should not depend
// on Next.js environment variables. You should replace the placeholder values
// here with your actual Sanity project ID and dataset.
const projectId = '3966wvah'; // Ganti dengan ID proyek Sanity Anda
const dataset = 'production'; // Ganti dengan dataset Sanity Anda

export default defineConfig({
  name: 'default',
  title: 'STIE Dwimulya Website Studio',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [wawasan],
  },
})
