
"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/universal/site-header/site-header";
import { MissionTopper } from "@/components/blocks/mission-topper/mission-topper";
import { HeroCarousel } from "@/components/blocks/hero-carousel/hero-carousel";
import { InfoCardGrid } from "@/components/blocks/info-card-grid/info-card-grid";
import { HeroStatement } from "@/components/blocks/hero-statement";
import { SiteFooter } from "@/components/universal/site-footer/site-footer";
import { homePageData } from "./home-data";
import { KeywordScrollLists } from "@/components/blocks/keyword-scroll-lists/keyword-scroll-lists";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease";
import { SectionHeader } from "@/components/blocks/section-header";
import { SupportingDetails } from "@/components/blocks/supporting-details";

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { missionTopper, infoCards, heroStatement, snowflakes, hierarchicalTease, distinction } = homePageData;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main id="main-content">
                <section className="col-span-full">
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                        <MissionTopper 
                            titleParts={missionTopper.titleParts} 
                            activeSlide={activeSlide}
                            setActiveSlide={setActiveSlide}
                            className="col-span-full"
                        />
                    </div>
                    <HeroCarousel 
                        slides={missionTopper.slides}
                        activeSlide={activeSlide}
                        setActiveSlide={setActiveSlide}
                    />
                </section>
                
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
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                        <div className="col-span-full">
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
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
