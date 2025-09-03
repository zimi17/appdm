// src/app/api/disable-draft/route.ts
 
import { draftMode } from 'next/headers'
 
export async function GET(request: Request) {
  const draft = await draftMode()
  draft.disable()
  
  console.log('Draft mode disabled')
  
  return new Response('Draft mode is disabled')
}