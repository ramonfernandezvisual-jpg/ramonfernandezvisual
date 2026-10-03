import type { Area, Project } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";
import { SectionHeader } from "./SectionHeader";

type Props = { area: Area; onOpen: (p: Project) => void };

/**
 * Sistema único y simétrico para todas las áreas:
 * - horizontales: 2 columnas iguales en desktop
 * - verticales: 3 columnas iguales en desktop (2 en tablet)
 * - móvil: 1 columna
 * Excepción: un área con una única pieza se presenta a ancho completo.
 */
export function AreaGrid({ area, onOpen }: Props) {
  const horizontals = area.projects.filter((p) => p.orientation === "horizontal");
  const verticals = area.projects.filter((p) => p.orientation === "vertical");
  const gap = "gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-16";
  const single = area.projects.length === 1 ? area.projects[0] : null;

  return (
    <section
      id={`area-${area.id}`}
      className="scroll-mt-24 border-t px-5 py-14 md:px-10 md:py-20 lg:py-28"
      style={{ borderColor: "#161616" }}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeader
          number={area.id}
          title={area.title}
          subtitle={area.subtitle}
          count={area.projects.length}
        />

        {single ? (
          <div className="mx-auto w-full max-w-[1200px]">
            <ProjectTile project={single} onOpen={onOpen} index={0} />
          </div>
        ) : (
          <>
            {horizontals.length > 0 && (
              <div className={`grid grid-cols-1 md:grid-cols-2 ${gap}`}>
                {horizontals.map((p, i) => (
                  <ProjectTile key={p.id} project={p} onOpen={onOpen} index={i} />
                ))}
              </div>
            )}
            {verticals.length > 0 && (
              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${verticals.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 lg:max-w-[66%]"} ${gap} ${
                  horizontals.length > 0 ? "mt-10 md:mt-16" : ""
                }`}
              >
                {verticals.map((p, i) => (
                  <ProjectTile key={p.id} project={p} onOpen={onOpen} index={i} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
