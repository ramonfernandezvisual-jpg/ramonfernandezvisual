import { motion } from "motion/react";
import { useT } from "@/lib/i18n";

const servicesEs = [
  {
    title: "Cortometrajes y piezas narrativas",
    text: "Historias cortas, desde la idea hasta el montaje final.",
  },
  {
    title: "Spots y campañas",
    text: "Anuncios breves, o varias piezas enlazadas, que cuentan la historia de tu marca.",
  },
  {
    title: "Contenido para redes",
    text: "Piezas nuevas cada mes, con versiones más breves de tus proyectos adaptadas a cada plataforma.",
  },
  { title: "Personajes", text: "Personajes que dan una cara reconocible a tu marca." },
  {
    title: "Convertir una escena normal en escena cinematográfica",
    text: "Tu grabación de siempre, llevada a una escena de cine con su atmósfera, sus planos y sus cambios de cámara.",
  },
  {
    title: "Piezas de producto con historia",
    text: "Tu producto aparece dentro de una pequeña historia, en una situación real, no como una imagen de catálogo.",
  },
  {
    title: "Arquitectura e interiorismo",
    text: "Espacios con atmósfera, luz y movimiento, pensados para estudios de arquitectura.",
  },
];

const servicesEn = [
  {
    title: "Short films and narrative pieces",
    text: "Short stories, from the idea to the final edit.",
  },
  {
    title: "Spots and campaigns",
    text: "Short ads, or several linked pieces, that tell your brand's story.",
  },
  {
    title: "Content for social media",
    text: "New pieces every month, with shorter versions of your projects adapted to each platform.",
  },
  { title: "Characters", text: "Characters that give your brand a recognizable face." },
  {
    title: "Turn an ordinary scene into a cinematic scene",
    text: "Your usual footage, taken to a film-like scene with its atmosphere, its shots and its camera changes.",
  },
  {
    title: "Product pieces with a story",
    text: "Your product appears inside a small story, in a real situation, not as a catalog image.",
  },
  {
    title: "Architecture and interior design",
    text: "Spaces with atmosphere, light and movement, designed for architecture studios.",
  },
];

export function Services() {
  const t = useT();
  const services = t(servicesEs, servicesEn);
  return (
    <section
      id="servicios"
      className="border-t px-5 py-10 md:px-10 md:py-24 lg:py-32"
      style={{ backgroundColor: "#080808", borderColor: "#161616" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12">
          <span className="whitespace-nowrap font-mono text-xs tracking-[0.2em]" style={{ color: "#ecd012" }}>
            {t("SERVICIOS", "SERVICES")}
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
          {t("QUÉ PUEDO HACER POR TU MARCA", "WHAT I CAN DO FOR YOUR BRAND")}
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
                {s.text && (
                  <p
                    className="col-span-10 col-start-3 font-sans text-[16px] leading-[1.55] md:col-span-5 md:col-start-auto md:text-[15px] md:leading-relaxed"
                    style={{ color: "#8a8a8a" }}
                  >
                    {s.text}
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
            {t("Cuéntame tu presupuesto y te propongo algo a medida", "Tell me your budget and I will propose something tailored")}
            <span style={{ color: "#ecd012" }}>.</span>
          </p>

          <a
            href="#contacto"
            className="group mt-10 inline-flex items-center gap-4 border-t border-b py-6 font-sans text-lg font-medium tracking-[0.14em] transition-colors md:text-2xl"
            style={{ borderColor: "#2a2a2a", color: "#f5f5f5" }}
          >
            <span>{t("ESCRÍBEME", "WRITE TO ME")}</span>
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
