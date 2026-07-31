import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [hoverLink, setHoverLink] = useState(false);
  const [inField, setInField] = useState(false);
  const [moving, setMoving] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Inercia perceptible pero contenida.
  const sx = useSpring(x, { stiffness: 320, damping: 26, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 320, damping: 26, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.documentElement.classList.add("rf-cursor");

    let stopTimer: ReturnType<typeof setTimeout> | undefined;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      const projEl = el?.closest("[data-cursor='project']");
      const linkEl = el?.closest("a, button, [data-cursor='link']");
      setHoverProject(!!projEl);
      setHoverLink(!!linkEl && !projEl);
      setInField(!!el?.closest("#hero") && !projEl && !linkEl);
      setMoving(true);
      if (stopTimer) clearTimeout(stopTimer);
      stopTimer = setTimeout(() => setMoving(false), 140);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (stopTimer) clearTimeout(stopTimer);
      document.documentElement.classList.remove("rf-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = hoverProject
    ? 84
    : hoverLink
      ? 20
      : inField
        ? moving
          ? 22
          : 16
        : 10;

  return (
    <>
      {/* Halo de revelado: solo dentro del campo del hero */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(236,208,18,0.10) 0%, rgba(236,208,18,0.03) 45%, rgba(236,208,18,0) 70%)",
        }}
        animate={{
          width: inField ? 320 : 0,
          height: inField ? 320 : 0,
          opacity: inField ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 24 }}
      />

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
    </>
  );
}
