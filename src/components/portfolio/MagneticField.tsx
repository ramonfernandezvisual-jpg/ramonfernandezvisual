import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** 0..1 — intensidad de interacción, para sincronizar sonido. */
  onIntensity?: (v: number) => void;
};

/**
 * "Campo magnético": superficie de líneas finas y geométricas (blancos y grises
 * muy oscuros) visible en reposo. Reacciona al puntero con inercia, profundidad
 * en capas (parallax) y una zona circular de revelado alrededor del cursor.
 */
export function MagneticField({ className = "", onIntensity }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cbRef = useRef(onIntensity);
  cbRef.current = onIntensity;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;

    const pointer = { x: -9999, y: -9999, active: 0, vel: 0 };
    const target = { x: -9999, y: -9999, active: 0 };
    let lastTx = 0;
    let lastTy = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      const d = Math.hypot(nx - lastTx, ny - lastTy);
      lastTx = nx;
      lastTy = ny;
      target.x = nx;
      target.y = ny;
      pointer.vel = Math.min(1, pointer.vel + d / 120);
      // Activo también cuando el cursor está en el hero, aunque quede fuera del canvas.
      const margin = 420;
      target.active =
        nx > -margin && ny > -margin && nx < w + margin && ny < h + margin ? 1 : 0;
    };
    const onLeave = () => {
      target.active = 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    // Capas de profundidad: líneas horizontales con distinta densidad y parallax.
    const layers = [
      { gap: 26, depth: 0.35, base: 0.05, width: 0.6 },
      { gap: 42, depth: 0.7, base: 0.085, width: 0.75 },
      { gap: 78, depth: 1, base: 0.14, width: 1 },
    ];

    const RADIUS = 260;
    let t = 0;
    let raf = 0;
    let emit = 0;

    const draw = () => {
      t += 0.006;

      pointer.x += (target.x - pointer.x) * 0.09;
      pointer.y += (target.y - pointer.y) * 0.09;
      pointer.active += (target.active - pointer.active) * 0.06;
      pointer.vel *= 0.92;

      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const act = pointer.active;
      const boost = 1 + pointer.vel * 0.9;

      for (const layer of layers) {
        const rows = Math.ceil(h / layer.gap) + 1;
        const stepX = 12;
        for (let r = 0; r <= rows; r++) {
          const y0 = r * layer.gap;
          ctx.beginPath();
          let maxF = 0;
          for (let x = -stepX; x <= w + stepX; x += stepX) {
            // Ondulación orgánica de base (muy leve).
            const wave =
              Math.sin(x * 0.006 + t * 1.4 + r * 0.4) * 2.2 * layer.depth +
              Math.sin(x * 0.017 - t * 0.9 + r) * 1.1 * layer.depth;

            const dx = x - pointer.x;
            const dy = y0 - pointer.y;
            const dist = Math.hypot(dx, dy);
            const f = Math.max(0, 1 - dist / RADIUS);
            const falloff = f * f * (3 - 2 * f); // smoothstep
            if (falloff > maxF) maxF = falloff;

            // Deformación tipo superficie flexible: empuje radial + hundimiento.
            const push = falloff * 62 * layer.depth * act * boost;
            const ux = dist > 0.001 ? dx / dist : 0;
            const uy = dist > 0.001 ? dy / dist : 0;

            const px = x + ux * push * 0.35;
            const py = y0 + wave + uy * push;

            if (x === -stepX) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          const reveal = maxF * act;
          ctx.strokeStyle = `rgba(245,245,245,${layer.base + reveal * 0.5})`;
          ctx.lineWidth = layer.width + reveal * 0.7;
          ctx.stroke();
        }
      }

      // Marcas geométricas verticales muy discretas (detalle amarillo mínimo).
      const marks = 5;
      for (let m = 1; m < marks; m++) {
        const x = (w / marks) * m;
        const d = Math.abs(x - pointer.x);
        const f = Math.max(0, 1 - d / (RADIUS * 0.8)) * act;
        ctx.strokeStyle =
          f > 0.35
            ? `rgba(236,208,18,${(f - 0.35) * 0.5})`
            : `rgba(138,138,138,${0.06 + f * 0.08})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(x, h * 0.12);
        ctx.lineTo(x, h * 0.88);
        ctx.stroke();
      }

      if (cbRef.current) {
        emit++;
        if (emit % 6 === 0) cbRef.current(Math.min(1, act * (0.25 + pointer.vel)));
      }

      raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      target.active = 0;
      pointer.active = 0;
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      data-cursor="field"
      className={`h-full w-full ${className}`}
    />
  );
}
