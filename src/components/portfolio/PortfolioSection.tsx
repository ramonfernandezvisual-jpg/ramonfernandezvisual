import { useState } from "react";
import { areas, getAllProjects, type Project } from "@/data/projects";
import { AreaGrid } from "./Areas";
import { ProjectModal } from "./ProjectModal";

export function PortfolioSection() {
  const [open, setOpen] = useState<Project | null>(null);
  const all = getAllProjects();

  const step = (dir: number) => {
    if (!open) return;
    const i = all.findIndex((p) => p.id === open.id);
    if (i === -1) return;
    setOpen(all[(i + dir + all.length) % all.length]);
  };

  return (
    <section id="portfolio" className="pt-6 md:pt-12" style={{ backgroundColor: "#080808" }}>
      {areas.map((area) => (
        <AreaGrid key={area.id} area={area} onOpen={setOpen} />
      ))}

      <ProjectModal
        project={open}
        onClose={() => setOpen(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </section>
  );
}
