
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header";
import { SiteFooter } from "@/components/universal/site-footer";
import { HeroSection } from "@/components/blocks/hero-section";
import { ArchivePageFacets, type FacetItem as FacetItemType } from "@/components/primitives/archive-page-facets";
import { newsPageData, mockNews } from "./news-events-data";
import { AlphabeticalPicker } from "@/components/primitives/alphabetical-picker";
import { DateRangePicker } from "@/components/primitives/date-range-picker";
import { DateRange } from "react-day-picker";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/primitives/pagination";
import { Card } from "@/components/ui/card";
import { LazyImage } from "@/components/primitives/lazy-image";
import Link from "next/link";


function NewsCard({ article }: { article: any }) {
    return (
        <Card className="overflow-hidden flex flex-col group">
            <LazyImage src={article.image} alt={article.title} className="aspect-[4/3]" imageClassName="group-hover:scale-105 transition-transform duration-300 object-cover" data-ai-hint={article.imageHint} fill/>
            <div className="p-6 flex-grow flex flex-col">
                <span className="text-sm text-primary font-semibold mb-2">{article.category}</span>
                <h3 className="text-xl font-bold font-headline mb-4">{article.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{article.description}</p>
                <Link href="#" className="font-semibold text-primary hover:underline self-start">Read More</Link>
            </div>
        </Card>
    );
}

export default function NewsAndEventsPage() {
    const { hero, facets } = newsPageData;
    const [selectedFacets, setSelectedFacets] = useState<Record<string, boolean>>({});
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(mockNews.length / itemsPerPage);

    const handleFacetChanged = (item: FacetItemType, checked: boolean) => {
        setSelectedFacets(prev => ({
            ...prev,
            [item.value]: checked,
        }));
    };
    
    const handleLetterSelect = (letter: string | null) => {
        setSelectedLetter(letter);
    }
    
    const handleDateRangeChange = (range: DateRange | undefined) => {
        setDateRange(range);
    }
    
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }

    const paginatedNews = mockNews.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const renderPagination = () => {
        const pageNumbers = [];
        const ellipsis = <PaginationItem key="ellipsis"><PaginationEllipsis /></PaginationItem>;

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <PaginationItem key={i}>
                        <PaginationLink href="#" isActive={i === currentPage} onClick={() => handlePageChange(i)}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            pageNumbers.push(
                <PaginationItem key={1}>
                    <PaginationLink href="#" isActive={1 === currentPage} onClick={() => handlePageChange(1)}>1</PaginationLink>
                </PaginationItem>
            );

            if (currentPage > 3) {
                pageNumbers.push(ellipsis);
            }
            
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            if(currentPage <= 3) {
              startPage = 2;
              endPage = 4;
            }

            if(currentPage >= totalPages - 2) {
              startPage = totalPages - 3;
              endPage = totalPages - 1;
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <PaginationItem key={i}>
                        <PaginationLink href="#" isActive={i === currentPage} onClick={() => handlePageChange(i)}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }

            if (currentPage < totalPages - 2) {
                pageNumbers.push(ellipsis);
            }

            pageNumbers.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink href="#" isActive={totalPages === currentPage} onClick={() => handlePageChange(totalPages)}>{totalPages}</PaginationLink>
                </PaginationItem>
            );
        }

        return (
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
                    </PaginationItem>
                    {pageNumbers}
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        );
    }

    const availableLetters = Array.from(new Set(mockNews.map(item => item.title.charAt(0).toUpperCase()))).sort();

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
                        <aside className="lg:col-span-1 space-y-8 self-start sticky top-28">
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
                             <div className="grid md:grid-cols-2 gap-8">
                                {paginatedNews.map(article => <NewsCard key={article.id} article={article}/>)}
                            </div>
                            <div className="mt-16">
                                {renderPagination()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}

