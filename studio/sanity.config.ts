
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import wawasan from './schemas/wawasan' // Impor skema baru

export default defineConfig({
  name: 'default',
  title: 'studio-website-stie-dwimulya',

  // Ganti dengan projectId dan dataset Anda
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3966wvah', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [wawasan], // Daftarkan skema di sini
  },
})
