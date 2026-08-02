import { useState } from "react";
import { areas, type Project } from "@/data/projects";
import { AreaGrid } from "./Areas";
import { ProjectModal } from "./ProjectModal";

export function PortfolioSection() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="pt-8 md:pt-12" style={{ backgroundColor: "#080808" }}>
      {areas.map((area) => (
        <AreaGrid key={area.id} area={area} onOpen={setOpen} />
      ))}

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
