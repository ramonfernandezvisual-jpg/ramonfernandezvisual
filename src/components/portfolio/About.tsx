import { motion } from "motion/react";
import { useT } from "@/lib/i18n";
const ramon = "/ramon.jpg";


export function About() {
  const t = useT();
  return (
    <section
      id="sobre-mi"
      className="px-5 py-10 md:px-10 md:py-24 lg:py-32"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-2">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="whitespace-nowrap font-mono text-xs tracking-[0.2em]"
            style={{ color: "#f5f5f5" }}
          >
            {t("07 — SOBRE MÍ", "07 — ABOUT ME")}
          </motion.span>
        </div>

        {/* Fotografía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:max-w-md lg:col-span-4 lg:max-w-none"
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
          className="col-span-12 lg:col-span-6"
        >
          <p
             className="font-sans text-[16px] leading-[1.55] md:text-xl md:leading-relaxed lg:text-2xl lg:leading-snug"
            style={{ color: "#f5f5f5" }}
          >
            {t(
              "Soy Ramón Fernández. Creo cortometrajes, campañas y personajes para agencias, productoras y marcas, y cuido cada pieza desde la primera idea hasta el último detalle del montaje.",
              "I am Ramón Fernández. I create short films, campaigns and characters for agencies, production companies and brands, and I take care of every piece from the first idea to the last detail of the edit.",
            )}
            <br /><br />
            {t(
              "Aprendí a construir imágenes mucho antes de que existiera la IA. Durante más de quince años levanté espacios y atmósferas desde cero, y desde 2019 trabajo por mi cuenta para empresas y profesionales. Esa experiencia es la que hoy me guía en cada plano, porque sé cómo se comporta la luz, cómo se compone un encuadre y qué hace creíble una escena.",
              "I learned to build images long before AI existed. For more than fifteen years I built spaces and atmospheres from scratch, and since 2019 I have worked on my own for companies and professionals. That experience is what guides me in every shot today, because I know how light behaves, how a frame is composed and what makes a scene believable.",
            )}
            <br /><br />
            {t(
              "Para mí la tecnología nunca es un atajo, sino una herramienta al servicio de la dirección visual. Lo que de verdad importa es que la historia llegue.",
              "For me, technology is never a shortcut, but a tool in the service of visual direction. What really matters is that the story gets across.",
            )}
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
              {t("DISPONIBLE PARA COLABORACIONES Y PROYECTOS REMOTOS", "AVAILABLE FOR COLLABORATIONS AND REMOTE PROJECTS")}
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
           className="col-span-12 mt-12 w-full font-sans text-[21px] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[clamp(1.2rem,2.8vw,2.4rem)] md:leading-[1.15] lg:col-span-10 lg:col-start-3 lg:mt-20"
          style={{
            color: "#f5f5f5",
             textWrap: "balance",
          }}
        >
          {t("Diferentes disciplinas.", "Different disciplines.")}<br />
          {t("Una misma mirada visual", "The same visual outlook")}
          <span style={{ color: "#ecd012" }}>.</span>

        </motion.h2>
      </div>
    </section>
  );
}
