import { motion } from "motion/react";
import area02 from "@/assets/area-02.jpg";
import area03 from "@/assets/area-03.jpg";
import area04 from "@/assets/area-04.jpg";

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
          className="col-span-12 flex items-center justify-between font-mono text-[11px] tracking-[0.2em]"
          style={{ color: "#8a8a8a" }}
        >
          <span style={{ color: "#ecd012" }}>PORTFOLIO VISUAL — 2026</span>
          <span className="hidden md:inline">REMOTO</span>
        </motion.div>

        {/* Mensaje principal */}
        <div className="col-span-12 md:col-span-8 md:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-extrabold leading-[0.9] tracking-[-0.035em]"
            style={{
              color: "#f5f5f5",
              fontSize: "clamp(2.5rem, 7.5vw, 7rem)",
            }}
          >
            DISEÑO VISUAL PARA<br />
            DIFERENTES DISCIPLINAS<span style={{ color: "#ecd012" }}>.</span>
          </motion.h1>

          {/* Cargo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 font-sans text-base font-semibold tracking-wide md:text-lg"
            style={{ color: "#ecd012" }}
          >
            Visual Designer | AI Specialist | Art Direction
          </motion.p>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-xl font-sans text-base leading-relaxed md:text-lg"
            style={{ color: "#8a8a8a" }}
          >
            Creo imágenes, vídeos y experiencias visuales combinando diseño,
            narrativa, inteligencia artificial y dirección de arte.
          </motion.p>

          {/* Firma / Nombre reducido */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-10 flex items-center gap-4"
          >
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#ecd012" }}
            />
            <span
              className="font-sans text-sm font-semibold tracking-[0.24em] md:text-base"
              style={{ color: "#f5f5f5" }}
            >
              RAMÓN FERNÁNDEZ
            </span>
          </motion.div>
        </div>

        {/* Composición visual editorial — fragmentos de disciplinas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="col-span-12 mt-10 md:col-span-4 md:mt-10"
        >
          <div className="grid grid-cols-6 grid-rows-6 gap-3" style={{ aspectRatio: "3 / 4" }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="col-span-4 row-span-4 overflow-hidden"
            >
              <img src={area03} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="col-span-2 row-span-3 col-start-5 row-start-1 overflow-hidden"
            >
              <img src={area02} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="col-span-3 row-span-2 col-start-2 row-start-5 overflow-hidden"
            >
              <img src={area04} alt="" className="h-full w-full object-cover" />
            </motion.div>
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
            <span>NARRATIVA · IA · EDICIÓN</span>
            <span>MMXXVI</span>
          </div>
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
            14 PROYECTOS · 5 ÁREAS
          </span>
        </motion.div>
      </div>
    </section>
  );
}
