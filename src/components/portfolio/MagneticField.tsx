import { useEffect, useRef } from "react";

/**
 * "Campo magnético": retícula de líneas finísimas en gris muy oscuro que
 * reacciona con lentitud al puntero. En reposo es casi imperceptible.
 */
export function MagneticField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const pointer = { x: -9999, y: -9999, active: 0 };
    const target = { x: -9999, y: -9999, active: 0 };

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
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      const inside =
        target.x > -80 && target.y > -80 && target.x < w + 80 && target.y < h + 80;
      target.active = inside ? 1 : 0;
    };
    const onLeave = () => {
      target.active = 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const step = 34; // separación de la retícula
    const radius = 190;

    const draw = () => {
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;
      pointer.active += (target.active - pointer.active) * 0.03;

      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";

      const cols = Math.ceil(w / step) + 1;
      const rows = Math.ceil(h / step) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * step;
          const y = j * step;
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy);
          const f = Math.max(0, 1 - dist / radius) * pointer.active;
          const push = f * f * 16;
          const nx = dist > 0.001 ? dx / dist : 0;
          const ny = dist > 0.001 ? dy / dist : 0;
          const px = x + nx * push;
          const py = y + ny * push;

          const len = 9 + f * 7;
          const angle = Math.atan2(ny, nx) + Math.PI / 2;
          const ax = (Math.cos(angle) * len) / 2;
          const ay = (Math.sin(angle) * len) / 2;

          ctx.strokeStyle = `rgba(245,245,245,${0.035 + f * 0.14})`;
          ctx.lineWidth = 0.6 + f * 0.35;
          ctx.beginPath();
          ctx.moveTo(px - ax, py - ay);
          ctx.lineTo(px + ax, py + ay);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      // Estado estático, sin animación.
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
