# Ramón Fernández Visual

Build a complete, high-end, contemporary digital visual portfolio web application for **RAMÓN FERNÁNDEZ** using React, Tailwind CSS, and Framer Motion.

The portfolio must feel like a contemporary creative portfolio from 2026: minimal, editorial, cinematic, interactive, premium, and highly visual.

The visual media must always be the protagonist.

---

# CRITICAL RULES FOR THE AI

## 1. UI LANGUAGE

The entire website's visible text MUST be in strictly provided Spanish.

The ONLY English phrase permitted is:

**"Visual Designer & AI Specialist"**

Do not translate this phrase.

Do not introduce any other English words in the UI.

---

## 2. TERMINOLOGY

NEVER use the word:

**"Trabajos"**

NEVER use:

**"Works"**

Use:

**"PORTFOLIO"**

exclusively when referring to the main collection of projects, sections, navigation, or buttons.

Use:

**PORTFOLIO**

**PORTFOLIO SELECCIONADO**

**EXPLORAR PORTFOLIO ↓**

**VOLVER AL PORTFOLIO**

The website must be understood as a professional multidisciplinary **PORTFOLIO**, not as a "Trabajos" section.

---

## 3. AESTHETIC

Modern.

Ultra-minimalist.

Editorial.

Cinematic.

Premium.

Contemporary 2026.

Visual-first.

The website should feel like a curated digital exhibition rather than a conventional agency website.

NO cyberpunk.

NO neon.

NO gradients.

NO heavy glassmorphism.

NO standard card borders.

NO heavy shadows.

NO generic AI aesthetic.

NO excessive decorative elements.

NO unnecessary 3D effects.

NO excessive animation.

The visual media must be the absolute protagonist on a black canvas.

The design should feel sophisticated without becoming visually empty.

Use generous negative space.

Use strong typography.

Use asymmetrical editorial compositions.

Use large-scale imagery and video.

---

# DESIGN TOKENS & SYSTEM

## COLORS

Primary Background:

**#080808**

Secondary Background:

**#111111**

Primary Text:

**#F5F5F5**

Secondary Text:

**#8A8A8A**

Brand / Accent Color:

**#ecd012**

The yellow **#ecd012** must be used ONLY as an accent.

Use it for:

* Logo when appropriate
* Active states
* Section numbers
* Custom cursor
* Subtle hover details
* Arrows
* Small graphic indicators
* Selected navigation states

Do not overuse the yellow.

Do not use yellow as a dominant background.

The black background must act as the visual canvas.

The images and videos provide the visual color and variety.

---

# LOGO

I will provide an official logo file.

For now, create a clean placeholder area for the logo.

Do NOT invent a different logo.

Do NOT redesign the logo.

Do NOT modify its proportions.

The placeholder must be designed so I can easily replace it with the official **"rf."** logo file later.

The logo must work in:

* Desktop header
* Tablet header
* Mobile header
* Footer

Maintain sufficient clear space around the logo.

---

# TYPOGRAPHY

## PRIMARY TYPOGRAPHY

Use:

**Poppins**

Weights:

* Regular
* Medium
* SemiBold
* Bold
* ExtraBold

Use Poppins for:

* Name
* Headings
* Navigation
* Body copy
* Descriptions
* Buttons
* CTAs

Large headlines should use Poppins Bold or ExtraBold.

Poppins is the main visual identity of the website.

---

## SECONDARY TYPOGRAPHY

Use:

**DM Mono**

Use DM Mono exclusively for:

* Section numbers
* Categories
* Tags
* Years
* System metadata
* Small technical labels

Do not use DM Mono for long paragraphs.

The visual relationship should be:

**Poppins = visual identity and communication**

**DM Mono = system, structure and technical detail**

Do not introduce a third typeface.

---

# INTERACTION & TECHNICAL REQUIREMENTS

## 1. CUSTOM CURSOR — DESKTOP ONLY

Create a custom cursor exclusively for desktop devices.

Default state:

A small yellow **#ecd012** dot following the mouse.

When hovering over a visual project using:

`data-cursor="project"`

the cursor smoothly scales into a larger circle.

Inside the circle display:

**VER**

Text color:

**#080808**

When leaving the project:

Smoothly return to the original small dot.

When hovering over navigation links:

Create a subtle interactive response.

