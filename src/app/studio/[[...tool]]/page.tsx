/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
'use client'

import { NextStudio } from 'next-sanity/studio'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'

// Define a minimal config for testing first
const config = defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3966wvah',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'website',
  title: 'STIE Dwimulya Website Studio',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:9002',
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],
  schema: {
    types: [],
  },
})



export default function StudioPage() {
  return <NextStudio config={config} />
}
