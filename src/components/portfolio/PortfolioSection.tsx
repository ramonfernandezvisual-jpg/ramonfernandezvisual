import { motion } from "motion/react";
import { useState } from "react";
import { areas, type Project } from "@/data/projects";
import { AreaGrid } from "./Areas";
import { ProjectModal } from "./ProjectModal";

export function PortfolioSection() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="portfolio" style={{ backgroundColor: "#080808" }}>
      <div className="px-5 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#ecd012" }}>
              PORTFOLIO
            </span>
            <h2
              className="mt-5 font-sans font-bold leading-[1.02] tracking-[-0.03em]"
              style={{ color: "#f5f5f5", fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Portfolio seleccionado
            </h2>
            <p
              className="mt-5 max-w-xl font-sans text-sm leading-relaxed md:text-base"
              style={{ color: "#8a8a8a" }}
            >
              Una selección de proyectos visuales desarrollados en diferentes
              disciplinas y formatos.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        {areas.map((area) => (
          <AreaGrid key={area.id} area={area} onOpen={setOpen} />
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
