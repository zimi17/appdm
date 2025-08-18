
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header";
import { SiteFooter } from "@/components/universal/site-footer";
import { HeroSection } from "@/components/blocks/hero-section";
import { ArchivePageFacets, type FacetItem as FacetItemType } from "@/components/primitives/archive-page-facets";
import { newsPageData } from "@/lib/data";

export default function NewsAndEventsPage() {
    const { hero, facets } = newsPageData;
    const [selectedFacets, setSelectedFacets] = useState<Record<string, boolean>>({});

    const handleFacetChanged = (item: FacetItemType, checked: boolean) => {
        console.log("Facet Changed:", item.name, checked);
        setSelectedFacets(prev => ({
            ...prev,
            [item.value]: checked,
        }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main id="main-content">
                <HeroSection 
                    title={hero.title}
                    description={hero.description}
                    imageUrl={hero.imageUrl}
                    imageHint={hero.imageHint}
                />
                <div className="container mx-auto px-6 py-16 md:py-24">
                    <div className="grid lg:grid-cols-4 gap-12">
                        <aside className="lg:col-span-1">
                            <ArchivePageFacets 
                                title={facets.title}
                                items={facets.items}
                                onFacetChanged={handleFacetChanged}
                            />
                        </aside>
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold mb-8">Hasil Filter</h2>
                            <p className="text-muted-foreground">Konten yang difilter akan ditampilkan di sini.</p>
                            <pre className="mt-4 p-4 bg-muted rounded-md overflow-x-auto text-sm">
                                {JSON.stringify(selectedFacets, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
