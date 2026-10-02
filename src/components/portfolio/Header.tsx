import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";

const nav = [
  { id: "portfolio", label: "PROYECTOS", description: "" },
  { id: "sobre-mi", label: "SOBRE MÍ", description: "Quién está detrás" },
  { id: "contacto", label: "CONTACTO", description: "Correo y WhatsApp" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("portfolio");
  const [overAbout, setOverAbout] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkOverlap = () => {
      const about = document.getElementById("sobre-mi");
      const header = document.querySelector("header");
      if (!about || !header) return;
      const section = about.getBoundingClientRect();
      const bar = header.getBoundingClientRect();
      setOverAbout(section.top < bar.bottom && section.bottom > bar.top);
    };
    checkOverlap();
    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap);
    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "faq" ? "contacto" : e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    [...nav.map((n) => n.id), "faq"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 12 : 22,
          paddingBottom: scrolled ? 12 : 22,
          backgroundColor: overAbout ? "var(--bg)" : scrolled ? "rgba(8,8,8,0.72)" : "rgba(8,8,8,0)",
          backdropFilter: overAbout ? "blur(0px)" : scrolled ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-0 z-50 px-5 md:px-10"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center">
            <Logo className="text-4xl md:text-5xl" />
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="group relative font-sans text-[13px] font-medium tracking-[0.14em] transition-colors"
                style={{ color: active === n.id ? "#ecd012" : "#f5f5f5" }}
                aria-label={n.description ? `${n.label} — ${n.description}` : n.label}
              >
                {n.label}
                {n.description && <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap bg-surface px-3 py-2 font-mono text-[10px] tracking-normal text-text opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden>
                  {n.description}
                </span>}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width: active === n.id ? "100%" : "0%",
                    backgroundColor: "#ecd012",
                  }}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="h-px w-6" style={{ backgroundColor: "#f5f5f5" }} />
            <span className="h-px w-6" style={{ backgroundColor: "#f5f5f5" }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col md:hidden"
            style={{ backgroundColor: "#080808" }}
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Logo className="text-4xl" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="font-mono text-xs tracking-[0.2em]"
                style={{ color: "#f5f5f5" }}
              >
                CERRAR
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-8 px-8">
              {nav.map((n, i) => (
                <motion.button
                  key={n.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  onClick={() => go(n.id)}
                  className="flex flex-col items-start gap-1 text-left font-sans text-4xl font-bold tracking-tight"
                  style={{ color: active === n.id ? "#ecd012" : "#f5f5f5" }}
                >
                  <span>{n.label}</span>
                  {n.description && <span className="font-mono text-xs font-normal tracking-normal text-mute">{n.description}</span>}
                </motion.button>
              ))}
            </nav>
            <div className="px-8 pb-10 font-mono text-[11px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              RAMÓN FERNÁNDEZ · 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
