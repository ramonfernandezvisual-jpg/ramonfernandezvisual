import { motion } from "motion/react";
import type { Project } from "@/data/projects";

/** Deriva "categoría . año" respetando metaLine si existe. */
function metaOf(project: Project) {
  if (project.metaLine) {
    const raw = project.metaLine;
    const idx = raw.search(/[_-]/);
    if (idx > -1) return raw.slice(idx + 1).trim();
  }
  return `${project.category.toLowerCase()} . ${project.year}`;
}

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
  const pending = !project.youtubeUrl;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="project"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`group block w-full text-left ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-[20px] ${aspect}`}
        style={{ backgroundColor: "#111111" }}
      >
        <motion.img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className={`h-full w-full object-cover ${pending ? "opacity-30" : ""}`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {pending && (
          <span
            className="absolute left-5 top-5 border px-3 py-1 font-mono text-[10px] tracking-[0.2em]"
            style={{ borderColor: "#2a2a2a", color: "#ecd012" }}
          >
            EN PREPARACIÓN
          </span>
        )}
      </div>

      {showMeta && (
        <div className="mt-4">
          <p
            className="font-sans text-[15px] font-semibold leading-tight tracking-[-0.01em] md:text-base"
            style={{ color: pending ? "#8a8a8a" : "#f5f5f5" }}
          >
            {project.title}
          </p>
          <p
            className="mt-1 font-mono text-[11px] tracking-[0.12em]"
            style={{ color: "#8a8a8a" }}
          >
            {pending ? "próximamente" : metaOf(project)}
          </p>
        </div>
      )}

    </motion.button>
  );
}
