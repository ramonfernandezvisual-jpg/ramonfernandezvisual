import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const WORDS = [
  "CAMPAÑA DE PRODUCTO",
  "VÍDEO CON IA",
  "IMAGEN CON IA",
  "INFLUENCER CON IA",
  "STORYTELLING",
  "DIRECCIÓN CREATIVA",
];

const AREA_INDEX = [
  { id: "01", label: "NARRATIVA" },
  { id: "02", label: "AVATARES" },
  { id: "03", label: "EDICIÓN" },
  { id: "04", label: "ARQUITECTURA" },
  { id: "05", label: "LICITACIONES" },
];

export function Hero() {
  const [i, setI] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden px-5 pb-10 pt-24 md:px-10 md:pb-14 md:pt-28"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between">
        {/* Meta superior */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 flex items-center justify-between font-mono text-[11px] tracking-[0.22em]"
          style={{ color: "#8a8a8a" }}
        >
          <span style={{ color: "#ecd012" }}>PORTFOLIO VISUAL — 2026</span>
          <span>REMOTO</span>
        </motion.div>

        {/* Composición principal */}
        <div className="relative mt-10 grid grid-cols-12 items-center gap-8 md:mt-14">
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="relative z-10 col-span-12 md:col-span-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-extrabold uppercase leading-[0.92] tracking-[-0.045em]"
              style={{ color: "#f5f5f5", fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Ramón
              <br />
              Fernández
            </motion.h1>

            {/* Tipografía cinética */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-5 flex flex-row flex-nowrap items-baseline gap-[0.32em] md:mt-6 md:gap-3"
            >
              <span
                className="font-sans font-medium leading-[1.35] tracking-[-0.02em] whitespace-nowrap md:tracking-normal md:text-2xl"
                style={{ color: "#8a8a8a", fontSize: "clamp(0.68rem, 4.3vw, 1.5rem)" }}
              >
                DIRECCIÓN VISUAL EN
              </span>
              <span
                className="relative inline-block h-[1.35em] shrink-0 overflow-hidden font-sans font-bold uppercase leading-[1.35] tracking-[-0.01em] md:text-2xl"
                style={{ fontSize: "clamp(0.68rem, 4.3vw, 1.5rem)" }}
              >
                {/* reserva de ancho para la palabra más larga */}
                <span aria-hidden className="invisible block whitespace-nowrap">
                  CAMPAÑA DE PRODUCTO
                </span>
                <motion.span
                  key={WORDS[i]}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 block whitespace-nowrap"
                  style={{ color: "#ecd012" }}
                >
                  {WORDS[i]}
                </motion.span>
              </span>

            </motion.div>

          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="relative z-10 mt-10 flex items-end justify-between gap-6 md:mt-12"
        >
          <button
            onClick={() => go("portfolio")}
            className="group flex items-center gap-3 font-sans text-[13px] font-medium tracking-[0.18em]"
            style={{ color: "#f5f5f5" }}
          >
            <span>EXPLORAR PORTFOLIO</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ color: "#ecd012" }}
            >
              ↓
            </motion.span>
          </button>

          <span
            className="hidden font-mono text-[11px] tracking-[0.2em] md:inline"
            style={{ color: "#8a8a8a" }}
          >
            14 PROYECTOS · 5 ÁREAS
          </span>
        </motion.div>

        {/* Índice sutil de áreas */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          aria-label="Índice de áreas"
          className="relative z-10 mt-6 flex flex-wrap gap-x-6 gap-y-2 md:mt-8 md:gap-x-10"
        >
          {AREA_INDEX.map((a) => (
            <button
              key={a.id}
              onClick={() => go(`area-${a.id}`)}
              className="group font-mono text-[10px] tracking-[0.2em] transition-colors hover:text-[#f5f5f5] md:text-[11px]"
              style={{ color: "#8a8a8a" }}
            >
              <span className="transition-colors group-hover:text-[#ecd012]">{a.id}</span>{" "}
              {a.label}
            </button>
          ))}
        </motion.nav>
      </div>

      {/* Transición suave hacia el Portfolio */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(180deg, rgba(8,8,8,0) 0%, #080808 100%)" }}
      />
    </section>
  );
}

