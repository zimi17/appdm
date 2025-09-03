
import { getPageBySlug } from "@/lib/sanity-queries";
import { notFound } from 'next/navigation';
import { RenderBlocks } from '@/components/blocks/render-blocks';
import { Breadcrumbs } from "@/components/primitives/breadcrumbs/breadcrumbs";
import { PageHead } from "@/components/primitives/page-head/page-head";
import { urlFor } from "@/lib/sanity-client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function Academics() {
    const pageData = await getPageBySlug('akademik');

    if (!pageData) {
        notFound();
    }

    const breadcrumbs = [{ title: "Akademik", link: "/akademik", isCurrent: true }];
    const heroImage = pageData.content?.find(block => block._type === 'hero')?.image;

    return (
        <>
            <PageHead
                title={pageData.title + " - STIE Dwimulya"}
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
            <RenderBlocks blocks={pageData.content} />
        </>
    );
}
