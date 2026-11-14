import area01 from "@/assets/area-01.jpg";
import area02 from "@/assets/area-02.jpg";
import area03 from "@/assets/area-03.jpg";
import area04 from "@/assets/area-04.jpg";
import area05 from "@/assets/area-05.jpg";
import cover01 from "@/assets/covers/p01-horizontal.jpg";
import coverSilence from "@/assets/covers/p15.asset.json";
import coverNico from "@/assets/covers/nico.asset.json";
import cover04 from "@/assets/covers/p04.asset.json";
import cover05 from "@/assets/covers/p05.asset.json";
import cover06 from "@/assets/covers/p06.asset.json";
import cover07 from "@/assets/covers/p07.asset.json";
import cover08 from "@/assets/covers/p08.asset.json";
import cover09 from "@/assets/covers/p09.asset.json";
import cover10 from "@/assets/covers/p10.asset.json";
import coverLap from "@/assets/covers/p_lap.asset.json";
import cover27 from "@/assets/covers/p27-nueva.asset.json";
import coverLevis from "@/assets/covers/levis-drugstore.png.asset.json";




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
  orientation: Orientation; // 16:9 vs 9:16 (formato del vídeo)
  tileOrientation?: Orientation; // formato de la portada en la galería, si difiere del vídeo
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
    title: "CORTOMETRAJES Y PIEZAS NARRATIVAS",
    subtitle:
      "Historias construidas a través de la imagen, el movimiento, el ritmo y la emoción.",
    projects: [
      {
        id: "plevis",
        number: "01",
        title: "Levi's «Drugstore»",
        category: "Homenaje / Recreación",
        year: "2026",
        role: DEFAULTS.role,
        description:
          "Homenaje y recreación del anuncio Levi's «Drugstore».",
        orientation: "horizontal",
        cover: coverLevis.url,
        youtubeUrl: "https://youtu.be/96AXqZ53r2k",
        area: "01",
        metaLine: "homenaje · recreación · 2026",
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
        metaLine: "cortometraje de animación · 2026",
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
        tileOrientation: "horizontal",
        cover: cover01,
        youtubeUrl: "https://youtube.com/shorts/lsCB3We153E",
        area: "01",
        metaLine: "cortometraje de animación · 2025",
      },
    ],
  },
  {
    id: "02",
    slug: "campanas",
    title: "SPOTS",
    subtitle:
      "Spots en horizontal y vertical, pensados para que la marca se entienda y se recuerde.",
    projects: [
      {
        id: "p15",
        number: "06",
        title: "The Silent Guards",
        category: "Spot",
        year: "2026",
        role: DEFAULTS.role,
        description: "Pieza de campaña. Dirección visual y edición.",
        orientation: "vertical",
        cover: coverSilence.url,
        youtubeUrl: "https://youtube.com/shorts/as4Z-7-t94I",
        area: "02",
        metaLine: "spot · 2026",
      },
      {
        id: "p04",
        number: "05",
        title: "Cerveza Calaca Viva",
        category: "Spots",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Pieza vertical creada para la marca Calaca Viva. Identidad visual y personaje.",
        orientation: "vertical",
        cover: cover04.url,
        youtubeUrl: "https://youtube.com/shorts/F9TLlVFuOLg",
        area: "02",
        metaLine: "spot con personajes · 2025",
      },
    ],
  },
  {
    id: "03",
    slug: "avatares",
    title: "PERSONAJES",
    subtitle:
      "Personajes y nuevas formas de identidad visual.",
    projects: [
      {
        id: "p05",
        number: "07",
        title: "El tiempo es oro",
        category: "Personajes",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Personaje presentadora digital. Dirección visual y edición del contenido.",
        orientation: "vertical",
        cover: cover05.url,
        youtubeUrl: "https://youtube.com/shorts/pLqiUlg8BW8",
        area: "03",
        metaLine: "personajes · 2025",
      },
      {
        id: "p06",
        number: "08",
        title: "Yo no soy real",
        category: "Personajes",
        year: DEFAULTS.year,
        role: DEFAULTS.role,
        description:
          "Personaje digital. Exploración de identidad y presencia sintética.",
        orientation: "vertical",
        cover: cover06.url,
        youtubeUrl: "https://youtube.com/shorts/vRguPdSd-eY",
        area: "03",
        metaLine: "personajes · 2025",
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
    title: "ARQUITECTURA E INTERIORISMO",
    subtitle:
      "Imagen, espacio y materia convertidos en experiencias visuales.",
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
    ],
  },
];


export const getAllProjects = () => areas.flatMap((a) => a.projects);

// Compat: mantener referencias antiguas
export { area01, area02, area03, area04, area05 };
