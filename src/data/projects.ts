import area01 from "@/assets/area-01.jpg";
import area02 from "@/assets/area-02.jpg";
import area03 from "@/assets/area-03.jpg";
import area04 from "@/assets/area-04.jpg";
import area05 from "@/assets/area-05.jpg";
import cover01 from "@/assets/covers/p01.asset.json";
import coverSilence from "@/assets/covers/p15.asset.json";
import coverNico from "@/assets/covers/nico.asset.json";
import cover04 from "@/assets/covers/p04.asset.json";
import cover05 from "@/assets/covers/p05.asset.json";
import cover06 from "@/assets/covers/p06.asset.json";
import cover07 from "@/assets/covers/p07.asset.json";
import cover08 from "@/assets/covers/p08.asset.json";
import cover09 from "@/assets/covers/p09.asset.json";
import cover10 from "@/assets/covers/p10.asset.json";
import cover11 from "@/assets/covers/p11.asset.json";
import coverLic from "@/assets/covers/p_lic.asset.json";
import coverLap from "@/assets/covers/p_lap.asset.json";
import cover27 from "@/assets/covers/p27-nueva.asset.json";
import coverLevis from "@/assets/covers/levis-drugstore.png.asset.json";
import coverBarcino from "@/assets/covers/perfume-frasco.webp.asset.json";




export type Orientation = "horizontal" | "vertical";
export type AreaId = "01" | "02" | "03" | "04" | "05";

export type Project = {
  id: string;
  number: string; // 01..14
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  orientation: Orientation; // 16:9 vs 9:16
  cover: string; // portada personalizada (independiente de YouTube)
  youtubeUrl: string; // URL completa; vacía = pendiente
  area: AreaId;
  metaLine?: string; // línea editorial personalizada bajo la portada
};


export type Area = {
  id: AreaId;
  title: string;
  subtitle: string;
  slug: string;
  projects: Project[];
};

/** Extrae el ID de YouTube desde cualquier formato (shorts, youtu.be, watch?v=, embed). */
export function getYoutubeId(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0] || null;
    const parts = u.pathname.split("/").filter(Boolean);
    const shortsIdx = parts.indexOf("shorts");
    if (shortsIdx >= 0 && parts[shortsIdx + 1]) return parts[shortsIdx + 1];
    const embedIdx = parts.indexOf("embed");
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];
    const v = u.searchParams.get("v");
    if (v) return v;
    return null;
  } catch {
    return null;
  }
}

// Portadas provisionales (placeholders neutros hasta recibir las definitivas).
// Sustituir individualmente en el campo `cover` de cada proyecto.
const PENDING_H = area01; // 16:9 placeholder
const PENDING_V = area02; // 9:16 placeholder

const DEFAULTS = {
  year: "2025",
  role: "Dirección visual, edición",
  description:
    "Descripción pendiente. Se actualizará junto con la portada definitiva del proyecto.",
};

