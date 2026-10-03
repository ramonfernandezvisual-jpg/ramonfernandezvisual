import { useState } from "react";
import { areas, getAllProjects, type Project } from "@/data/projects";
import { AreaGrid } from "./Areas";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Extras";

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
    <section id="portfolio" className="pt-0 md:pt-12" style={{ backgroundColor: "#080808" }}>
      {areas.map((area) => (
        <Reveal key={area.id}><AreaGrid area={area} onOpen={setOpen} /></Reveal>
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
