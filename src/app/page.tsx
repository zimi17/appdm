import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CoreValuesSection } from "@/components/core-values-section";
import { ProgramsSection } from "@/components/programs-section";
import { AdmissionsSection } from "@/components/admissions-section";
import { NewsSection } from "@/components/news-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CoreValuesSection />
        <ProgramsSection />
        <AdmissionsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
