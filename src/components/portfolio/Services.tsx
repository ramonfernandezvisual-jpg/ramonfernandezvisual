import { motion } from "motion/react";

const services = [
  {
    title: "Cortometrajes y piezas narrativas",
    examples: "Nico y el monstruo del tejado · 27 años más tarde · Síndrome del impostor",
  },
  { title: "Spots", examples: "Levi's «Drugstore» · Cerveza Calaca Viva · The Silent Guards" },
  { title: "Campañas de marca", examples: "" },
  { title: "Personajes de marca", examples: "El tiempo es oro · Yo no soy real" },
  { title: "Convertir una escena normal en escena cinematográfica", examples: "" },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="border-t px-5 py-10 md:px-10 md:py-24 lg:py-32"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12">
          <span className="whitespace-nowrap font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
            SERVICIOS
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
          QUÉ PUEDO HACER POR TU MARCA
        </motion.h2>
        <div className="col-span-12 lg:col-span-10 lg:col-start-3">
          <div className="mt-10 md:mt-14 lg:mt-20">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="grid grid-cols-12 gap-x-4 gap-y-2 border-t py-6 md:py-8"
                style={{ borderColor: "#161616" }}
              >
                <span
                  className="col-span-2 font-mono text-[11px] tracking-[0.22em] md:col-span-1"
                  style={{ color: "#8a8a8a" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="col-span-10 font-sans text-xl font-semibold md:col-span-6 md:text-2xl"
                  style={{ color: "#f5f5f5" }}
                >
                  {s.title}
                </h3>
                {s.examples && (
                  <p
                    className="col-span-10 col-start-3 font-sans text-[16px] leading-[1.55] md:col-span-5 md:col-start-auto md:text-[15px] md:leading-relaxed"
                    style={{ color: "#8a8a8a" }}
                  >
                    {s.examples}
                  </p>
                )}
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "#161616" }} />
          </div>

          <p
            className="mt-14 font-sans text-[17px] leading-[1.5] md:mt-20 md:text-2xl md:leading-normal"
            style={{ color: "#f5f5f5" }}
          >
            Cuéntame tu presupuesto y te propongo algo a medida
            <span style={{ color: "#ecd012" }}>.</span>
          </p>

          <a
            href="#contacto"
            className="group mt-10 inline-flex items-center gap-4 border-t border-b py-6 font-sans text-lg font-medium tracking-[0.14em] transition-colors md:text-2xl"
            style={{ borderColor: "#2a2a2a", color: "#f5f5f5" }}
          >
            <span>ESCRÍBEME</span>
            <span
              className="inline-block transition-transform duration-500 group-hover:translate-x-2"
              style={{ color: "#ecd012" }}
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
