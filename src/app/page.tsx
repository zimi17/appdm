
"use client";

import { MissionTopper } from "@/components/toppers/mission-topper/mission-topper";
import { HeroStatement } from "@/components/blocks/hero-statement/hero-statement";
import { homePageData } from "./home-data";
import { KeywordScrollLists } from "@/components/blocks/keyword-scroll-lists/keyword-scroll-lists";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { SupportingDetails } from "@/components/blocks/supporting-details/supporting-details";
import { PageSection } from "@/components/primitives/page-section/page-section";
import { TeaseRow } from "@/components/blocks/tease-row/tease-row";
import { ComponentHeader } from "@/components/primitives/component-header/component-header";

export default function Home() {
    const { missionTopper, programCards, heroStatement, snowflakes, hierarchicalTease, distinction } = homePageData;

    return (
        <main id="main-content">
            <MissionTopper 
              titleParts={missionTopper.titleParts}
              slides={missionTopper.slides}
            />
            
            <div className="landing-page-body__wrapper">
              <PageSection theme="white">
                <ComponentHeader 
                    title="Pendidikan dinamis dan imersif untuk para pemimpin di setiap tingkatan"
                    isSmall={false}
                    className="max-w-4xl"
                />
                <TeaseRow items={programCards} />
              </PageSection>

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
            </div>
        </main>
    );
}
