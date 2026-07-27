import area01 from "@/assets/area-01.jpg";
import area02 from "@/assets/area-02.jpg";
import area03 from "@/assets/area-03.jpg";
import area04 from "@/assets/area-04.jpg";
import area05 from "@/assets/area-05.jpg";

export type Orientation = "horizontal" | "vertical";
export type AreaId = "01" | "02" | "03" | "04" | "05";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  youtubeId: string; // vacío = placeholder
  thumbnail: string;
  orientation: Orientation;
  area: AreaId;
};

export type Area = {
  id: AreaId;
  title: string;
  subtitle: string;
  slug: string;
  projects: Project[];
};

// Reemplaza cada `youtubeId` con el ID real del vídeo de YouTube.
// Si `youtubeId` está vacío, se usa el `thumbnail` estático.
const p = (
  id: string,
  area: AreaId,
  orientation: Orientation,
  thumbnail: string,
  title: string,
  category: string,
): Project => ({
  id,
  area,
  orientation,
  thumbnail,
  title,
  category,
  year: "2025",
  role: "Dirección visual, edición",
  description:
    "Proyecto placeholder. Sustituye este texto por la descripción real del proyecto una vez añadido el vídeo de YouTube.",
  youtubeId: "",
});

export const areas: Area[] = [
  {
    id: "01",
    slug: "narrativa",
    title: "NARRATIVA / CORTOMETRAJES",
    subtitle:
      "Historias construidas a través de la imagen, el movimiento, el ritmo y la emoción.",
    projects: [
      p("a1-01", "01", "horizontal", area03, "Cortometraje 01", "Narrativa"),
      p("a1-02", "01", "horizontal", area03, "Cortometraje 02", "Narrativa"),
      p("a1-03", "01", "vertical", area02, "Pieza vertical", "Narrativa"),
    ],
  },
  {
    id: "02",
    slug: "avatares",
    title: "AVATARES / INTELIGENCIA ARTIFICIAL",
    subtitle:
      "Personajes, avatares y nuevas formas de identidad visual creadas con IA.",
    projects: [
      p("a2-01", "02", "vertical", area02, "Avatar 01", "IA / Avatar"),
      p("a2-02", "02", "vertical", area02, "Avatar 02", "Presentador virtual"),
      p("a2-03", "02", "vertical", area02, "Avatar 03", "Personaje digital"),
    ],
  },
  {
    id: "03",
    slug: "edicion",
    title: "EDICIÓN / CONTENIDO AUDIOVISUAL",
    subtitle:
      "Edición, ritmo y dirección visual para transformar ideas en contenido que conecta.",
    projects: [
      p("a3-01", "03", "vertical", area04, "Reel 01", "Edición"),
      p("a3-02", "03", "vertical", area04, "Reel 02", "Social"),
      p("a3-03", "03", "vertical", area04, "Reel 03", "Contenido"),
    ],
  },
  {
    id: "04",
    slug: "arquitectura",
    title: "ARQUITECTURA / INTERIORISMO / PRODUCTO",
    subtitle:
      "Imagen, espacio y materia convertidos en experiencias visuales.",
    projects: [
      p("a4-01", "04", "horizontal", area01, "Proyecto 01", "Arquitectura"),
      p("a4-02", "04", "horizontal", area01, "Proyecto 02", "Interiorismo"),
      p("a4-03", "04", "horizontal", area01, "Proyecto 03", "Producto"),
      p("a4-04", "04", "horizontal", area01, "Proyecto 04", "Arquitectura"),
    ],
  },
  {
    id: "05",
    slug: "licitaciones",
    title: "LICITACIONES / COMUNICACIÓN TÉCNICA",
    subtitle:
      "Comunicar proyectos complejos de forma clara, visual y profesional.",
    projects: [
      p("a5-01", "05", "horizontal", area05, "Licitación técnica", "Comunicación técnica"),
    ],
  },
];

export const getAllProjects = () => areas.flatMap((a) => a.projects);
