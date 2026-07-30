import type { Area, Project } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";
import { SectionHeader } from "./SectionHeader";

type Props = { area: Area; onOpen: (p: Project) => void };

/**
 * Sistema único y simétrico para todas las áreas:
 * - horizontales: 2 columnas iguales en desktop
 * - verticales: 3 columnas iguales en desktop (2 en tablet)
 * - móvil: 1 columna
 */
export function AreaGrid({ area, onOpen }: Props) {
  const allVertical = area.projects.every((p) => p.orientation === "vertical");
  const cols = allVertical
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2";

  return (
    <section
      className="border-t px-5 py-20 md:px-10 md:py-28"
      style={{ borderColor: "#161616" }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader number={area.id} title={area.title} subtitle={area.subtitle} />
        <div className={`grid ${cols} gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16`}>
          {area.projects.map((p, i) => (
            <ProjectTile key={p.id} project={p} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
