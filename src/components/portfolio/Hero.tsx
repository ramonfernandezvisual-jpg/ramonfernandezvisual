import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden px-5 pt-32 md:px-10 md:pt-40"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
        {/* Metadata mono */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] md:col-span-12"
          style={{ color: "#8a8a8a" }}
        >
          <span>PORTFOLIO — 2026</span>
          <span className="hidden md:inline">MADRID · REMOTO</span>
        </motion.div>

        {/* Nombre grande */}
        <div className="col-span-12 md:col-span-7 md:mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-extrabold leading-[0.88] tracking-[-0.04em]"
            style={{
              color: "#f5f5f5",
              fontSize: "clamp(3rem, 11vw, 10.5rem)",
            }}
          >
            RAMÓN<br />
            FERNÁNDEZ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 font-sans text-base font-medium tracking-wide md:text-lg"
            style={{ color: "#ecd012" }}
          >
            Visual Designer &amp; AI Specialist
          </motion.p>
        </div>

        {/* Imagen visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="col-span-12 md:col-span-5 md:mt-6"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={heroImg}
              alt=""
              className="h-full w-full object-cover"
              width={1400}
              height={1700}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
            <span>001 — VISUAL</span>
            <span>MMXXVI</span>
          </div>
        </motion.div>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 mt-12 grid grid-cols-12 gap-6 md:mt-24"
        >
          <p
            className="col-span-12 font-sans text-xl font-medium leading-tight md:col-span-6 md:col-start-1 md:text-3xl"
            style={{ color: "#f5f5f5" }}
          >
            Diseño visual, vídeo, inteligencia artificial y narrativa.
          </p>
          <p
            className="col-span-12 font-sans text-base leading-relaxed md:col-span-5 md:col-start-8 md:text-lg"
            style={{ color: "#8a8a8a" }}
          >
            Creo imágenes, vídeos y experiencias visuales para diferentes
            disciplinas y sectores.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="col-span-12 mb-16 mt-16 flex items-end justify-between md:mt-32"
        >
          <button
            onClick={() => go("portfolio")}
            className="group flex items-center gap-3 font-sans text-sm font-medium tracking-[0.18em] transition-colors"
            style={{ color: "#f5f5f5" }}
          >
            <span>EXPLORAR PORTFOLIO</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#ecd012" }}
            >
              ↓
            </motion.span>
          </button>
          <span className="hidden font-mono text-[11px] tracking-[0.2em] md:inline" style={{ color: "#8a8a8a" }}>
            13 PROYECTOS · 5 ÁREAS
          </span>
        </motion.div>
      </div>
    </section>
  );
}
