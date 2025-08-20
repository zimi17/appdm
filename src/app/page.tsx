
"use client";

import { useState } from "react";
import { MissionTopper } from "@/components/blocks/mission-topper/mission-topper";
import { HeroStatement } from "@/components/blocks/hero-statement/hero-statement";
import { homePageData } from "./home-data";
import { KeywordScrollLists } from "@/components/blocks/keyword-scroll-lists/keyword-scroll-lists";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { SupportingDetails } from "@/components/blocks/supporting-details/supporting-details";
import { CardGrid } from "@/components/blocks/card-grid/card-grid";

export default function Home() {
    const { missionTopper, programCards, heroStatement, snowflakes, hierarchicalTease, distinction } = homePageData;

    return (
        <>
            <MissionTopper 
              titleParts={missionTopper.titleParts}
              slides={missionTopper.slides}
            />
            
            <section className="bg-background py-16 md:py-24">
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
                    <div className="col-span-full">
                        <CardGrid 
                            items={programCards}
                            cardClassName="bg-card text-card-foreground hover:bg-secondary hover:text-secondary-foreground"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-background pb-16 md:pb-24">
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
            />
            
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
