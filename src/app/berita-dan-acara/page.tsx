
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header/site-header";
import { SiteFooter } from "@/components/universal/site-footer/site-footer";
import { HeroSection } from "@/components/blocks/hero-section/hero-section";
import { ArchivePageFacets, type FacetItem as FacetItemType } from "@/components/primitives/archive-page-facets/archive-page-facets";
import { newsPageData, mockNews } from "./berita-dan-acara-data";
import { AlphabeticalPicker } from "@/components/primitives/alphabetical-picker/alphabetical-picker";
import { DateRangePicker } from "@/components/primitives/date-range-picker/date-range-picker";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/primitives/pagination/pagination";
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
                <div className="max-w-screen-2xl mx-auto px-6">
                    <Breadcrumbs breadcrumbs={breadcrumbs}/>
                </div>
                 <HeroSection 
                    title={hero.title}
                    description={hero.description}
                    imageUrl={hero.imageUrl}
                    imageHint={hero.imageHint}
                />
                
                <div className="max-w-screen-2xl mx-auto px-6 py-16 md:py-24">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <aside className="lg:col-span-3 space-y-8 self-start sticky top-28">
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
                        <div className="lg:col-span-9">
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