export const areas: Area[] = [
  {
    id: "01",
    slug: "narrativa",
    title: "NARRATIVA / CORTOMETRAJES",
    subtitle:
      "Historias construidas a través de la imagen, el movimiento, el ritmo y la emoción.",
    projects: [
      {
        id: "plevis",
        number: "01",
        title: "Levi's «Drugstore»",
        category: "Homenaje / Recreación con IA",
        year: "2026",
        role: DEFAULTS.role,
        description:
          "Homenaje y recreación con IA del anuncio Levi's «Drugstore».",
        orientation: "horizontal",
        cover: coverLevis.url,
        youtubeUrl: "https://youtu.be/96AXqZ53r2k",
        area: "01",
        metaLine: "homenaje · recreación con IA · 2026",
      },
      {
        id: "pnico",
        number: "02",
        title: "Nico y el monstruo del tejado",
        category: "Cortometraje",
        year: "2026",
        role: DEFAULTS.role,
        description: "Cortometraje. Dirección visual, ritmo y edición.",
        orientation: "horizontal",
        cover: coverNico.url,
        youtubeUrl: "https://youtu.be/U_q0BeayoVE",
        area: "01",
        metaLine: "cortometraje · 2026",
      },
      {
        id: "p03",
        number: "03",
        title: "27 años más tarde",
        category: "Cortometraje",
        year: "2026",
        role: DEFAULTS.role,
        description: "Cortometraje. Dirección visual, ritmo y edición.",
        orientation: "horizontal",
        cover: cover27.url,
        youtubeUrl: "https://youtu.be/DU0DohYsDU0",
        area: "01",
        metaLine: "cortometraje · inspirado en Wes Anderson · 2026",
      },
      {
        id: "p01",
        number: "04",
        title: "Síndrome del impostor",
        category: "Narrativa / Cortometrajes",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Cortometraje vertical sobre el síndrome del impostor. Dirección visual, ritmo y edición.",
        orientation: "vertical",
        cover: cover01.url,
        youtubeUrl: "https://youtube.com/shorts/lsCB3We153E",
        area: "01",
        metaLine: "cortometraje · 2025",
      },
    ],
  },
  {
    id: "02",
    slug: "campanas",
    title: "CAMPAÑAS DE PRODUCTO",
    subtitle:
      "Piezas de campaña en horizontal y vertical, pensadas para que el producto se entienda y se recuerde.",
    projects: [
      {
        id: "pbarcino",
        number: "16",
        title: "Barcino N 29",
        category: "Campaña de perfume",
        year: "2026",
        role: DEFAULTS.role,
        description: "Campaña de perfume Barcino N 29.",
        orientation: "horizontal",
        cover: coverBarcino.url,
        youtubeUrl: "https://youtu.be/7RtihyC0ZGo",
        area: "02",
        metaLine: "campaña de perfume · 2026",
      },
      {
        id: "p04",
        number: "05",
        title: "Cerveza Calaca Viva",
        category: "Avatares / Inteligencia Artificial",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Pieza vertical creada con IA para la marca Calaca Viva. Identidad visual y avatar.",
        orientation: "vertical",
        cover: cover04.url,
        youtubeUrl: "https://youtube.com/shorts/F9TLlVFuOLg",
        area: "02",
        metaLine: "campaña con avatares · 2025",
      },
      {
        id: "p15",
        number: "06",
        title: "The Silent Guards",
        category: "Pieza de campaña",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza de campaña. Dirección visual y edición.",
        orientation: "vertical",
        cover: coverSilence.url,
        youtubeUrl: "https://youtube.com/shorts/as4Z-7-t94I",
        area: "02",
        metaLine: "pieza de campaña · 2026",
      },
    ],
  },
  {
    id: "03",
    slug: "avatares",
    title: "AVATARES / INTELIGENCIA ARTIFICIAL",
    subtitle:
      "Personajes, avatares y nuevas formas de identidad visual creadas con IA.",
    projects: [
      {
        id: "p05",
        number: "07",
        title: "El tiempo es oro",
        category: "Avatares / Inteligencia Artificial",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Avatar presentadora generada con IA. Dirección visual y edición del contenido.",
        orientation: "vertical",
        cover: cover05.url,
        youtubeUrl: "https://youtube.com/shorts/pLqiUlg8BW8",
        area: "03",
        metaLine: "avatares · inteligencia artificial · 2025",
      },
      {
        id: "p06",
        number: "08",
        title: "Yo no soy real",
        category: "Avatares / Inteligencia Artificial",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Personaje digital generado con IA. Exploración de identidad y presencia sintética.",
        orientation: "vertical",
        cover: cover06.url,
        youtubeUrl: "https://youtube.com/shorts/vRguPdSd-eY",
        area: "03",
        metaLine: "avatares · inteligencia artificial · 2025",
      },
    ],
  },
  {
    id: "04",
    slug: "edicion",
    title: "EDICIÓN / CONTENIDO AUDIOVISUAL",
    subtitle:
      "Edición, ritmo y dirección visual para transformar ideas en contenido que conecta.",
    projects: [
      {
        id: "p07",
        number: "09",
        title: "El surfista",
        category: "Edición / Contenido Audiovisual",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description: "Pieza vertical de edición y ritmo narrativo.",
        orientation: "vertical",
        cover: cover07.url,
        youtubeUrl: "https://youtube.com/shorts/Gbj851Eu-OQ",
        area: "04",
        metaLine: "edición · contenido audiovisual · 2025",
      },
      {
        id: "p08",
        number: "10",
        title: "La realidad",
        category: "Edición / Contenido Audiovisual",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description: "Edición vertical con dirección visual y tipografía kinética.",
        orientation: "vertical",
        cover: cover08.url,
        youtubeUrl: "https://youtube.com/shorts/u93f_9onQ8c",
        area: "04",
        metaLine: "edición · contenido audiovisual · 2025",
      },
      {
        id: "p09",
        number: "11",
        title: "Cosmética",
        category: "Edición / Contenido Audiovisual",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description: "Edición vertical para contenido de cosmética y entrevista.",
        orientation: "vertical",
        cover: cover09.url,
        youtubeUrl: "https://youtube.com/shorts/yzW28Y0z3Uw",
        area: "04",
        metaLine: "edición · contenido audiovisual · 2025",
      },
    ],
  },
  {
    id: "05",
    slug: "arquitectura",
    title: "ARQUITECTURA / LICITACIONES",
    subtitle:
      "Imagen, espacio y materia convertidos en experiencias visuales, y proyectos complejos comunicados de forma clara.",
    projects: [
      {
        id: "p10",
        number: "12",
        title: "Villa Normani",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description:
          "Pieza audiovisual de arquitectura e interiorismo para Villa Normani.",
        orientation: "horizontal",
        cover: cover10.url,
        youtubeUrl: "https://youtu.be/wYAE00f83bc",
        area: "05",
        metaLine: "arquitectura · 2026",
      },
      {
        id: "p11",
        number: "13",
        title: "Hotel Mazanka",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual del proyecto Hotel Mazanka.",
        orientation: "horizontal",
        cover: cover11.url,
        youtubeUrl: "https://youtu.be/YpxAUusyPiw",
        area: "05",
        metaLine: "arquitectura · interiorismo · 2026",
      },
      {
        id: "p13",
        number: "14",
        title: "Lap pool house",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual de arquitectura — Lap pool house.",
        orientation: "horizontal",
        cover: coverLap.url,
        youtubeUrl: "https://youtu.be/iNEuEYNgd1U",
        area: "05",
        metaLine: "arquitectura · 2026",
      },
      {
        id: "p14",
        number: "15",
        title: "Licitación",
        category: "Licitaciones / Comunicación Técnica",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual de comunicación técnica para licitación.",
        orientation: "horizontal",
        cover: coverLic.url,
        youtubeUrl: "https://youtu.be/fEwPw4S3lS4",
        area: "05",
        metaLine: "licitaciones · comunicación técnica · 2026",
      },
    ],
  },
];


export const getAllProjects = () => areas.flatMap((a) => a.projects);

// Compat: mantener referencias antiguas
export { area01, area02, area03, area04, area05 };
