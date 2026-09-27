import { motion } from "motion/react";

const blocks = [
  {
    title: "Agencias y productoras",
    text: "Me incorporo a vuestros proyectos como parte del equipo, en producción con IA o en edición. También en marca blanca si lo necesitáis, bajo vuestro nombre y sin contacto directo con vuestro cliente.",
  },
  {
    title: "Colaboración estable",
    text: "Si necesitáis a alguien de forma continuada, trabajo con un número fijo de horas a la semana, en horario de tarde española.",
  },
  {
    title: "Marcas",
    text: "Piezas de campaña en horizontal y vertical, listas para la web y las redes.",
  },
];

export function Collaborate() {
  return (
    <section
      id="colaboro"
      className="border-t px-5 py-20 md:px-10 md:py-32"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
            06 — CÓMO COLABORO
          </span>
        </div>
        <div className="col-span-12 md:col-span-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-sans font-extrabold leading-[0.95] tracking-[-0.04em]"
            style={{ color: "#f5f5f5", fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
          >
            Cómo colaboro<span style={{ color: "#ecd012" }}>.</span>
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
            {blocks.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t pt-6"
                style={{ borderColor: "#161616" }}
              >
                <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#8a8a8a" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-xl font-semibold md:text-2xl" style={{ color: "#f5f5f5" }}>
                  {b.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed md:text-[15px]" style={{ color: "#8a8a8a" }}>
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-14 font-sans text-lg md:mt-20 md:text-2xl" style={{ color: "#f5f5f5" }}>
            Cada encargo empieza por entender qué necesitáis contar y a quién
            <span style={{ color: "#ecd012" }}>.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
