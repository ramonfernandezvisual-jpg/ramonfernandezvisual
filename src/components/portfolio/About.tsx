import { motion } from "motion/react";
import ramonAsset from "@/assets/ramon-new.asset.json";
const ramon = ramonAsset.url;


export function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t px-5 py-28 md:px-10 md:py-40"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.2em]"
            style={{ color: "#ecd012" }}
          >
            06 — SOBRE MÍ
          </motion.span>
        </div>

        {/* Fotografía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-4"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ backgroundColor: "#111" }}>
            <img
              src={ramon}
              alt="Ramón Fernández"
              className="h-full w-full object-cover"
              style={{ filter: "grayscale(100%) contrast(1.05)" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
            <span>RAMÓN FERNÁNDEZ</span>
            <span>MMXXVI</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="col-span-12 md:col-span-6"
        >
          <p
            className="font-sans text-lg leading-relaxed md:text-2xl md:leading-snug"
            style={{ color: "#f5f5f5" }}
          >
            Soy Ramón Fernández,{" "}
            <span style={{ color: "#ecd012" }}>Visual Designer | AI Video Creator | Art Direction</span>.
            Trabajo en la intersección entre diseño visual, vídeo, inteligencia

            artificial y narrativa. Mi experiencia en arquitectura e interiorismo
            me ha dado una forma de entender el espacio, la luz, la composición y
            la atmósfera que hoy aplico a diferentes disciplinas y proyectos.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: "#ecd012" }}
            />
            <span
              className="font-mono text-[11px] tracking-[0.22em]"
              style={{ color: "#f5f5f5" }}
            >
              DISPONIBLE PARA COLABORACIONES Y PROYECTOS REMOTOS
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="col-span-12 mt-16 font-sans font-extrabold leading-[0.9] tracking-[-0.04em] md:mt-28"
          style={{
            color: "#f5f5f5",
            fontSize: "clamp(2.5rem, 8vw, 8rem)",
          }}
        >
          Diferentes disciplinas.<br />
          <span style={{ color: "#8a8a8a" }}>Una misma</span> mirada visual
          <span style={{ color: "#ecd012" }}>.</span>
        </motion.h2>
      </div>
    </section>
  );
}
