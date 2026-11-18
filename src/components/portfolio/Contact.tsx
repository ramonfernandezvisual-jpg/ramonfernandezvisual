import { useState } from "react";
import { motion } from "motion/react";
import { BrushTrail, ContactModal } from "./Extras";
import { useLang, useT } from "@/lib/i18n";

export function Contact() {
  const t = useT();
  const lang = useLang();
  const [modal, setModal] = useState(false);
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
              "¿Tienes un proyecto, una colaboración o una oportunidad en la que pueda aportar?",
              "Do you have a project, a collaboration or an opportunity where I can contribute?",
            )}
          </p>
           <p className="mt-3 max-w-2xl font-sans text-[16px] leading-[1.55] md:text-xl md:leading-relaxed" style={{ color: "#8a8a8a" }}>
            {t(
              "Cuéntame la idea en dos frases. Te respondo en menos de 24 horas",
              "Tell me the idea in two sentences. I reply within 24 hours",
            )}
          </p>

          <div className="mt-16 grid grid-cols-12 gap-6 md:mt-24">
            <div className="col-span-12 space-y-1 md:col-span-6">
              <p className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
                {t("CONTACTO DIRECTO", "DIRECT CONTACT")}
              </p>
              <p className="font-sans text-2xl font-semibold md:text-3xl" style={{ color: "#f5f5f5" }}>
                Ramón Fernández
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

          <div className="mt-16 flex flex-wrap gap-x-12 md:mt-24">
            <button
              type="button"
              onClick={() => setModal(true)}
              className="group inline-flex items-center gap-4 border-t border-b py-6 font-sans text-lg font-medium tracking-[0.14em] transition-colors md:text-2xl"
              style={{ borderColor: "#2a2a2a", color: "#f5f5f5" }}
            >
              <span>{t("ESCRÍBEME", "WRITE TO ME")}</span>
              <span
                className="inline-block transition-transform duration-500 group-hover:translate-x-2"
                style={{ color: "#ecd012" }}
              >
                →
              </span>
            </button>
            {lang === "es" && (
              <button
                type="button"
                onClick={() => window.location.assign("/presupuesto/")}
                className="group -mt-px md:mt-0 inline-flex items-center gap-4 border-t border-b py-6 font-sans text-lg font-medium tracking-[0.14em] transition-colors md:text-2xl"
                style={{ borderColor: "#2a2a2a", color: "#f5f5f5" }}
              >
                <span>CUÉNTAME TU PROYECTO</span>
                <span
                  className="inline-block transition-transform duration-500 group-hover:translate-x-2"
                  style={{ color: "#ecd012" }}
                >
                  →
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </section>
  );
}
