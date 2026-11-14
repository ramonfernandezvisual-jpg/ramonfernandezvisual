import { motion } from "motion/react";

const blocks = [
  {
    title: "Agencias y productoras",
    text: "Me incorporo a vuestros proyectos como parte del equipo, en producción o en edición. También en marca blanca si lo necesitáis, bajo vuestro nombre y sin contacto directo con vuestro cliente.",
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
      className="border-t px-5 py-10 md:px-10 md:py-24 lg:py-32"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12">
          <span className="whitespace-nowrap font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
            06 — CÓMO COLABORO
          </span>
        </div>
        <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="col-span-12 font-sans text-[24px] font-semibold uppercase leading-[1.08] tracking-[-0.02em] md:text-[clamp(1.375rem,3vw,2.5rem)]"
            style={{ color: "#f5f5f5" }}
          >
            CÓMO COLABORO
          </motion.h2>
        <div className="col-span-12 lg:col-span-10 lg:col-start-3">

          <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:mt-20 lg:grid-cols-3 lg:gap-8">
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
                 <p className="mt-4 font-sans text-[16px] leading-[1.55] md:text-[15px] md:leading-relaxed" style={{ color: "#8a8a8a" }}>
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>

           <p className="mt-14 font-sans text-[17px] leading-[1.5] md:mt-20 md:text-2xl md:leading-normal" style={{ color: "#f5f5f5" }}>
            Cada encargo empieza por entender qué necesitáis contar y a quién
            <span style={{ color: "#ecd012" }}>.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
