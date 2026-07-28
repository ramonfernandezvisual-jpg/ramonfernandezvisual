import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export function ProjectTile({
  project,
  onOpen,
  index = 0,
  showMeta = true,
  className = "",
}: {
  project: Project;
  onOpen: (p: Project) => void;
  index?: number;
  showMeta?: boolean;
  className?: string;
}) {
  const aspect = project.orientation === "horizontal" ? "aspect-[16/9]" : "aspect-[9/16]";
  const thumb = project.cover;


  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="project"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`group relative block w-full overflow-hidden text-left ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${aspect}`} style={{ backgroundColor: "#111" }}>
        <motion.img
          src={thumb}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,8,0) 55%, rgba(8,8,8,0.55) 100%)",
          }}
        />
      </div>
      {showMeta && (
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h4 className="font-sans text-sm font-medium tracking-tight md:text-base" style={{ color: "#f5f5f5" }}>
              {project.title}
            </h4>
            <p className="mt-1 font-mono text-[10px] tracking-[0.18em]" style={{ color: "#8a8a8a" }}>
              {project.category.toUpperCase()} · {project.year}
            </p>
          </div>
          <span
            className="translate-y-1 whitespace-nowrap font-sans text-[11px] font-medium tracking-[0.18em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ color: "#ecd012" }}
          >
            VER PROYECTO →
          </span>
        </div>
      )}
    </motion.button>
  );
}
