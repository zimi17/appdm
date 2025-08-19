
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header/site-header";
import { MissionTopper } from "@/components/blocks/mission-topper/mission-topper";
import { HeroCarousel } from "@/components/blocks/hero-carousel/hero-carousel";
import { InfoCardGrid } from "@/components/blocks/info-card-grid/info-card-grid";
import { HeroStatement } from "@/components/blocks/hero-statement/hero-statement";
import { PromoBar } from "@/components/blocks/promo-bar/promo-bar";
import { QuoteSection } from "@/components/blocks/quote-section/quote-section";
import { CardGrid } from "@/components/blocks/card-grid/card-grid";
import { SiteFooter } from "@/components/universal/site-footer/site-footer";
import { homePageData } from "./home-data";
import { KeywordScrollLists } from "@/components/blocks/keyword-scroll-lists/keyword-scroll-lists";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { SectionHeader } from "@/components/blocks/section-header/section-header";
import { SupportingDetails } from "@/components/blocks/supporting-details/supporting-details";

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { missionTopper, infoCards, heroStatement, quote, scienceCards, snowflakes, hierarchicalTease, distinction } = homePageData;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main id="main-content">
                <MissionTopper 
                    titleParts={missionTopper.titleParts} 
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
                <HeroCarousel 
                    slides={missionTopper.slides}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
                <InfoCardGrid 
                    title="Pendidikan dinamis dan imersif untuk para pemimpin di setiap tingkatan"
                    items={infoCards}
                />
                <HeroStatement
                    title={heroStatement.title}
                    description={heroStatement.description}
                    imageUrl={heroStatement.imageUrl}
                    imageHint={heroStatement.imageHint}
                    links={heroStatement.links}
                />
                <KeywordScrollLists keywords={snowflakes.keywords} />
                <HierarchicalTease
                    header={hierarchicalTease.header}
                    articles={hierarchicalTease.articles}
                />
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <SectionHeader 
                            title={distinction.header.title}
                            description={distinction.header.description}
                            cta={distinction.header.cta}
                        />
                        <SupportingDetails
                            items={distinction.details.items}
                            mediaAsset={distinction.details.mediaAsset}
                        />
                    </div>
                </section>
                <PromoBar
                  title="Penerimaan Mahasiswa Baru Telah Dibuka!"
                  description="Jelajahi program studi kami dan temukan bagaimana STIE Dwimulya dapat menjadi langkah awal kesuksesan Anda. Daftar sekarang dan jadilah bagian dari kampus perubahan."
                  linkHref="/pendaftaran"
                  linkText="Info Pendaftaran"
                />
                <QuoteSection
                  quote={quote.text}
                  author={quote.author}
                  role={quote.role}
                  imageUrl={quote.imageUrl}
                  imageHint={quote.imageHint}
                  linkHref={quote.linkHref}
                  linkText={quote.linkText}
                />
                 <CardGrid 
                    title="Sorotan Akademik"
                    items={scienceCards}
                    className="bg-secondary"
                    titleClassName="text-white"
                    hrClassName="border-white"
                />
            </main>
            <SiteFooter />
        </div>
    );
}
