import { motion } from "motion/react";
import ramonAsset from "@/assets/ramon-new.asset.json";
const ramon = ramonAsset.url;


export function About() {
  return (
    <section
      id="sobre-mi"
      className="px-5 py-20 md:px-10 md:py-32"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.2em]"
            style={{ color: "#f5f5f5" }}
          >
            07 — SOBRE MÍ
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
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em]" style={{ color: "#f5f5f5" }}>
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
            Soy Ramón Fernández y produzco cortometrajes, campañas y personajes con inteligencia artificial para agencias, productoras y marcas. Me ocupo de las piezas de principio a fin, de la idea y la estética al ritmo y el montaje.
            <br /><br />
            Aprendí a construir imágenes mucho antes de que existiera la IA. Durante más de 15 años he levantado espacios y atmósferas de la nada, y desde 2019 trabajo de forma independiente para empresas y profesionales. Ese oficio es el que aplico hoy en cada plano. Sé cómo se comporta la luz, cómo se compone un encuadre y qué hace que una escena resulte creíble.
            <br /><br />
            Por eso, para mí, la tecnología nunca es un atajo, sino una herramienta al servicio de la dirección visual. Lo que importa es que la historia llegue.
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
          className="col-span-12 mt-12 font-sans font-extrabold leading-[0.95] tracking-[-0.04em] md:col-span-10 md:col-start-3 md:mt-20"
          style={{
            color: "#f5f5f5",
            fontSize: "clamp(2.25rem, 6vw, 5.5rem)",
          }}
        >
          Diferentes disciplinas.<br />
          <span style={{ color: "#f5f5f5" }}>Una misma</span> mirada visual
          <span style={{ color: "#ecd012" }}>.</span>

        </motion.h2>
      </div>
    </section>
  );
}
