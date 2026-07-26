import { motion } from "motion/react";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t px-5 py-28 md:px-10 md:py-40"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-6">
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

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="col-span-12 font-sans text-lg leading-relaxed md:col-span-8 md:text-2xl md:leading-snug"
          style={{ color: "#f5f5f5" }}
        >
          Soy Ramón Fernández,{" "}
          <span style={{ color: "#ecd012" }}>Visual Designer &amp; AI Specialist</span>.
          Trabajo en la intersección entre diseño visual, vídeo, inteligencia
          artificial y narrativa. Mi experiencia en arquitectura e interiorismo
          me ha dado una forma de entender el espacio, la luz, la composición y
          la atmósfera que hoy aplico a diferentes disciplinas y proyectos.
        </motion.p>

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