Do not use:

* Cursor trails
* Particles
* Huge cursors
* Excessive effects

The cursor must feel premium, modern and subtle.

Disable the custom cursor entirely on:

* Touch devices
* Tablets
* Mobile

Do not depend on hover interactions for essential information on touch devices.

---

## 2. SCROLL & REVEAL

Use smooth native scrolling.

Do NOT use scroll hijacking.

Use subtle Framer Motion reveals:

* Clip reveal
* Fade in
* Very subtle vertical movement
* Scale approximately 1.02

Use staggered animations when elements enter the viewport.

Animation timing should generally be between:

**400–700ms**

Animations must be elegant and fast.

Do not make the visitor wait for content.

---

## 3. HOVER STATES

Project images should scale very subtly on hover:

**1.02 – 1.04**

Show smoothly:

**VER PROYECTO →**

Use the yellow **#ecd012** for subtle interactive details.

Do not use heavy overlays.

Do not completely obscure project imagery.

On touch devices, replace hover interactions with clear tap interactions.

---

## 4. VIDEO ARCHITECTURE

All videos will be hosted externally on YouTube.

Do NOT upload video files directly to the application.

Do NOT load YouTube iframes on the initial page render.

Implement a lazy-loaded YouTube modal system.

The main portfolio page must show static high-resolution thumbnails.

When clicking a project:

Open a sleek full-screen dark modal.

Modal background:

**#080808**

approximately 95% opacity.

Only then load the embedded YouTube iframe.

Use autoplay when the user explicitly opens the project.

The modal must contain:

* YouTube video
* Title
* Category
* Year
* Role
* Description

The video must be fully responsive.

Use 16:9 where appropriate.

The system must be modular and easy to update.

Create a clean project data structure so I can easily add or edit:

* Project title
* Category
* YouTube URL
* Thumbnail URL
* Year
* Role
* Description

Do not hardcode the portfolio in a way that makes future project additions difficult.

---

# PAGE STRUCTURE

---

# 1. HEADER

Create a sticky, minimal and contemporary header.

Left:

**Official Logo / Temporary Logo Placeholder**

Right navigation using Poppins:

**PORTFOLIO | SOBRE MÍ | CONTACTO**

Active state:

**#ecd012**

The header should subtly resize when scrolling.

Use a very slight blur only when needed for readability.

Do not create heavy glassmorphism.

The header must remain visually lightweight.

### MOBILE

Create a fullscreen **#080808** overlay menu.

Display:

**PORTFOLIO**

**SOBRE MÍ**

**CONTACTO**

Use smooth Framer Motion entrance animations.

Highlight the active section using:

**#ecd012**

---

# 2. HERO

Background:

**#080808**

Create a high-impact editorial Hero.

Main large bold text:

**RAMÓN FERNÁNDEZ**

Subtitle:

**Visual Designer & AI Specialist**

Tagline 1:

**Diseño visual, vídeo, inteligencia artificial y narrativa.**

Tagline 2:

**Creo imágenes, vídeos y experiencias visuales para diferentes disciplinas y sectores.**

Use an asymmetrical editorial composition.

Include a large high-quality visual element:

* Image
* Video thumbnail
* Visual composition

Do not use a conventional "text left + small image right" layout.

The visual element must occupy a significant portion of the viewport.

Use generous negative space.

Add subtle yellow **#ecd012** details.

Bottom CTA:

**EXPLORAR PORTFOLIO ↓**

The Hero must feel like the entrance to a curated visual exhibition.

Do NOT include phone or email in the Hero.

---

# 3. MAIN SECTION

Title:

**PORTFOLIO SELECCIONADO**

Intro text:

**Una selección de proyectos visuales desarrollados en diferentes disciplinas y formatos.**

Create 5 distinct visual areas.

Do NOT use generic card grids.

Do NOT use identical cards.

Create dynamic, asymmetrical editorial layouts for each area.

Each area must feel visually distinct while maintaining the same overall design system.

---

# AREA 01

## ARQUITECTURA / INTERIORISMO / PRODUCTO

Number:

**01**

Use DM Mono.

Color:

**#ecd012**

Title:

**ARQUITECTURA / INTERIORISMO / PRODUCTO**

Subtitle:

**Imagen, espacio y materia convertidos en experiencias visuales.**

This must be ONE main portfolio area.

