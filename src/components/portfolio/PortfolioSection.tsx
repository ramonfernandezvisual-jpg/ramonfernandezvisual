import { motion } from "motion/react";
import { useState } from "react";
import { areas, type Project } from "@/data/projects";
import {
  AreaArch,
  AreaNarrativa,
  AreaSingle,
  AreaSocialVerticals,
  AreaThreeVerticals,
} from "./Areas";
import { ProjectModal } from "./ProjectModal";

export function PortfolioSection() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="portfolio" style={{ backgroundColor: "#080808" }}>
      <div className="px-5 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 gap-6"
          >
            <div className="col-span-12 flex items-center gap-4 md:col-span-2">
              <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
                — PORTFOLIO
              </span>
            </div>
            <h2
              className="col-span-12 font-sans font-extrabold leading-[0.92] tracking-[-0.04em] md:col-span-7"
              style={{ color: "#f5f5f5", fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
            >
              PORTFOLIO<br />SELECCIONADO<span style={{ color: "#ecd012" }}>.</span>
            </h2>
            <p
              className="col-span-12 self-end font-sans text-sm leading-relaxed md:col-span-3 md:text-base"
              style={{ color: "#8a8a8a" }}
            >
              Una selección de proyectos visuales desarrollados en diferentes
              disciplinas y formatos.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <AreaNarrativa area={areas[0]} onOpen={setOpen} />
        <AreaThreeVerticals area={areas[1]} onOpen={setOpen} />
        <AreaSocialVerticals area={areas[2]} onOpen={setOpen} />
        <AreaArch area={areas[3]} onOpen={setOpen} />
        <AreaSingle area={areas[4]} onOpen={setOpen} />
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
