import { client, urlFor } from "@/lib/sanity-client";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { homePageData } from "../home-data"; // We still need the header from here

// Define the type for the data we'll fetch
export interface SanityPost {
  _id: string;
  title: string;
  overline: string;
  meta: string;
  hint: string;
  image: any; // Sanity image type
  // href will be built manually if needed
}

const POSTS_QUERY = `*[_type == "post"]|order(publishedAt desc)[0...4]{
  _id,
  title,
  overline,
  meta,
  hint,
  image
}`;

export async function SanityHierarchicalTease() {
  const sanityArticles = await client.fetch<SanityPost[]>(POSTS_QUERY);

  // Transform Sanity data to match the format expected by the HierarchicalTease component
  const transformedArticles = sanityArticles.map(article => ({
    ...article,
    href: "#", // Or build a URL from a slug if you have one
    // Important: convert the Sanity image object to a string URL
    image: article.image ? urlFor(article.image).width(800).height(600).url() : "https://placehold.co/800x600.png"
  }));

  // Ensure we have 4 articles for the tease, using placeholders if necessary
  while (transformedArticles.length < 4) {
    transformedArticles.push({
      _id: `placeholder-${transformedArticles.length}`,
      title: "Judul Artikel Placeholder",
      overline: "Kategori",
      meta: "Meta placeholder",
      hint: "placeholder",
      image: "https://placehold.co/800x600.png",
      href: "#",
    });
  }

  return (
    <HierarchicalTease
      header={homePageData.hierarchicalTease.header}
      articles={transformedArticles}
    />
  );
}
