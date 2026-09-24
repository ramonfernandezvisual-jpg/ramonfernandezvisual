import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Collaborate } from "@/components/portfolio/Collaborate";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
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
          "Dirección visual y producción audiovisual con IA para agencias, productoras y estudios creativos: campañas de producto, personajes y narrativa.",
      },
      { property: "og:title", content: "Ramón Fernández — Dirección visual y producción audiovisual con IA" },
      {
        property: "og:description",
        content:
          "Dirección visual y producción audiovisual con IA para agencias, productoras y estudios creativos: campañas de producto, personajes y narrativa.",
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
      <PortfolioSection />
      <Collaborate />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
