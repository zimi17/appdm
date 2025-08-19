
"use client";

import { useState } from "react";
import { MissionTopper } from "@/components/blocks/mission-topper/mission-topper";
import { HeroCarousel } from "@/components/blocks/hero-carousel/hero-carousel";
import { HeroStatement } from "@/components/blocks/hero-statement";
import { homePageData } from "./home-data";
import { KeywordScrollLists } from "@/components/blocks/keyword-scroll-lists/keyword-scroll-lists";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { SupportingDetails } from "@/components/blocks/supporting-details/supporting-details";
import { CardGrid } from "@/components/blocks/card-grid/card-grid";

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { missionTopper, infoCards, heroStatement, snowflakes, hierarchicalTease, distinction } = homePageData;

    return (
        <>
            <section className="bg-card">
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                    <MissionTopper 
                        titleParts={missionTopper.titleParts} 
                        activeSlide={activeSlide}
                        setActiveSlide={setActiveSlide}
                        className="col-span-full"
                    />
                </div>
                    <div className="max-w-screen-2xl mx-auto px-6">
                    <HeroCarousel 
                        slides={missionTopper.slides}
                        activeSlide={activeSlide}
                        setActiveSlide={setActiveSlide}
                    />
                </div>
            </section>
            
            <section className="bg-background py-16 md:py-24">
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                    <HeroStatement
                        title={heroStatement.title}
                        description={heroStatement.description}
                        imageUrl={heroStatement.imageUrl}
                        imageHint={heroStatement.imageHint}
                        links={heroStatement.links}
                        className="col-span-full"
                    />
                </div>
            </section>

            <section className="bg-background">
                <KeywordScrollLists keywords={snowflakes.keywords} />
            </section>
            
            <HierarchicalTease
                header={hierarchicalTease.header}
                articles={hierarchicalTease.articles}
                className="bg-secondary text-secondary-foreground"
            />

            <section className="bg-background py-16 md:py-24">
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                    <div className="col-span-full">
                        <CardGrid 
                            title="Pendidikan dinamis dan imersif untuk para pemimpin di setiap tingkatan"
                            items={infoCards}
                            cardClassName="bg-secondary text-secondary-foreground hover:bg-accent"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                    <div className="col-span-full lg:col-span-14 lg:col-start-2">
                        <SupportingDetails
                            header={distinction.header}
                            items={distinction.details.items}
                            mediaAsset={distinction.details.mediaAsset}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
