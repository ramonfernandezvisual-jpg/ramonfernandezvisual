export function personLd(lang: "es" | "en") {
  const es = lang === "es";
  const url = es ? "https://ramonfernandezvisual.com/" : "https://ramonfernandezvisual.com/en";
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ramonfernandezvisual.com/#persona",
        name: "Ramón Fernández",
        url,
        jobTitle: es ? "Dirección visual y producción audiovisual" : "Visual direction and audiovisual production",
        description: es
          ? "Dirección visual, producción audiovisual y edición para agencias, productoras y marcas."
          : "Visual direction, audiovisual production and editing for agencies, production companies and brands.",
        knowsAbout: es
          ? ["Cortometrajes", "Spots", "Personajes", "Edición", "Arquitectura e interiorismo"]
          : ["Short films", "Spots", "Characters", "Editing", "Architecture and interior design"],
        sameAs: [
          "https://www.linkedin.com/in/ramon-fdez/",
          "https://www.instagram.com/ramonfernandez.visual",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ramonfernandezvisual.com/#web",
        url: "https://ramonfernandezvisual.com/",
        name: "Ramón Fernández",
        inLanguage: es ? "es" : "en",
        publisher: { "@id": "https://ramonfernandezvisual.com/#persona" },
      },
    ],
  });
}