Do NOT separate Architecture, Interior Design and Product into three main navigation sections.

Show:

* Architecture videos
* Interior design videos
* Product videos
* Visualization
* Architectural films
* Visual direction

Layout:

Large hero thumbnail followed by asymmetrical side examples.

The main visual should act as an entry point.

This area may later open or expand into additional examples organized internally by:

**Arquitectura**

**Interiorismo**

**Producto**

The main portfolio structure remains:

**ARQUITECTURA / INTERIORISMO / PRODUCTO**

Do not create three separate top-level sections.

---

# AREA 02

## AVATARES / INTELIGENCIA ARTIFICIAL

Number:

**02**

Use DM Mono.

Color:

**#ecd012**

Title:

**AVATARES / INTELIGENCIA ARTIFICIAL**

Subtitle:

**Personajes, avatares y nuevas formas de identidad visual creadas con IA.**

Show:

* AI avatars
* Virtual presenters
* Digital characters
* Digital clones
* AI-generated visual content

Layout:

Dynamic asymmetric grid for digital personas.

The visual content must be the protagonist.

Do not turn this into a technical explanation of AI.

---

# AREA 03

## NARRATIVA / CORTOMETRAJES

Number:

**03**

Use DM Mono.

Color:

**#ecd012**

Title:

**NARRATIVA / CORTOMETRAJES**

Subtitle:

**Historias construidas a través de la imagen, el movimiento, el ritmo y la emoción.**

Show:

* Short films
* Audiovisual storytelling
* Narrative projects
* Characters
* Cinematic pieces

Layout:

Cinematic widescreen 16:9 full-width frame.

Use generous negative space.

This section should feel cinematic and immersive.

---

# AREA 04

## EDICIÓN / CONTENIDO AUDIOVISUAL

Number:

**04**

Use DM Mono.

Color:

**#ecd012**

Title:

**EDICIÓN / CONTENIDO AUDIOVISUAL**

Subtitle:

**Edición, ritmo y dirección visual para transformar ideas en contenido que conecta.**

Show:

* Premium reels
* Video editing
* Social media content
* Audiovisual pieces
* Different video formats

Layout:

Dynamic social-first composition mixing:

* Vertical formats
* Horizontal formats

Do not make the section look like a generic social media template.

Maintain the premium editorial visual identity.

---

# AREA 05

## LICITACIONES / COMUNICACIÓN TÉCNICA

Number:

**05**

Use DM Mono.

Color:

**#ecd012**

Title:

**LICITACIONES / COMUNICACIÓN TÉCNICA**

Subtitle:

**Comunicar proyectos complejos de forma clara, visual y profesional.**

Show:

* Engineering tenders
* Technical presentations
* Visual documentation
* Project communication
* Technical audiovisual material

Layout:

Structured, clean, technical-artistic composition.

The section should communicate precision and professionalism without feeling corporate or boring.

---

# 4. PROJECT PRESENTATION

Projects must feel like editorial content.

Do NOT use:

* Heavy card borders
* Standard cards
* Heavy shadows
* Large rounded buttons
* Pill-shaped labels

Show primarily:

**Image / Thumbnail**

**Project Title**

**Category**

Optional:

**Year**

On hover:

**VER PROYECTO →**

The image scales subtly.

Use smooth transitions.

Use **#ecd012** only for small interactive details.

---

# 5. ABOUT SECTION

Section title:

**SOBRE MÍ**

Background:

**#080808**

Text:

**Soy Ramón Fernández, Visual Designer & AI Specialist. Trabajo en la intersección entre diseño visual, vídeo, inteligencia artificial y narrativa. Mi experiencia en arquitectura e interiorismo me ha dado una forma de entender el espacio, la luz, la composición y la atmósfera que hoy aplico a diferentes disciplinas y proyectos.**

Big visual statement using Poppins ExtraBold:

**Diferentes disciplinas.**

**Una misma mirada visual.**

Use the yellow **#ecd012** only as a subtle graphic accent.

---

# 6. CONTACT SECTION

Section title:

**HABLEMOS**

Background:

**#111111**

Use this background to visually separate Contact from the rest of the website.

Text:

**¿Tienes un proyecto, una colaboración o una oportunidad en la que pueda aportar?**

Details:

**Ramón Fernández**

