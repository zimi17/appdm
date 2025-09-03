import { getPageBySlug } from "@/lib/sanity-queries";
import { notFound } from 'next/navigation';
import { RenderBlocks } from '@/components/blocks/render-blocks';
import { RenderToppers } from '@/components/blocks/render-toppers';
import { Breadcrumbs } from "@/components/primitives/breadcrumbs/breadcrumbs";
import { PageHead } from "@/components/primitives/page-head/page-head";
import { urlFor } from "@/lib/sanity-client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Fungsi untuk membuat breadcrumbs dari slug
function generateBreadcrumbs(slugArray: string[]) {
    let currentPath = '';
    const breadcrumbs = slugArray.map((part, index) => {
        currentPath += `/${part}`;
        const isCurrent = index === slugArray.length - 1;
        const title = part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Capitalize
        return { title, link: currentPath, isCurrent };
    });
    return breadcrumbs;
}

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug: slugArray } = await params;
    const slug = slugArray.join('/');
    const pageData = await getPageBySlug(slug);

    if (!pageData) {
        notFound();
    }

    const breadcrumbs = generateBreadcrumbs(slugArray);
    const heroImage = pageData.content?.find((block: any) => block._type === 'hero')?.image ||
                     pageData.topper?.find((topper: any) => topper._type === 'missionTopper')?.slides?.[0]?.image;
    const pageTitle = pageData.metaTitle || pageData.title;

    return (
        <>
            <PageHead
                title={pageTitle + " - STIE Dwimulya"}
                description={pageData.metaDescription}
                image={heroImage ? {
                    src: urlFor(heroImage as SanityImageSource).width(1200).toString(),
                    alt: pageData.title
                } : undefined}
            />
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                <div className="col-span-full">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
            </div>
            <RenderToppers toppers={pageData.topper || []} />
            <RenderBlocks blocks={pageData.content || []} />
        </>
    );
}