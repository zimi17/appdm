
import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = "2024-01-01";


if (!projectId || !dataset) {
  console.warn("Sanity projectId or dataset not set. Check your .env.local file.");
}

export const client = createClient({
  projectId: projectId || "3966wvah", // Fallback, ganti dengan ID Anda
  dataset: dataset || "production",
  apiVersion: apiVersion,
  useCdn: false, // Penting untuk pratinjau, selalu ambil data terbaru
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

let previewClient: SanityClient | null = null;
export const getPreviewClient = () => {
  if (previewClient) return previewClient;

  // This is a lazy-loaded, singleton pattern to avoid creating a new client on every request.
  return (previewClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    // This is the important part!
    // The Visual Editing Overlay will be used to authenticate the user.
    // Give it a descriptive name, you'll see it in the Sanity Manage dashboard.
    studioUrl: '/studio',
    logger: console,
    // The app should be a good citizen and share its app name.
    // This helps debugging and staying on top of API usage.
    fetch: {
      tags: {
        // The value of this tag is not important.
        // It's used to group all requests from this app together.
        "next-sanity": "my-app",
      },
    },
  }));
};