**Visual Designer & AI Specialist**

**+34 669 25 03 43**

**[ramonfernandezvisual@gmail.com](mailto:ramonfernandezvisual@gmail.com)**

CTA:

**ESCRÍBEME →**

Use a `mailto:` link.

Use **#ecd012** as the accent.

The phone number must be clickable on mobile devices.

NO contact forms.

Phone and email must appear exclusively in the Contact section.

Do not place them in the Hero or Header.

---

# 7. FOOTER

Background:

**#080808**

Minimalist layout.

Include:

Official Logo.

**Ramón Fernández**

**Visual Designer & AI Specialist**

Navigation:

**PORTFOLIO | SOBRE MÍ | CONTACTO**

Copyright:

**© 2026 Ramón Fernández**

Do not repeat the phone number or email in the Footer.

---

# 8. MODERN MICROINTERACTIONS

The website must feel contemporary and interactive without becoming experimental for the sake of experimentation.

Use:

* Custom desktop cursor
* Smooth image hover
* Subtle image zoom
* Scroll reveals
* Clip reveals
* Staggered typography
* Smooth arrow movement
* Sticky header transitions
* Fullscreen mobile menu transitions
* Subtle project transitions

The interaction design should communicate that the website was created by a visual professional.

The visitor should notice details such as:

* Cursor behavior
* Image movement
* Typography reveals
* Yellow section numbers
* Arrow interactions
* Header behavior
* Smooth transitions

But animations must NEVER compete with the visual portfolio itself.

---

# 9. RESPONSIVE DESIGN

The website must be specifically designed and optimized for:

**Desktop**

**Laptop**

**Tablet**

**Mobile**

Do NOT simply shrink the desktop layout.

Adapt the composition intentionally for each screen size.

## DESKTOP

Use:

* Editorial grids
* Asymmetrical layouts
* Large videos
* Large typography
* Generous negative space
* Custom cursor
* Hover interactions

## TABLET

Use:

* Two columns when appropriate
* Adjusted spacing
* Responsive typography
* Responsive video
* Touch-friendly navigation

Disable custom cursor.

Do not depend on hover.

Do not simply use a reduced desktop layout.

## MOBILE

Use:

* Single-column layout
* Approximately 20px side margins
* Responsive videos
* Responsive images
* Minimal header
* Fullscreen mobile menu
* Adapted typography
* Touch-friendly navigation

Disable custom cursor.

Do not depend on hover.

Do not allow accidental horizontal scrolling.

Pay special attention to:

* Hero composition
* Logo sizing
* Typography
* YouTube video proportions
* Mobile menu
* Contact section

---

# 10. PERFORMANCE

Prioritize performance.

Do NOT load all YouTube iframes on initial page load.

Use:

* Lazy loading
* Optimized thumbnails
* Deferred loading
* Responsive images

Only load YouTube iframe content when a user opens a project.

Animations must not negatively impact performance.

The website must feel fast on:

* Desktop
* Tablet
* Mobile

---

# 11. FINAL CREATIVE DIRECTION

The final website must feel like a contemporary visual portfolio from 2026.

The core identity is:

**BLACK**

**WHITE**

**#ecd012**

**POPPINS**

**DM MONO**

**OFFICIAL LOGO**

The portfolio should communicate:

**Diseño visual.**

**Criterio.**

**Versatilidad.**

**Vídeo.**

**Edición.**

**Narrativa.**

**Inteligencia artificial.**

**Profesionalidad.**

The diversity of projects must NOT feel chaotic.

All disciplines must feel like part of one coherent professional visual practice.

The website must communicate:

**Ramón Fernández es un Visual Designer & AI Specialist capaz de desarrollar diferentes tipos de contenido visual para diferentes sectores y necesidades.**

Architecture and interior design are part of his professional background, but they must NOT limit the perception of his capabilities.

The portfolio should open the door to opportunities in:

* Diseño
* Vídeo
* Edición
* Contenido audiovisual
* Inteligencia artificial
* Avatares
* Personajes
* Storytelling
* Comunicación técnica
* Otros sectores creativos

The absolute priority is:

**THE VISUAL PORTFOLIO.**

Text supports the work.

Images and videos are the protagonists.

Create a minimal, modern, interactive, cinematic and memorable experience.

The final feeling should be:

**Black.**

