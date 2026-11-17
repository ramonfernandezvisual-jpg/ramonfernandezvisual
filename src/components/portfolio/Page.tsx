import { About } from "@/components/portfolio/About";
import { Collaborate } from "@/components/portfolio/Collaborate";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { FAQ, Manifesto, Process, Reveal } from "@/components/portfolio/Extras";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { Services } from "@/components/portfolio/Services";
import { LangProvider, type Lang } from "@/lib/i18n";

export function PortfolioPage({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <main style={{ backgroundColor: "#080808" }}>
        <CustomCursor />
        <Header />
        <Hero />
        <Reveal><Manifesto /></Reveal>
        <PortfolioSection />
        <Reveal><Services /></Reveal>
        <Reveal><Collaborate /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><Contact /></Reveal>
        <Footer />
      </main>
    </LangProvider>
  );
}
