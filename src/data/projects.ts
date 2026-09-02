import area01 from "@/assets/area-01.jpg";
import area02 from "@/assets/area-02.jpg";
import area03 from "@/assets/area-03.jpg";
import area04 from "@/assets/area-04.jpg";
import area05 from "@/assets/area-05.jpg";
import coverNico from "@/assets/covers/nico.asset.json";
import cover04 from "@/assets/covers/p04.asset.json";
import cover05 from "@/assets/covers/p05.asset.json";
import cover06 from "@/assets/covers/p06.asset.json";
import cover07 from "@/assets/covers/p07.asset.json";
import cover08 from "@/assets/covers/p08.asset.json";
import cover09 from "@/assets/covers/p09.asset.json";
import cover10 from "@/assets/covers/p10.asset.json";
import cover11 from "@/assets/covers/p11.asset.json";
import cover12 from "@/assets/covers/p12.asset.json";
import coverLap from "@/assets/covers/p_lap.asset.json";
import coverLic from "@/assets/covers/p_lic.asset.json";
import cover27 from "@/assets/covers/p27-nueva.asset.json";
import coverSilence from "@/assets/covers/p15.asset.json";



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
        id: "pnico",
        number: "01",
        title: "NICO Y EL MONSTRUO DEL TEJADO",
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
        number: "02",
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
    ],
  },
  {
    id: "02",
    slug: "avatares",
    title: "AVATARES / INTELIGENCIA ARTIFICIAL",
    subtitle:
      "Personajes, avatares y nuevas formas de identidad visual creadas con IA.",
    projects: [
      {
        id: "p04",
        number: "04",
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
      },
      {
        id: "p05",
        number: "05",
        title: "El tiempo es oro",
        category: "Avatares / Inteligencia Artificial",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Avatar presentadora generada con IA. Dirección visual y edición del contenido.",
        orientation: "vertical",
        cover: cover05.url,
        youtubeUrl: "https://youtube.com/shorts/pLqiUlg8BW8",
        area: "02",
      },
      {
        id: "p06",
        number: "06",
        title: "Yo no soy real",
        category: "Avatares / Inteligencia Artificial",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Personaje digital generado con IA. Exploración de identidad y presencia sintética.",
        orientation: "vertical",
        cover: cover06.url,
        youtubeUrl: "https://youtube.com/shorts/vRguPdSd-eY",
        area: "02",
      },
    ],
  },
  {
    id: "03",
    slug: "edicion",
    title: "EDICIÓN / CONTENIDO AUDIOVISUAL",
    subtitle:
      "Edición, ritmo y dirección visual para transformar ideas en contenido que conecta.",
    projects: [
      {
        id: "p07",
        number: "07",
        title: "El surfista",
        category: "Edición / Contenido Audiovisual",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description: "Pieza vertical de edición y ritmo narrativo.",
        orientation: "vertical",
        cover: cover07.url,
        youtubeUrl: "https://youtube.com/shorts/Gbj851Eu-OQ",
        area: "03",
      },
      {
        id: "p08",
        number: "08",
        title: "La realidad",
        category: "Edición / Contenido Audiovisual",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description: "Edición vertical con dirección visual y tipografía kinética.",
        orientation: "vertical",
        cover: cover08.url,
        youtubeUrl: "https://youtube.com/shorts/u93f_9onQ8c",
        area: "03",
      },
      {
        id: "p09",
        number: "09",
        title: "Cosmética",
        category: "Edición / Contenido Audiovisual",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description: "Edición vertical para contenido de cosmética y entrevista.",
        orientation: "vertical",
        cover: cover09.url,
        youtubeUrl: "https://youtube.com/shorts/yzW28Y0z3Uw",
        area: "03",
      },
    ],
  },
  {
    id: "04",
    slug: "arquitectura",
    title: "ARQUITECTURA / INTERIORISMO / PRODUCTO",
    subtitle:
      "Imagen, espacio y materia convertidos en experiencias visuales.",
    projects: [
      {
        id: "p10",
        number: "10",
        title: "Villa Normani",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description:
          "Pieza audiovisual de arquitectura e interiorismo para Villa Normani.",
        orientation: "horizontal",
        cover: cover10.url,
        youtubeUrl: "https://youtu.be/wYAE00f83bc",
        area: "04",
        metaLine: "Villa Normani _ arquitectura . 2026",
      },
      {
        id: "p11",
        number: "11",
        title: "Hotel Mazanka",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual del proyecto Hotel Mazanka.",
        orientation: "horizontal",
        cover: cover11.url,
        youtubeUrl: "https://youtu.be/YpxAUusyPiw",
        area: "04",
        metaLine: "Hotel Mazanka _ arquitectura / interiorismo . 2026",
      },
      {
        id: "p12",
        number: "12",
        title: "Duna Lounge",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual de producto e interiorismo — Duna Lounge.",
        orientation: "horizontal",
        cover: cover12.url,
        youtubeUrl: "https://youtu.be/nHoQMshg5b4",
        area: "04",
        metaLine: "Duna Lounge_ producto/mobiliario . 2026",
      },
      {
        id: "p13",
        number: "13",
        title: "Lap pool house",
        category: "Arquitectura / Interiorismo / Producto",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual de arquitectura — Lap pool house.",
        orientation: "horizontal",
        cover: coverLap.url,
        youtubeUrl: "https://youtu.be/iNEuEYNgd1U",
        area: "04",
        metaLine: "Lap pool house - arquitectura . 2026",
      },
    ],
  },
  {
    id: "05",
    slug: "licitaciones",
    title: "LICITACIONES / COMUNICACIÓN TÉCNICA",
    subtitle:
      "Comunicar proyectos complejos de forma clara, visual y profesional.",
    projects: [
      {
        id: "p14",
        number: "14",
        title: "Licitación",
        category: "Licitaciones / Comunicación Técnica",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza audiovisual de comunicación técnica para licitación.",
        orientation: "horizontal",
        cover: coverLic.url,
        youtubeUrl: "https://youtu.be/fEwPw4S3lS4",
        area: "05",
      },
    ],
  },
];


export const getAllProjects = () => areas.flatMap((a) => a.projects);

// Compat: mantener referencias antiguas
export { area01, area02, area03, area04, area05 };