**Yellow #ecd012.**

**Poppins.**

**Subtle motion.**

**Interactive cursor.**

**Large visual media.**

**Generous negative space.**

**Precise design.**

**Strong identity.**

**A multidisciplinary portfolio that feels coherent, intentional and professionally curated.**

Ensure the codebase is clean, modular, scalable and ready for immediate deployment.
PORTFOLIO CONTENT STRUCTURE — INITIAL PROJECTS

The portfolio must be prepared to display the following initial number of video projects.

Do NOT invent additional projects.

Do NOT duplicate projects.

Do NOT create placeholder projects beyond the specified structure.

Use placeholders only for the exact number of projects listed below, so I can later replace each placeholder with the real YouTube URL, thumbnail, title, year, role and description.

Each project must be independently editable.

AREA 01 — ARQUITECTURA / INTERIORISMO / PRODUCTO

Total initial projects:

4 vídeos

Format:

4 vídeos horizontales

Aspect ratio:

16:9

Use these four projects as the main visual examples for the combined category:

ARQUITECTURA / INTERIORISMO / PRODUCTO

The four videos can represent different combinations of:

Arquitectura

Interiorismo

Producto

Do NOT create separate top-level sections for these disciplines.

They belong to one single portfolio area.

Layout:

Use one large featured horizontal video/project and three secondary horizontal projects arranged in an asymmetrical editorial composition.

All four projects must be visually prominent.

AREA 02 — AVATARES / INTELIGENCIA ARTIFICIAL

Total initial projects:

3 vídeos

Format:

3 vídeos verticales

Aspect ratio:

9:16

Use these projects to showcase:

Avatares

Personajes digitales

Presentadores virtuales

Creación visual con IA

Layout:

Create a dynamic editorial composition optimized for vertical video.

Do not force vertical videos into horizontal 16:9 containers.

Preserve the native vertical format.

Use the three vertical projects as a visually coherent group.

AREA 03 — NARRATIVA / CORTOMETRAJES

Total initial projects:

2 vídeos

Formats:

1 vídeo vertical

1 vídeo horizontal

The vertical project uses:

9:16

The horizontal project uses:

16:9

The layout must respect the native aspect ratio of each project.

Do NOT crop the vertical video to make it horizontal.

Do NOT crop the horizontal video to make it vertical.

Create a cinematic composition where both formats coexist intentionally.

The horizontal video can act as the main cinematic piece.

The vertical video can act as a complementary narrative piece.

AREA 04 — EDICIÓN / CONTENIDO AUDIOVISUAL

Total initial projects:

3 vídeos

Format:

3 vídeos verticales

Aspect ratio:

9:16

These projects represent:

Edición de vídeo

Reels premium

Contenido para redes sociales

Layout:

Create a social-first editorial composition.

Show the three vertical videos as a dynamic visual group.

Do NOT force them into horizontal containers.

Preserve their 9:16 format.

The layout should feel contemporary and premium rather than like a generic social media grid.

AREA 05 — LICITACIONES / COMUNICACIÓN TÉCNICA

Total initial projects:

1 vídeo

Format:

1 vídeo horizontal

Aspect ratio:

16:9

Show the project as a large horizontal visual piece.

Because this area contains only one initial project, do NOT create empty cards or fake additional projects.

Create a strong single-project presentation.

The composition should feel structured, clean and professional.

INITIAL PORTFOLIO SUMMARY

The portfolio initially contains:

13 vídeos en total

Breakdown:

01 — ARQUITECTURA / INTERIORISMO / PRODUCTO
4 vídeos horizontales — 16:9

02 — AVATARES / INTELIGENCIA ARTIFICIAL
3 vídeos verticales — 9:16

03 — NARRATIVA / CORTOMETRAJES
2 vídeos — 1 vertical 9:16 + 1 horizontal 16:9

04 — EDICIÓN / CONTENIDO AUDIOVISUAL
3 vídeos verticales — 9:16

05 — LICITACIONES / COMUNICACIÓN TÉCNICA
1 vídeo horizontal — 16:9

Total:

13 proyectos audiovisuales iniciales

The portfolio architecture must allow additional projects to be added later without changing the design system or page structure.

The number of projects and their aspect ratios must be clearly reflected in the visual layouts.

Respect each project's native aspect ratio.

Do not crop videos unnecessarily.

