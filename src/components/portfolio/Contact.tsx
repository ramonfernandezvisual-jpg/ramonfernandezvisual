import { motion } from "motion/react";

export function Contact() {
  return (
    <section
      id="contacto"
      className="px-5 py-28 md:px-10 md:py-40"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
            07 — HABLEMOS
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="col-span-12 md:col-span-10"
        >
          <h2
            className="font-sans font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ color: "#f5f5f5", fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            HABLEMOS<span style={{ color: "#ecd012" }}>.</span>
          </h2>

          <p
            className="mt-8 max-w-2xl font-sans text-lg leading-relaxed md:text-xl"
            style={{ color: "#8a8a8a" }}
          >
            ¿Tienes un proyecto, una colaboración o una oportunidad en la que
            pueda aportar?
          </p>

          <div className="mt-16 grid grid-cols-12 gap-6 md:mt-24">
            <div className="col-span-12 space-y-1 md:col-span-6">
              <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                CONTACTO DIRECTO
              </p>
              <p className="font-sans text-2xl font-semibold md:text-3xl" style={{ color: "#f5f5f5" }}>
                Ramón Fernández
              </p>
            </div>


            <div className="col-span-12 space-y-6 md:col-span-6">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                  TELÉFONO
                </p>
                <a
                  href="tel:+34669250343"
                  className="mt-1 block font-sans text-xl font-medium transition-colors hover:text-[color:var(--brand)] md:text-2xl"
                  style={{ color: "#f5f5f5" }}
                >
                  +34 669 25 03 43
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                  EMAIL
                </p>
                <a
                  href="mailto:ramonfernandezvisual@gmail.com"
                  className="mt-1 block break-all font-sans text-xl font-medium transition-colors hover:text-[color:var(--brand)] md:text-2xl"
                  style={{ color: "#f5f5f5" }}
                >
                  ramonfernandezvisual@gmail.com
                </a>
              </div>
            </div>
          </div>

          <a
            href="mailto:ramonfernandezvisual@gmail.com"
            className="group mt-16 inline-flex items-center gap-4 border-t border-b py-6 font-sans text-lg font-medium tracking-[0.14em] transition-colors md:mt-24 md:text-2xl"
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
        </motion.div>
      </div>
    </section>
  );
}
