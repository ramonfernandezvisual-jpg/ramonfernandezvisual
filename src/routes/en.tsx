import { createFileRoute } from "@tanstack/react-router";
import { personLd } from "@/lib/seo";
import { PortfolioPage } from "@/components/portfolio/Page";

const shareCoverUrl = "https://ramonfernandezvisual.com/share-cover.jpg";
const TITLE = "Ramón Fernández — Visual direction and AI audiovisual production";
const DESCRIPTION =
  "Visual direction, AI audiovisual production and editing for agencies, production companies and creative studios.";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ramonfernandezvisual.com/en" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:image", content: shareCoverUrl },
      { name: "twitter:image", content: shareCoverUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    scripts: [{ type: "application/ld+json", children: personLd("en") }],
    links: [
      { rel: "canonical", href: "https://ramonfernandezvisual.com/en" },
      { rel: "alternate", hrefLang: "es", href: "https://ramonfernandezvisual.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://ramonfernandezvisual.com/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://ramonfernandezvisual.com/" },
    ],
  }),
  component: EnglishPage,
});

function EnglishPage() {
  return <PortfolioPage lang="en" />;
}