Do not stretch videos.

Do not distort videos.

The design must adapt the layout to the content format rather than forcing every project into the same visual container.

The portfolio should feel intentionally curated around these 13 initial projects.
# REDES SOCIALES Y PERFILES PROFESIONALES

Incluir enlaces a mis perfiles profesionales en el pie de página.

NO colocar las redes sociales en la navegación principal.

NO hacer que los perfiles sociales tengan un protagonismo visual excesivo.

La navegación principal debe mantenerse:

**PORTFOLIO | SOBRE MÍ | CONTACTO**

En el pie de página, crear una zona minimalista para redes sociales y perfiles profesionales.

Incluir estos tres perfiles profesionales:

---

**INSTAGRAM — VISUAL / CREATIVO**

**@ramonfernandez.visual**

URL:

**https://www.instagram.com/ramonfernandez.visual**

Descripción:

Contenido visual multidisciplinar, creatividad, inteligencia artificial, avatares, vídeo, narrativa, edición y otros proyectos visuales.

---

**INSTAGRAM — ARQUITECTURA / INTERIORISMO**

**@ramonfernandez.archviz**

URL:

**https://www.instagram.com/ramonfernandez.archviz**

Descripción:

Arquitectura, interiorismo y visualización arquitectónica.

---

**LINKEDIN**

**ramon-fdez**

URL:

**https://www.linkedin.com/in/ramon-fdez**

Descripción:

Perfil profesional, trayectoria profesional y contenido relacionado con arquitectura e interiorismo.

---

# CONTACTO EN EL PIE DE PÁGINA

Incluir también una zona independiente de contacto profesional en el pie de página:

**CONTACTO**

**[ramonfernandezvisual@gmail.com](mailto:ramonfernandezvisual@gmail.com)**

Utilizar un enlace `mailto:`.

El número de teléfono:

**+34 669 25 03 43**

debe aparecer exclusivamente en la sección principal de contacto **HABLEMOS**.

No repetir el número de teléfono en el pie de página.

Hacer que el número de teléfono sea clicable en dispositivos móviles.

---

# DISEÑO DE LAS REDES SOCIALES

Utilizar enlaces de texto minimalistas o iconos sutiles.

Mantener el mismo lenguaje visual de toda la web:

* Poppins
* DM Mono cuando sea apropiado
* Texto blanco
* Texto secundario gris
* Amarillo **#ecd012** para estados hover o activos

Al pasar el cursor sobre un enlace:

El enlace debe reaccionar sutilmente.

Utilizar una pequeña flecha o un movimiento mínimo.

NO utilizar botones grandes para redes sociales.

NO utilizar iconos de redes sociales con sus colores corporativos.

Mantener una presentación monocromática y coherente con la identidad visual basada en:

**Negro + Blanco + Amarillo #ecd012**

Los enlaces a redes sociales deben sentirse como parte del sistema visual del portfolio, no como elementos externos o publicidad.

---

# MENSAJE DE DISPONIBILIDAD

Añadir una frase sutil de disponibilidad profesional en el pie de página:

**Disponible para proyectos, colaboraciones y oportunidades profesionales.**

Esta frase debe tener una presencia visual secundaria y no dominar la composición.

---

# FUNCIÓN PROFESIONAL DE CADA CANAL

Cada perfil tiene una función diferente:

**INSTAGRAM — VISUAL / CREATIVO**

Para mostrar contenido visual multidisciplinar, creatividad, inteligencia artificial, avatares, vídeo, narrativa, edición y otros proyectos visuales.

**INSTAGRAM — ARQUITECTURA / INTERIORISMO**

Para mostrar arquitectura, interiorismo y visualización arquitectónica.

**LINKEDIN**

Para posicionamiento profesional, trayectoria profesional y contenido relacionado con arquitectura e interiorismo.

El portfolio debe seguir siendo el destino profesional principal.

Las redes sociales deben funcionar como canales secundarios que permiten explorar diferentes facetas de la actividad profesional de Ramón Fernández.

El pie de página debe comunicar claramente que la web es el portfolio profesional principal, mientras que Instagram y LinkedIn aportan contexto adicional sobre diferentes áreas de experiencia y trayectoria profesional.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ramonfernandezvisual.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f0542285-cb11-40ca-b7b5-a066104d9686).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
