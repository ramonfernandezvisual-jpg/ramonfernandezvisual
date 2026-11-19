import { createFileRoute } from "@tanstack/react-router";
import { personLd } from "@/lib/seo";
import { PortfolioPage } from "@/components/portfolio/Page";

const shareCoverUrl = "https://ramonfernandezvisual.com/share-cover.jpg";

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
      { property: "og:url", content: "https://ramonfernandezvisual.com/" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: shareCoverUrl },
      { name: "twitter:image", content: shareCoverUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Portada actual de Ramón Fernández — Dirección visual" },
    ],
    scripts: [{ type: "application/ld+json", children: personLd("es") }],
    links: [
      { rel: "canonical", href: "https://ramonfernandezvisual.com/" },
      { rel: "alternate", hrefLang: "es", href: "https://ramonfernandezvisual.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://ramonfernandezvisual.com/en/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://ramonfernandezvisual.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioPage lang="es" />;
}
