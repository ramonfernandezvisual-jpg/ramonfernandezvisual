import { useCallback, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getYoutubeId, type Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose: rawClose,
  onPrev,
  onNext,
}: {
  project: Project | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const onClose = useCallback(() => {
    rawClose();
  }, [rawClose]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose, onPrev, onNext]);

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
          <button
            onClick={onClose}
            aria-label="Cerrar vídeo"
            className="group fixed right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center md:right-8 md:top-8 md:h-14 md:w-14"
            style={{ color: "#f5f5f5" }}
          >
            <span
              className="text-3xl font-light leading-none transition-colors group-hover:text-[#ecd012] md:text-4xl"
            >
              ×
            </span>
          </button>

          {(onPrev || onNext) && (
            <div
              className="fixed inset-x-0 bottom-4 z-[110] flex items-center justify-between px-5 md:bottom-8 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onPrev}
                aria-label="Proyecto anterior"
                 className="flex min-h-11 items-center font-mono text-[10px] tracking-[0.2em] transition-colors hover:text-[#ecd012] md:min-h-0 md:text-[11px]"
                style={{ color: "#8a8a8a" }}
              >
                ← ANTERIOR
              </button>
              <button
                onClick={onNext}
                aria-label="Proyecto siguiente"
                 className="flex min-h-11 items-center font-mono text-[10px] tracking-[0.2em] transition-colors hover:text-[#ecd012] md:min-h-0 md:text-[11px]"
                style={{ color: "#8a8a8a" }}
              >
                SIGUIENTE →
              </button>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalPlayer key={project.id} project={project} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalPlayer({ project }: { project: Project }) {
  const ytId = useMemo(() => getYoutubeId(project.youtubeUrl), [project.youtubeUrl]);
  const isHorizontal = project.orientation === "horizontal";
  return (
    <div
      className={`relative w-full overflow-hidden ${
        isHorizontal
          ? "aspect-[16/9]"
          : "mx-auto aspect-[9/16] max-h-[85vh] w-auto max-w-[min(100%,calc(85vh*9/16))]"
      }`}
      style={{ backgroundColor: "#000" }}
    >
      {ytId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0&hl=es&vq=hd1080`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={project.cover}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#ecd012" }}>
              EN PREPARACIÓN
            </p>
            <p className="font-sans text-sm" style={{ color: "#f5f5f5" }}>
              El vídeo de este proyecto se añadirá próximamente.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
