

"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header";
import { MissionTopper } from "@/components/blocks/mission-topper";
import { HeroCarousel } from "@/components/blocks/hero-carousel";
import { InfoCardGrid } from "@/components/blocks/info-card-grid";
import { HeroStatement } from "@/components/blocks/hero-statement";
import { PromoBar } from "@/components/blocks/promo-bar";
import { QuoteSection } from "@/components/blocks/quote-section";
import { CardGrid } from "@/components/blocks/card-grid";
import { SiteFooter } from "@/components/universal/site-footer";
import { homePageData } from "./home-data";
import { Snowflakes } from "@/components/blocks/snowflakes";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease";

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { missionTopper, infoCards, heroStatement, quote, scienceCards, snowflakes, hierarchicalTease } = homePageData;

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
                    titleClassName="font-bold"
                />
                <HeroStatement
                    title={heroStatement.title}
                    description={heroStatement.description}
                    imageUrl={heroStatement.imageUrl}
                    imageHint={heroStatement.imageHint}
                    links={heroStatement.links}
                />
                <Snowflakes keywords={snowflakes.keywords} />
                <HierarchicalTease
                    header={hierarchicalTease.header}
                    articles={hierarchicalTease.articles}
                />
                <PromoBar
                  title="Penerimaan Mahasiswa Baru Telah Dibuka!"
                  description="Jelajahi program studi kami dan temukan bagaimana STIE Dwimulya dapat menjadi langkah awal kesuksesan Anda. Daftar sekarang dan jadilah bagian dari kampus perubahan."
                  linkHref="/admissions"
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
