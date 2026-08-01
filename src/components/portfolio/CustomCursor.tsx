import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [hoverLink, setHoverLink] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 30, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.documentElement.classList.add("rf-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      const projEl = el?.closest("[data-cursor='project']");
      const linkEl = el?.closest("a, button, [data-cursor='link']");
      setHoverProject(!!projEl);
      setHoverLink(!!linkEl && !projEl);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("rf-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = hoverProject ? 84 : hoverLink ? 20 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "#ecd012",
      }}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {hoverProject && (
        <span
          className="font-mono text-[11px] font-medium tracking-[0.15em]"
          style={{ color: "#080808" }}
        >
          VER
        </span>
      )}
    </motion.div>
  );
}
