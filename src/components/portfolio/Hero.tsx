import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MagneticField } from "./MagneticField";
import { haptic, useSound } from "@/lib/interaction";

const WORDS = ["IA", "NARRATIVA", "ESPACIO", "IMAGEN", "VÍDEO"];

export function Hero() {
  const [i, setI] = useState(0);
  const { enabled: soundOn, toggle: toggleSound, click } = useSound();

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const go = (id: string) => {
    haptic(8);
    click();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto flex min-h-[78vh] w-full max-w-[1440px] flex-col justify-between md:min-h-[76vh]">
        {/* Meta superior */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 flex items-center justify-between font-mono text-[11px] tracking-[0.22em]"
          style={{ color: "#8a8a8a" }}
        >
          <span style={{ color: "#ecd012" }}>PORTFOLIO VISUAL — 2026</span>
          <span>REMOTO</span>
        </motion.div>

        {/* Composición principal */}
        <div className="relative mt-16 grid grid-cols-12 items-center gap-8 md:mt-0">
          {/* Campo magnético */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.6 }}
            className="pointer-events-none absolute inset-y-[-20%] right-[-6%] hidden w-[52%] md:block"
            aria-hidden
          >
            <MagneticField />
          </motion.div>

          <div className="relative z-10 col-span-12 md:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-extrabold uppercase leading-[0.92] tracking-[-0.045em]"
              style={{ color: "#f5f5f5", fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Ramón
              <br />
              Fernández
            </motion.h1>

            {/* Tipografía cinética */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-6 flex items-baseline gap-3 overflow-hidden md:mt-8"
            >
              <span
                className="font-sans text-lg font-medium md:text-2xl"
                style={{ color: "#8a8a8a" }}
              >
                Dirección visual en
              </span>
              <span className="relative block h-[1.35em] overflow-hidden">
                <motion.span
                  key={WORDS[i]}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block font-sans text-lg font-bold uppercase tracking-[-0.01em] md:text-2xl"
                  style={{ color: "#ecd012" }}
                >
                  {WORDS[i]}
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="mt-6 font-sans text-sm font-medium tracking-[0.06em] md:text-[15px]"
              style={{ color: "#f5f5f5" }}
            >
              Visual Designer | AI Video Creator | Art Direction
            </motion.p>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="relative z-10 mt-16 flex items-end justify-between gap-6"
        >
          <button
            onClick={() => go("portfolio")}
            className="group flex items-center gap-3 font-sans text-[13px] font-medium tracking-[0.18em]"
            style={{ color: "#f5f5f5" }}
          >
            <span>EXPLORAR PORTFOLIO</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#ecd012" }}
            >
              ↓
            </motion.span>
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                haptic(6);
                toggleSound();
              }}
              aria-pressed={soundOn}
              className="font-mono text-[11px] tracking-[0.2em] transition-colors"
              style={{ color: soundOn ? "#ecd012" : "#8a8a8a" }}
            >
              SONIDO {soundOn ? "ON" : "OFF"}
            </button>
            <span
              className="hidden font-mono text-[11px] tracking-[0.2em] md:inline"
              style={{ color: "#8a8a8a" }}
            >
              14 PROYECTOS · 5 ÁREAS
            </span>
          </div>
        </motion.div>
      </div>

      {/* Transición suave hacia el Portfolio */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(180deg, rgba(8,8,8,0) 0%, #080808 100%)" }}
      />
    </section>
  );
}
