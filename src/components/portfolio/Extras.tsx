import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

/* Aparición suave de secciones */
export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Franja en movimiento */
const MARQUEE = ["Cortometrajes", "Campañas de producto", "Personajes y avatares", "Marca blanca", "En remoto"];

export function Marquee() {
  const Row = () => (
    <div className="flex shrink-0 items-center">
      {MARQUEE.map((t) => (
        <span key={t} className="flex items-center whitespace-nowrap">
          <span className="px-5 md:px-7">{t}</span>
          <span style={{ color: "#ecd012" }}>·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className="overflow-hidden border-y py-3 md:py-4"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
      aria-label={MARQUEE.join(" · ")}
    >
      <div
        className="rf-marquee flex w-max font-sans text-sm font-medium uppercase tracking-[0.14em] md:text-base"
        style={{ color: "#f5f5f5" }}
        aria-hidden
      >
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

/* Manifiesto */
const MANIFESTO = [
  "Primero, qué se quiere contar. Después, cómo.",
  "La IA ejecuta. Las decisiones son mías.",
  "Un plano bonito no basta si no dice algo.",
  "Si se nota el truco, algo ha fallado.",
];

export function Manifesto() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32" style={{ backgroundColor: "#080808" }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2" />
        <div className="col-span-12 space-y-1 md:col-span-10 md:space-y-2">
        {MANIFESTO.map((l, i) => (
          <motion.p
            key={l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="font-sans font-semibold leading-[1.15] tracking-[-0.02em]"
            style={{ color: "#f5f5f5", textWrap: "balance", fontSize: "clamp(1.2rem, 2.8vw, 2.4rem)" }}
          >
            {i === MANIFESTO.length - 1 ? <>{l.slice(0, -1)}<span style={{ color: "#ecd012" }}>.</span></> : l}
          </motion.p>
        ))}
        </div>
      </div>
    </section>
  );
}

/* Detrás de cada pieza */
const STEPS = ["Idea y guion", "Fotogramas de estilo", "Generación", "Montaje", "Sonido y entrega"];

export function Process() {
  return (
    <section
      className="border-t px-5 py-20 md:px-10 md:py-32"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2" />
        <div className="col-span-12 md:col-span-10">
          <h2
            className="font-sans font-extrabold leading-[0.95] tracking-[-0.04em]"
            style={{ color: "#f5f5f5", fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
          >
            Detrás de cada pieza<span style={{ color: "#ecd012" }}>.</span>
          </h2>
          <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed md:text-xl" style={{ color: "#8a8a8a" }}>
            La IA no trabaja sola. Antes del primer plano hay una idea, un guion y unos fotogramas de estilo que marcan el tono. Después llegan el montaje y el sonido, que llevan más tiempo del que parece. Generar es solo una parte del proceso.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-5 md:gap-8">
            {STEPS.map((s, i) => (
              <div key={s} className="border-t pt-6" style={{ borderColor: "#161616" }}>
                <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#8a8a8a" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-xl font-semibold md:text-2xl" style={{ color: "#f5f5f5" }}>
                  {s}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Preguntas frecuentes */
const FAQS = [
  ["¿Trabajas en marca blanca?", "Sí. Trabajo bajo el nombre de la agencia o productora, sin contacto con el cliente final y sin publicar nada sin permiso."],
  ["¿Cuánto tarda una pieza?", "Depende de la pieza. El plazo se fija en el presupuesto y se cumple."],
  ["¿Cómo empezamos?", "Cuéntame la idea o mándame el guion si ya lo tenéis, y te propongo un enfoque y un presupuesto."],
  ["¿Desde dónde trabajas?", "En remoto, en horario de tarde española, con equipos de toda España."],
  ["¿Cuándo no conviene usar IA?", "Cuando la pieza depende de una actuación real o de un producto en movimiento muy preciso. En esos casos te lo diré con sinceridad, y la IA puede quedarse solo en lo que de verdad suma."],
  ["¿Cómo usas la IA?", "Al servicio de la idea. No copio el estilo de otros artistas y cada pieza parte de una dirección de arte propia."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="px-5 py-20 md:px-10 md:py-32" style={{ backgroundColor: "#080808" }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2" />
        <div className="col-span-12 md:col-span-10">
          <h2
            className="font-sans font-extrabold leading-[0.95] tracking-[-0.04em]"
            style={{ color: "#f5f5f5", fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
          >
            Preguntas frecuentes<span style={{ color: "#ecd012" }}>.</span>
          </h2>
          <div className="mt-12 border-b md:mt-20" style={{ borderColor: "#161616" }}>
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-t" style={{ borderColor: "#161616" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-lg font-semibold md:text-2xl"
                    style={{ color: "#f5f5f5" }}
                  >
                    <span>{q}</span>
                    <span
                      className="shrink-0 font-mono text-xl transition-transform duration-300"
                      style={{ color: "#ecd012", transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-6 font-sans text-base leading-relaxed md:text-lg" style={{ color: "#8a8a8a" }}>
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contador animado */
export function CountUp({ to, duration = 1400, delay = 1150 }: { to: number; duration?: number; delay?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start = 0;
    const t = setTimeout(() => {
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);
  return <>{n}</>;
}

/* Rastro de pincel (solo en su contenedor, solo escritorio) */
export function BrushTrail() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const parent = canvas.parentElement!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pts: { x: number; y: number; t: number }[] = [];
    const LIFE = 800;
    const resize = () => {
      const r = parent.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      canvas.style.width = r.width + "px";
      canvas.style.height = r.height + "px";
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = parent.getBoundingClientRect();
      pts.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() });
    };
    const onLeave = () => (pts.length = 0);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    const bristles = [-2.2, -1.1, 0, 1.2, 2.3].map((o, i) => ({ o, a: [0.35, 0.7, 1, 0.6, 0.3][i], w: [0.6, 0.9, 1.4, 0.8, 0.5][i] }));
    let raf = 0;
    const draw = () => {
      const now = performance.now();
      while (pts.length && now - pts[0].t > LIFE) pts.shift();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i];
        const life = 1 - (now - b.t) / LIFE;
        const dx = b.x - a.x, dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        for (const br of bristles) {
          ctx.strokeStyle = `rgba(236,208,18,${(life * br.a * 0.85).toFixed(3)})`;
          ctx.lineWidth = br.w * (0.5 + life);
          ctx.beginPath();
          ctx.moveTo(a.x + nx * br.o, a.y + ny * br.o);
          ctx.lineTo(b.x + nx * br.o, b.y + ny * br.o);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0" />;
}

/* Ventana de contacto */
const EMAIL = "ramonfernandezvisual@gmail.com";
const DOORS = [
  ["Soy agencia o productora", "Colaboración para agencia o productora"],
  ["Busco colaboración estable", "Colaboración estable"],
  ["Soy una marca", "Proyecto para una marca"],
];

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center px-5"
          style={{ backgroundColor: "rgba(8,8,8,0.9)" }}
          role="dialog"
          aria-modal="true"
          aria-label="¿Qué necesitas?"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg border p-8 md:p-10"
            style={{ backgroundColor: "#111111", borderColor: "#2a2a2a" }}
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center font-sans text-2xl"
              style={{ color: "#f5f5f5" }}
            >
              ×
            </button>
            <h3 className="font-sans text-3xl font-extrabold tracking-[-0.03em] md:text-4xl" style={{ color: "#f5f5f5" }}>
              ¿Qué necesitas?
            </h3>
            <div className="mt-8 flex flex-col gap-3">
              {DOORS.map(([label, subject]) => (
                <a
                  key={label}
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
                  onClick={onClose}
                  className="group flex items-center justify-between border px-5 py-4 font-sans text-base font-medium transition-colors hover:border-[color:var(--brand)] md:text-lg"
                  style={{ borderColor: "#2a2a2a", color: "#f5f5f5" }}
                >
                  <span>{label}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#ecd012" }}>→</span>
                </a>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] tracking-[0.12em]" style={{ color: "#8a8a8a" }}>
              Te respondo yo, sin intermediarios.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
