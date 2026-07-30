import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import cover10 from "@/assets/covers/p10.asset.json";
import cover06 from "@/assets/covers/p06.asset.json";
import cover08 from "@/assets/covers/p08.asset.json";

const WORDS = ["IMAGEN", "VÍDEO", "IA", "NARRATIVA", "ESPACIO"];

export function Hero() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  const l1x = useTransform(sx, (v) => v * -18);
  const l1y = useTransform(sy, (v) => v * -14);
  const l2x = useTransform(sx, (v) => v * 26);
  const l2y = useTransform(sy, (v) => v * 20);
  const l3x = useTransform(sx, (v) => v * -34);
  const l3y = useTransform(sy, (v) => v * 26);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto flex min-h-[88vh] w-full max-w-[1440px] flex-col justify-between md:min-h-[86vh]">
        {/* Meta superior */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em]"
          style={{ color: "#8a8a8a" }}
        >
          <span style={{ color: "#ecd012" }}>PORTFOLIO VISUAL — 2026</span>
          <span>REMOTO</span>
        </motion.div>

        {/* Composición principal */}
        <div className="relative mt-16 grid grid-cols-12 items-center gap-8 md:mt-0">
          {/* Capas de imagen (dirección de arte, no galería) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            <motion.div
              style={{ x: l1x, y: l1y }}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute right-[-4%] top-[2%] h-[54%] w-[34%] overflow-hidden rounded-[20px]"
            >
              <img src={cover10.url} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              style={{ x: l2x, y: l2y }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="absolute bottom-[-6%] right-[22%] h-[42%] w-[15%] overflow-hidden rounded-[20px]"
            >
              <img src={cover06.url} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div
              style={{ x: l3x, y: l3y }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute left-[46%] top-[-12%] h-[36%] w-[12%] overflow-hidden rounded-[20px]"
            >
              <img src={cover08.url} alt="" className="h-full w-full object-cover" />
            </motion.div>
          </div>

          <div className="relative z-10 col-span-12 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-mono text-[11px] tracking-[0.28em]"
              style={{ color: "#8a8a8a" }}
            >
              VISUAL UNIVERSE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 font-sans font-extrabold uppercase leading-[0.92] tracking-[-0.045em]"
              style={{ color: "#f5f5f5", fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Ramón
              <br />
              Fernández
            </motion.h1>

            {/* Tipografía cinética */}
            <div className="mt-6 flex items-baseline gap-3 overflow-hidden md:mt-8">
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
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 font-sans text-sm font-medium tracking-[0.06em] md:text-[15px]"
              style={{ color: "#f5f5f5" }}
            >
              Visual Designer | AI Video Creator | Art Direction
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="relative z-10 col-span-12 md:col-span-4 md:self-end md:text-right"
          >
            <p className="font-sans text-base font-medium leading-snug md:text-lg" style={{ color: "#f5f5f5" }}>
              Imagen. Vídeo. IA. Narrativa.
            </p>
            <p className="mt-1 font-sans text-sm md:text-base" style={{ color: "#8a8a8a" }}>
              Una misma dirección visual.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-end justify-between"
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
          <span
            className="hidden font-mono text-[11px] tracking-[0.2em] md:inline"
            style={{ color: "#8a8a8a" }}
          >
            14 PROYECTOS · 5 ÁREAS
          </span>
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
