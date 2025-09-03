// src/app/api/draft/route.ts

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable draft mode by setting the cookie
  const draft = await draftMode()
  draft.enable()

  // Redirect to the path from the fetched post
  // If no slug was provided, redirect to the home page
  redirect(slug ? `/${slug}` : '/')
}
