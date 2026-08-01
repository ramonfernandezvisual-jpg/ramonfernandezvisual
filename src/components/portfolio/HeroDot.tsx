import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "motion/react";

type Props = {
  /** Contenedor de referencia (el Hero) */
  containerRef: React.RefObject<HTMLElement | null>;
  /** Reacción sutil al hover del CTA */
  ctaHover?: boolean;
  /** Desvanecido al hacer clic en el CTA */
  hidden?: boolean;
};

/**
 * Punto amarillo del Hero.
 * Reposo: deriva orgánica lentísima. Cursor: atracción con inercia (no seguimiento).
 * Micro-estela: dos ecos casi imperceptibles con retardo.
 */
export function HeroDot({ containerRef, ctaHover = false, hidden = false }: Props) {
  // Deriva autónoma (offset lento)
  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);

  // Atracción al cursor (offset reducido)
  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);

  const sx = useSpring(pullX, { stiffness: 26, damping: 22, mass: 1.1 });
  const sy = useSpring(pullY, { stiffness: 26, damping: 22, mass: 1.1 });

  // Ecos de estela: springs progresivamente más lentos
  const tx1 = useSpring(pullX, { stiffness: 16, damping: 24, mass: 1.4 });
  const ty1 = useSpring(pullY, { stiffness: 16, damping: 24, mass: 1.4 });
  const tx2 = useSpring(pullX, { stiffness: 10, damping: 26, mass: 1.8 });
  const ty2 = useSpring(pullY, { stiffness: 10, damping: 26, mass: 1.8 });

  const x = useTransform([sx, driftX], ([a, b]: number[]) => a + b);
  const y = useTransform([sy, driftY], ([a, b]: number[]) => a + b);
  const x1 = useTransform([tx1, driftX], ([a, b]: number[]) => a + b);
  const y1 = useTransform([ty1, driftY], ([a, b]: number[]) => a + b);
  const x2 = useTransform([tx2, driftX], ([a, b]: number[]) => a + b);
  const y2 = useTransform([ty2, driftY], ([a, b]: number[]) => a + b);

  const dotRef = useRef<HTMLDivElement | null>(null);

  // Deriva orgánica autónoma
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (t: number) => {
      const e = (t - start) / 1000;
      driftX.set(Math.sin(e * 0.11) * 5 + Math.sin(e * 0.047) * 3);
      driftY.set(Math.cos(e * 0.083) * 4 + Math.sin(e * 0.031) * 3);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [driftX, driftY]);

  // Atracción sutil al cursor dentro del Hero
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let idle: ReturnType<typeof setTimeout>;

    const onMove = (ev: PointerEvent) => {
      const node = dotRef.current;
      if (!node) return;
      const r = node.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = ev.clientX - cx;
      const dy = ev.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      // desplazamiento reducido, decae con la distancia
      const strength = Math.min(22, 2600 / dist);
      pullX.set(pullX.get() + (dx / dist) * strength * 0.35);
      pullY.set(pullY.get() + (dy / dist) * strength * 0.35);
      // límite del recorrido
      pullX.set(Math.max(-26, Math.min(26, pullX.get())));
      pullY.set(Math.max(-22, Math.min(22, pullY.get())));

      clearTimeout(idle);
      idle = setTimeout(() => {
        animate(pullX, 0, { duration: 2.6, ease: [0.22, 1, 0.36, 1] });
        animate(pullY, 0, { duration: 2.6, ease: [0.22, 1, 0.36, 1] });
      }, 420);
    };

    const onLeave = () => {
      animate(pullX, 0, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      animate(pullY, 0, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      clearTimeout(idle);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [containerRef, pullX, pullY]);

  return (
    <motion.div
      animate={{ x: ctaHover ? -8 : 0, y: ctaHover ? 4 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute right-[8%] top-1/2 z-0 -translate-y-1/2"
    >
      {/* estela: ecos tenues */}
      <motion.div
        style={{ x: x2, y: y2, backgroundColor: "#ecd012", opacity: hidden ? 0 : 0.1 }}
        className="absolute h-[7px] w-[7px] rounded-full blur-[2px] transition-opacity duration-700"
      />
      <motion.div
        style={{ x: x1, y: y1, backgroundColor: "#ecd012", opacity: hidden ? 0 : 0.18 }}
        className="absolute h-[7px] w-[7px] rounded-full blur-[1px] transition-opacity duration-700"
      />
      {/* punto */}
      <motion.div
        ref={dotRef}
        style={{ x, y, backgroundColor: "#ecd012" }}
        animate={{
          scale: hidden ? 0.4 : ctaHover ? 1.35 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[7px] w-[7px] rounded-full"
      />
    </motion.div>
  );
}
