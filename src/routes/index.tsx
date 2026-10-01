import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Collaborate } from "@/components/portfolio/Collaborate";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { FAQ, Manifesto, Process, Reveal } from "@/components/portfolio/Extras";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramón Fernández — Dirección visual y producción audiovisual con IA" },
      {
        name: "description",
        content:
          "Dirección visual, producción audiovisual con IA y edición para agencias, productoras y estudios creativos.",
      },
      { property: "og:title", content: "Ramón Fernández — Dirección visual y producción audiovisual con IA" },
      {
        property: "og:description",
        content:
          "Dirección visual, producción audiovisual con IA y edición para agencias, productoras y estudios creativos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ backgroundColor: "#080808" }}>
      <CustomCursor />
      <Header />
      <Hero />
      <Reveal><Manifesto /></Reveal>
      <PortfolioSection />
      <Reveal><Collaborate /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  );
}
