import { motion } from "motion/react";
import { BrushTrail } from "./Extras";
import { useLang, useT } from "@/lib/i18n";

export function Contact() {
  const t = useT();
  const lang = useLang();
  return (
    <section
      id="contacto"
       className="relative px-5 pb-10 pt-10 md:px-10 md:pb-12 md:pt-24 lg:pb-16 lg:pt-32"
      style={{ backgroundColor: "#111111" }}
    >
      <BrushTrail />
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-2">
          <span className="whitespace-nowrap font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
            {t("08 — HABLEMOS", "08 — LET'S TALK")}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="col-span-12 lg:col-span-10"
        >
          <h2
             className="font-sans text-[clamp(2.5rem,10vw,3rem)] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[clamp(3rem,10vw,9rem)]"
             style={{ color: "#f5f5f5" }}
          >
            {t("HABLEMOS", "LET'S TALK")}<span style={{ color: "#ecd012" }}>.</span>
          </h2>

          <p
             className="mt-8 max-w-2xl font-sans text-[16px] leading-[1.55] md:text-xl md:leading-relaxed"
            style={{ color: "#8a8a8a" }}
          >
            {t(
              "¿Tienes una historia en mente?",
              "Do you have a story in mind?",
            )}
          </p>
          <p
            className="mt-3 max-w-2xl font-sans text-[16px] leading-[1.55] md:text-xl md:leading-relaxed"
            style={{ color: "#8a8a8a" }}
          >
            {t(
              "Dime qué necesitas y te preparo una propuesta a medida.",
              "Tell me what you need and I will prepare a tailored proposal.",
            )}
          </p>

          {lang === "es" && (
            <div className="mt-10 md:mt-12">
              <button
                type="button"
                onClick={() => window.location.assign("/presupuesto/")}
                className="group inline-flex h-16 w-full items-center justify-center gap-4 border border-[#f5f5f5] px-8 font-sans text-sm font-bold uppercase tracking-[0.14em] text-[#f5f5f5] transition-colors hover:border-[#ecd012] hover:bg-[#ecd012] hover:text-[#080808] md:w-auto md:text-base"
              >
                <span>Cuéntame tu proyecto</span>
                <span className="inline-block text-[#ecd012] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#080808]">
                  →
                </span>
              </button>
            </div>
          )}

          <div className="mt-14 grid grid-cols-12 gap-6 md:mt-20">
            <div className="col-span-12 space-y-1 md:col-span-6">
              <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                {t("CONTACTO DIRECTO", "DIRECT CONTACT")}
              </p>
              <p className="font-sans text-2xl font-semibold md:text-3xl" style={{ color: "#f5f5f5" }}>
                Ramón Fernández
              </p>
              <p className="font-sans text-base md:text-lg" style={{ color: "#8a8a8a" }}>
                {t("Artista visual", "Visual artist")}
              </p>
            </div>


            <div className="col-span-12 space-y-6 md:col-span-6">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                  WHATSAPP
                </p>
                <a
                  href="https://wa.me/34669250343"
                  target="_blank"
                  rel="noreferrer"
                   className="mt-1 flex min-h-11 items-center font-sans text-xl font-medium transition-colors hover:text-[color:var(--brand)] md:mt-1 md:block md:min-h-0 md:text-2xl"
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
                   className="mt-1 flex min-h-11 items-center font-sans text-[clamp(0.95rem,4.6vw,1.25rem)] [overflow-wrap:normal] [word-break:normal] font-medium transition-colors hover:text-[color:var(--brand)] md:mt-1 md:block md:min-h-0 md:text-2xl"
                  style={{ color: "#f5f5f5" }}
                >
                  ramonfernandezvisual<wbr />@gmail.com
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
