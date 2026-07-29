import { motion } from "motion/react";

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-6">
        {/* Meta superior */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 flex items-center justify-between font-mono text-[11px] tracking-[0.2em]"
          style={{ color: "#8a8a8a" }}
        >
          <span style={{ color: "#ecd012" }}>PORTFOLIO VISUAL — 2026</span>
          <span className="hidden md:inline">REMOTO</span>
        </motion.div>

        {/* Titular principal */}
        <div className="col-span-12 mt-14 md:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-extrabold uppercase leading-[0.88] tracking-[-0.04em]"
            style={{
              color: "#f5f5f5",
              fontSize: "clamp(2.75rem, 10vw, 10rem)",
            }}
          >
            <span className="block">Una misma</span>
            <span className="block pl-[6vw]" style={{ color: "#ecd012" }}>
              mirada.
            </span>
            <span className="block">Diferentes</span>
            <span className="block pl-[12vw]">formas de crear.</span>
          </motion.h1>
        </div>

        {/* Textos secundarios */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 mt-14 grid grid-cols-12 gap-6 md:mt-24"
        >
          <div className="col-span-12 md:col-span-6">
            <p
              className="font-sans text-xl font-medium leading-snug md:text-2xl"
              style={{ color: "#f5f5f5" }}
            >
              Imagen. Vídeo. IA. Narrativa.
              <br />
              <span style={{ color: "#8a8a8a" }}>Una misma dirección visual.</span>
            </p>
            <p
              className="mt-4 max-w-md font-sans text-sm leading-relaxed md:text-base"
              style={{ color: "#8a8a8a" }}
            >
              Creo experiencias visuales para diferentes disciplinas y proyectos.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 md:text-right">
            <p className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#8a8a8a" }}>
              — FIRMA
            </p>
            <p
              className="mt-2 font-sans text-sm font-semibold tracking-[0.18em] md:text-base"
              style={{ color: "#f5f5f5" }}
            >
              RAMÓN FERNÁNDEZ
            </p>
            <p className="mt-1 font-sans text-xs md:text-sm" style={{ color: "#ecd012" }}>
              Visual Designer | AI Video Creator | Art Direction
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="mx-auto mt-16 flex w-full max-w-[1600px] items-end justify-between"
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
        <span
          className="hidden font-mono text-[11px] tracking-[0.2em] md:inline"
          style={{ color: "#8a8a8a" }}
        >
          14 PROYECTOS · 5 ÁREAS
        </span>
      </motion.div>
    </section>
  );
}
