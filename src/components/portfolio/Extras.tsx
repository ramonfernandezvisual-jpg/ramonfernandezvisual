import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useT } from "@/lib/i18n";

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
const MARQUEE = ["Cortometrajes", "Spots", "Personajes", "Marca blanca", "En remoto"];

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
const MANIFESTO_ES = [
  "Primero, qué se quiere contar. Después, cómo.",
  "Cada decisión la tomo yo.",
  "Un plano bonito no basta si no dice algo.",
  "Si se nota el truco, algo ha fallado.",
];
const MANIFESTO_EN = [
  "First, what you want to say. Then, how.",
  "I make every decision.",
  "A beautiful shot is not enough if it says nothing.",
  "If the trick shows, something has gone wrong.",
];

export function Manifesto() {
  const t = useT();
  const MANIFESTO = t(MANIFESTO_ES, MANIFESTO_EN);
  return (
    <section className="px-5 py-6 md:px-10 md:py-24 lg:py-32" style={{ backgroundColor: "#080808" }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="hidden lg:col-span-2 lg:block" />
        <div className="col-span-12 space-y-[18px] md:space-y-2 lg:col-span-10">
        {MANIFESTO.map((l, i) => (
          <motion.p
            key={l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="w-full font-sans text-[21px] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[clamp(1.2rem,2.8vw,2.4rem)] md:leading-[1.15]"
            style={{ color: "#f5f5f5", textWrap: "balance" }}
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
const STEPS_ES = ["Idea y guion", "Personajes y entornos", "Generación e iteración", "Montaje", "Sonido y entrega"];
const STEPS_EN = ["Idea and script", "Characters and environments", "Generation and iteration", "Editing", "Sound and delivery"];

export function Process() {
  const t = useT();
  const STEPS = t(STEPS_ES, STEPS_EN);
  return (
    <section
      className="border-t px-5 py-10 md:px-10 md:py-24 lg:py-32"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
          <h2
            className="col-span-12 font-sans text-[24px] font-semibold uppercase leading-[1.08] tracking-[-0.02em] md:text-[clamp(1.375rem,3vw,2.5rem)]"
            style={{ color: "#f5f5f5" }}
          >
            {t("DETRÁS DE CADA PIEZA", "BEHIND EVERY PIECE")}
          </h2>
        <div className="col-span-12 lg:col-span-10 lg:col-start-3">
          <p className="mt-6 max-w-3xl font-sans text-[16px] leading-[1.55] md:text-xl md:leading-relaxed lg:mt-8" style={{ color: "#8a8a8a" }}>
            {t(
              "Todo se decide mucho antes del primer plano. Empieza con una idea clara y un buen guion. Después se diseñan los personajes y los entornos, con unas referencias que fijan la luz, el color y el tono. Entonces se genera, se prueba y se vuelve a probar hasta que cada plano dice lo que tiene que decir. Lo que marca la diferencia es lo que lo rodea, el ritmo del montaje, el sonido y el cuidado hasta la entrega.",
              "Everything is decided long before the first shot. It starts with a clear idea and a good script. Then the characters and environments are designed, with references that set the light, the color and the tone. Then we generate, test and test again until every shot says what it has to say. What makes the difference is everything around it: the rhythm of the edit, the sound and the care taken through to delivery.",
            )}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:mt-14 md:grid-cols-3 md:gap-8 lg:mt-20 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <div key={s} className="border-t pt-6" style={{ borderColor: "#161616" }}>
                <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#8a8a8a" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-base font-semibold [overflow-wrap:anywhere] [hyphens:none] sm:text-xl lg:text-2xl" style={{ color: "#f5f5f5" }}>
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
const FAQS_ES = [
  ["¿Trabajas en marca blanca?", "Sí. Trabajo bajo el nombre de la agencia o productora, sin contacto con el cliente final y sin publicar nada sin permiso."],
  ["¿Cuánto tarda una pieza?", "Depende de la pieza. El plazo se fija en el presupuesto y se cumple."],
  ["¿Cómo empezamos?", "Cuéntame la idea o mándame el guion si ya lo tenéis, y te propongo un enfoque y un presupuesto."],
  ["¿Desde dónde trabajas?", "En remoto, con equipos de cualquier país."],
  ["¿Cuándo no conviene usar IA?", "Depende de cada proyecto, y la tecnología avanza casi cada día. Lo valoramos juntos antes de empezar, y si algo no encaja te lo diré con sinceridad."],
  ["¿Cómo usas la IA?", "Al servicio de la idea. No copio el estilo de otros artistas y cada pieza parte de una dirección de arte propia."],
];
const FAQS_EN = [
  ["Do you work white label?", "Yes. I work under the name of the agency or production company, with no contact with the end client and without publishing anything without permission."],
  ["How long does a piece take?", "It depends on the piece. The deadline is set in the quote and I keep to it."],
  ["How do we start?", "Tell me the idea, or send me the script if you already have one, and I will propose an approach and a quote."],
  ["Where do you work from?", "Remotely, with teams from any country."],
  ["When is AI not the right choice?", "It depends on each project, and the technology moves almost every day. We assess it together before starting, and if something does not fit I will tell you honestly."],
  ["How do you use AI?", "In the service of the idea. I do not copy other artists' style and each piece starts from its own art direction."],
];

export function FAQ() {
  const t = useT();
  const FAQS = t(FAQS_ES, FAQS_EN);
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="px-5 pb-8 pt-6 md:px-10 md:pb-24 md:pt-0 lg:pb-32" style={{ backgroundColor: "#080808" }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
          <h2
            className="col-span-12 font-sans text-[24px] font-semibold uppercase leading-[1.08] tracking-[-0.02em] md:text-[clamp(1.375rem,3vw,2.5rem)]"
            style={{ color: "#f5f5f5" }}
          >
            {t("PREGUNTAS FRECUENTES", "FREQUENTLY ASKED QUESTIONS")}
          </h2>
        <div className="col-span-12 lg:col-span-10 lg:col-start-3">
          <div className="mt-10 border-b md:mt-14 lg:mt-20" style={{ borderColor: "#161616" }}>
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-t" style={{ borderColor: "#161616" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full min-h-11 items-center justify-between gap-6 py-5 text-left font-sans text-base font-semibold sm:text-lg md:py-6 md:text-xl lg:text-2xl"
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
                        <p className="max-w-3xl pb-6 font-sans text-[16px] leading-[1.55] md:text-lg md:leading-relaxed" style={{ color: "#8a8a8a" }}>
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
const DOORS_ES = [
  ["Soy agencia o productora", "Colaboración para agencia o productora"],
  ["Busco colaboración estable", "Colaboración estable"],
  ["Soy una marca", "Proyecto para una marca"],
];
const DOORS_EN = [
  ["I am an agency or production company", "Collaboration for an agency or production company"],
  ["I am looking for a stable collaboration", "Stable collaboration"],
  ["I am a brand", "Project for a brand"],
];

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const DOORS = t(DOORS_ES, DOORS_EN);
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
          aria-label={t("¿Qué necesitas?", "What do you need?")}
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
              aria-label={t("Cerrar", "Close")}
               className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center font-sans text-2xl md:h-10 md:w-10"
              style={{ color: "#f5f5f5" }}
            >
              ×
            </button>
            <h3 className="font-sans text-3xl font-extrabold tracking-[-0.03em] md:text-4xl" style={{ color: "#f5f5f5" }}>
              {t("¿Qué necesitas?", "What do you need?")}
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
              {t("Te respondo yo, sin intermediarios.", "I reply myself, with no intermediaries.")}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
