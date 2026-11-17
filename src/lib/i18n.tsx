import { createContext, useContext, type ReactNode } from "react";

export type Lang = "es" | "en";

const LangContext = createContext<Lang>("es");

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

/** t(español, inglés): devuelve el texto del idioma activo. */
export function useT() {
  const lang = useLang();
  return <T,>(es: T, en: T): T => (lang === "en" ? en : es);
}

/** Línea editorial bajo cada portada (el español es el original). */
export const META_EN: Record<string, string> = {
  "homenaje · recreación · 2026": "tribute · recreation · 2026",
  "cortometraje · inspirado en Wes Anderson · 2026": "short film · inspired by Wes Anderson · 2026",
  "cortometraje de animación · 2026": "animated short film · 2026",
  "cortometraje de animación · 2025": "animated short film · 2025",
  "spot · 2026": "spot · 2026",
  "spot con personajes · 2025": "spot with characters · 2025",
  "personajes · 2025": "characters · 2025",
  "edición · contenido audiovisual · 2025": "editing · audiovisual content · 2025",
  "arquitectura · 2026": "architecture · 2026",
};

/** Títulos y subtítulos de cada área, por id. */
export const AREAS_EN: Record<string, { title: string; subtitle: string }> = {
  "01": {
    title: "SHORT FILMS AND NARRATIVE PIECES",
    subtitle: "Stories built through image, movement, rhythm and emotion.",
  },
  "02": {
    title: "SPOTS",
    subtitle: "Spots in horizontal and vertical, designed so that the brand is understood and remembered.",
  },
  "03": {
    title: "CHARACTERS",
    subtitle: "Characters and new forms of visual identity.",
  },
  "04": {
    title: "EDITING / AUDIOVISUAL CONTENT",
    subtitle: "Editing, rhythm and visual direction to turn ideas into content that connects.",
  },
  "05": {
    title: "ARCHITECTURE AND INTERIOR DESIGN",
    subtitle: "Image, space and matter turned into visual experiences.",
  },
};
