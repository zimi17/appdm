
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header/site-header";
import { SiteFooter } from "@/components/universal/site-footer/site-footer";
import { HeroSection } from "@/components/blocks/hero-section/hero-section";
import { ArchivePageFacets, type FacetItem as FacetItemType } from "@/components/primitives/archive-page-facets";
import { newsPageData, mockNews } from "./berita-dan-acara-data";
import { AlphabeticalPicker } from "@/components/primitives/alphabetical-picker";
import { DateRangePicker } from "@/components/primitives/date-range-picker";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";
import { Breadcrumbs } from "@/components/primitives/breadcrumbs/breadcrumbs";
import { ArticleTease } from "@/components/primitives/article-tease/article-tease";

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
}

export default function NewsAndEventsPage() {
    const { hero, facets } = newsPageData;
    const [selectedFacets, setSelectedFacets] = useState<Record<string, boolean>>({});
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(mockNews.length / itemsPerPage);
    const breadcrumbs = [{ title: "Berita & Acara", link: "/berita-dan-acara", isCurrent: true }];

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
                        <PaginationLink href="#" isActive={i === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(i)}}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            pageNumbers.push(
                <PaginationItem key={1}>
                    <PaginationLink href="#" isActive={1 === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(1)}}>1</PaginationLink>
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
                        <PaginationLink href="#" isActive={i === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(i)}}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }

            if (currentPage < totalPages - 2) {
                pageNumbers.push(ellipsis);
            }

            pageNumbers.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink href="#" isActive={totalPages === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(totalPages)}}>{totalPages}</PaginationLink>
                </PaginationItem>
            );
        }

        return (
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(Math.max(1, currentPage - 1))}} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
                    </PaginationItem>
                    {pageNumbers}
                    <PaginationItem>
                        <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(Math.min(totalPages, currentPage + 1))}} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}/>
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
                <div className="px-6">
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                </div>
                 <HeroSection 
                    title={hero.title}
                    description={hero.description}
                    imageUrl={hero.imageUrl}
                    imageHint={hero.imageHint}
                />
                
                <div className="py-16 md:py-24">
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                        <aside className="col-span-full lg:col-span-4 space-y-8 self-start sticky top-28">
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
                        <div className="col-span-full lg:col-span-12 mt-12 lg:mt-0">
                                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {paginatedNews.map(article => (
                                    <ArticleTease
                                        key={article.id}
                                        type="Article"
                                        title={article.title}
                                        tease={article.description}
                                        link="#"
                                        image={{src: article.image, alt: article.title, hint: article.imageHint}}
                                        overline={{label: article.category}}
                                        byline={{ publicationDate: "2024-08-15T12:00:00Z" }}
                                    />
                                ))}
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
