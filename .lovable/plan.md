
# Portfolio RAMÓN FERNÁNDEZ — Plan de construcción

Sitio one-page editorial en negro (#080808) con acento amarillo (#ecd012), tipografías Poppins + DM Mono, animaciones sutiles con Framer Motion y modal YouTube con carga diferida. Todo el texto en español salvo "Visual Designer & AI Specialist".

## Arquitectura de rutas

- `src/routes/index.tsx` — página única con secciones Hero, Portfolio (5 áreas), Sobre mí, Hablemos, Footer. Reemplaza el placeholder actual.
- Metadatos en `head()`: título "Ramón Fernández — Visual Designer & AI Specialist", descripción, og/twitter.

## Sistema de diseño (`src/styles.css`)

- Tokens en `@theme`:
  - `--color-bg: #080808`, `--color-surface: #111111`, `--color-text: #F5F5F5`, `--color-muted: #8A8A8A`, `--color-accent: #ecd012`.
  - `--font-sans: "Poppins"`, `--font-mono: "DM Mono"`.
- Carga de fuentes vía `<link>` a Google Fonts en `__root.tsx` head (Poppins 400/500/600/700/800, DM Mono 400/500).
- Fondo body negro, cursor `none` sólo en desktop (media hover:hover pointer:fine).
- Sin cambios a tokens shadcn existentes; se añaden estos nuevos.

## Estructura de datos

`src/data/projects.ts`:

```ts
type Project = {
  id: string; title: string; category: string; year: string;
  role: string; description: string;
  youtubeId: string; thumbnail: string;
  orientation: "horizontal" | "vertical"; // 16:9 o 9:16
  area: "01" | "02" | "03" | "04" | "05";
};
```

13 entradas con placeholders (título "Proyecto 01", youtubeId vacío, thumbnail generado con imagegen o placeholder neutro). Reparto:
- Área 01: 4 horizontales
- Área 02: 3 verticales
- Área 03: 1 vertical + 1 horizontal
- Área 04: 3 verticales
- Área 05: 1 horizontal

Se generan 5 imágenes placeholder editoriales (una por área) reutilizables como thumbnails iniciales.

## Componentes (`src/components/portfolio/`)

- `CustomCursor.tsx` — punto amarillo + escala a círculo con "VER" cuando `data-cursor="project"`. Sólo desktop.
- `Header.tsx` — sticky, logo "rf." placeholder (div con espacio para SVG), nav PORTFOLIO / SOBRE MÍ / CONTACTO, scrollspy para estado activo amarillo, shrink al hacer scroll. Menú móvil fullscreen con Framer Motion.
- `Hero.tsx` — composición asimétrica: nombre grande a la izquierda, imagen/thumbnail grande a la derecha, taglines, CTA "EXPLORAR PORTFOLIO ↓".
- `SectionHeader.tsx` — número DM Mono amarillo + título Poppins + subtítulo.
- `AreaOne.tsx` — 1 featured horizontal grande + 3 secundarios asimétricos.
- `AreaTwo.tsx` — 3 verticales en composición dinámica (offsets verticales editoriales).
- `AreaThree.tsx` — cinematográfica: horizontal grande + vertical complementario.
- `AreaFour.tsx` — 3 verticales estilo social premium.
- `AreaFive.tsx` — 1 horizontal full-width.
- `ProjectTile.tsx` — thumbnail con hover subtle scale (1.03), overlay "VER PROYECTO →" en amarillo, `data-cursor="project"`, respeta aspect ratio nativo.
- `ProjectModal.tsx` — dialog fullscreen `#080808/95`, carga iframe YouTube sólo al abrir (autoplay), muestra título/categoría/año/rol/descripción, cierre con Esc / botón / click backdrop.
- `About.tsx` — sección SOBRE MÍ con texto y statement grande ExtraBold "Diferentes disciplinas. / Una misma mirada visual."
- `Contact.tsx` — fondo #111111, HABLEMOS, teléfono clicable, email mailto, CTA ESCRÍBEME →.
- `Footer.tsx` — logo, nombre, subtítulo EN, nav, línea de redes (IG visual, IG archviz, LinkedIn) como enlaces monocromos con flecha hover amarilla, email mailto (sin teléfono), frase "Disponible para proyectos…", copyright "© 2026 Ramón Fernández".

## Interacciones

- Reveals con `motion` + `whileInView` (fade + translateY 12px, 400–600ms, stagger).
- Sin scroll hijacking, scroll nativo suave (`scroll-behavior: smooth`).
- Cursor: `mix-blend-difference` no; simplemente dot amarillo que crece a 72px con label VER en negro sobre amarillo al hover de tiles.
- Hover tiles: scale 1.03, aparece "VER PROYECTO →" amarillo abajo.
- Header: al scroll > 20px reduce padding y aplica `backdrop-blur-sm` mínimo.

## Detalles técnicos

- Framer Motion ya listo si no está: añadir `motion` (`bun add motion`).
- YouTube: iframe `https://www.youtube.com/embed/{id}?autoplay=1&rel=0` sólo montado dentro del modal.
- Thumbnails: si `youtubeId` presente usar `https://i.ytimg.com/vi/{id}/maxresdefault.jpg`; fallback a imagen placeholder generada por área.
- Sin tocar lógica de negocio ni backend.
- Accesibilidad: modal con role dialog, focus trap básico, Esc para cerrar.

## Entregable

Página `/` completa, responsive (desktop editorial, tablet 2 col, móvil 1 col con márgenes ~20px), lista para que el usuario reemplace logo, thumbnails y YouTube IDs editando `src/data/projects.ts`.
