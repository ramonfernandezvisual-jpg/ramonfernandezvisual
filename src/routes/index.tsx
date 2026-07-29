import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramón Fernández — Visual Designer & AI Video Creator" },
      {
        name: "description",
        content:
          "Portfolio visual multidisciplinar de Ramón Fernández: arquitectura, IA, avatares, narrativa, edición y comunicación técnica.",
      },
      { property: "og:title", content: "Ramón Fernández — Visual Designer & AI Video Creator" },
      {
        property: "og:description",
        content:
          "Portfolio visual multidisciplinar de Ramón Fernández: arquitectura, IA, avatares, narrativa, edición y comunicación técnica.",
      },
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
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
