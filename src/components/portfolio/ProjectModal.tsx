import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 md:p-10"
          style={{ backgroundColor: "rgba(8,8,8,0.95)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                {project.category.toUpperCase()} · {project.year}
              </span>
              <button
                onClick={onClose}
                className="font-mono text-[11px] tracking-[0.2em] transition-colors hover:text-[color:var(--brand)]"
                style={{ color: "#f5f5f5" }}
              >
                CERRAR ✕
              </button>
            </div>

            <div
              className={`relative w-full overflow-hidden ${
                project.orientation === "horizontal" ? "aspect-video" : "mx-auto aspect-[9/16] max-w-md"
              }`}
              style={{ backgroundColor: "#000" }}
            >
              {project.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                  <div className="relative z-10">
                    <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#ecd012" }}>
                      YOUTUBE ID PENDIENTE
                    </p>
                    <p className="mt-2 font-sans text-sm" style={{ color: "#f5f5f5" }}>
                      Añade el ID del vídeo en <code>src/data/projects.ts</code>.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-12 gap-4">
              <h3
                className="col-span-12 font-sans font-bold leading-tight tracking-[-0.02em] md:col-span-8"
                style={{ color: "#f5f5f5", fontSize: "clamp(1.5rem,2.4vw,2.25rem)" }}
              >
                {project.title}
              </h3>
              <div className="col-span-12 space-y-2 md:col-span-4">
                <div className="flex justify-between font-mono text-[11px] tracking-[0.18em]" style={{ color: "#8a8a8a" }}>
                  <span>ROL</span>
                  <span style={{ color: "#f5f5f5" }}>{project.role}</span>
                </div>
                <div className="flex justify-between font-mono text-[11px] tracking-[0.18em]" style={{ color: "#8a8a8a" }}>
                  <span>AÑO</span>
                  <span style={{ color: "#f5f5f5" }}>{project.year}</span>
                </div>
              </div>
              <p
                className="col-span-12 font-sans text-sm leading-relaxed md:col-span-8 md:text-base"
                style={{ color: "#8a8a8a" }}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
