
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  console.warn("Sanity projectId or dataset not set. Check your .env.local file.");
}

export const client = createClient({
  projectId: projectId || "3966wvah", // Fallback, ganti dengan ID Anda
  dataset: dataset || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  if (!source) {
    // Return a builder-like object that won't crash when chained
    return {
      width: () => ({
        height: () => ({
          url: () => "https://placehold.co/800x600.png"
        })
      })
    };
  }
  return builder.image(source)
}
