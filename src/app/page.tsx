
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header";
import { MissionTopper } from "@/components/blocks/mission-topper";
import { HeroCarousel } from "@/components/blocks/hero-carousel";
import { CardGrid } from "@/components/blocks/card-grid";
import { PromoBar } from "@/components/blocks/promo-bar";
import { QuoteSection } from "@/components/blocks/quote-section";
import { InfoCardGrid } from "@/components/blocks/info-card-grid";
import { SiteFooter } from "@/components/universal/site-footer";
import { missionTopperData, infoCards, quote, scienceCards } from "@/lib/data";

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main id="main-content">
                <MissionTopper 
                    titleParts={missionTopperData.titleParts} 
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
                <HeroCarousel 
                    slides={missionTopperData.slides}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
                <InfoCardGrid 
                    title="Pendidikan dinamis dan imersif untuk para pemimpin di setiap tingkatan"
                    items={infoCards}
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
