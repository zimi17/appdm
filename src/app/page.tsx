
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f4]">
      <Header />
      <main id="main-content">
        <HeroSection />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}
