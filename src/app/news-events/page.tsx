
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header";
import { SiteFooter } from "@/components/universal/site-footer";
import { HeroSection } from "@/components/blocks/hero-section";
import { ArchivePageFacets, type FacetItem as FacetItemType } from "@/components/primitives/archive-page-facets";
import { newsPageData } from "@/lib/data/pages";
import { AlphabeticalPicker } from "@/components/primitives/alphabetical-picker";
import { DateRangePicker } from "@/components/primitives/date-range-picker";
import { DateRange } from "react-day-picker";

export default function NewsAndEventsPage() {
    const { hero, facets } = newsPageData;
    const [selectedFacets, setSelectedFacets] = useState<Record<string, boolean>>({});
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [dateRange, setDateRange] = useState<DateRange | undefined>();

    const handleFacetChanged = (item: FacetItemType, checked: boolean) => {
        console.log("Facet Changed:", item.name, checked);
        setSelectedFacets(prev => ({
            ...prev,
            [item.value]: checked,
        }));
    };
    
    const handleLetterSelect = (letter: string | null) => {
        console.log("Letter selected:", letter);
        setSelectedLetter(letter);
    }
    
    const handleDateRangeChange = (range: DateRange | undefined) => {
        console.log("Date range selected:", range);
        setDateRange(range);
    }

    const availableLetters = ['A', 'D', 'E', 'F', 'M', 'N', 'P', 'R'];

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
                        <aside className="lg:col-span-1 space-y-8">
                            <ArchivePageFacets 
                                title={facets.title}
                                items={facets.items}
                                onFacetChanged={handleFacetChanged}
                            />
                            <AlphabeticalPicker 
                                availableLetters={availableLetters}
                                onLetterSelect={handleLetterSelect}
                             />
                             <DateRangePicker
                                onRangeChange={handleDateRangeChange}
                             />
                        </aside>
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold mb-8">Hasil Filter</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-lg">Facets:</h3>
                                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto text-sm">
                                        {JSON.stringify(selectedFacets, null, 2)}
                                    </pre>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Alphabetical Picker:</h3>
                                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto text-sm">
                                        {selectedLetter ? `"${selectedLetter}"` : 'null'}
                                    </pre>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Date Range Picker:</h3>
                                    <pre className="mt-2 p-4 bg-muted rounded-md overflow-x-auto text-sm">
                                        {dateRange ? JSON.stringify(dateRange, null, 2) : 'undefined'}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}

