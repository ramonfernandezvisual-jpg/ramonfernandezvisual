import { Logo } from "./Logo";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const socials = [
    {
      label: t("INSTAGRAM — VISUAL / CREATIVO", "INSTAGRAM — VISUAL / CREATIVE"),
      handle: "@ramonfernandez.visual",
      href: "https://www.instagram.com/ramonfernandez.visual",
      icon: false,
    },
    {
      label: t("LINKEDIN — PROFESIONAL", "LINKEDIN — PROFESSIONAL"),
      handle: "ramon-fdez",
      href: "https://www.linkedin.com/in/ramon-fdez/",
      icon: true,
    },
  ];
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
       className="px-5 pb-10 pt-10 md:px-10 md:pb-12 md:pt-20 lg:pt-28"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-12 gap-x-2 gap-y-8 border-t md:gap-8 pt-12 md:pt-16" style={{ borderColor: "#161616" }}>
          {/* Marca */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Logo className="text-5xl" />
            <p className="mt-4 font-sans text-lg font-semibold" style={{ color: "#f5f5f5" }}>
              Ramón Fernández
            </p>
             <p className="mt-6 max-w-xs font-sans text-[16px] leading-[1.55] md:text-sm md:leading-relaxed" style={{ color: "#8a8a8a" }}>
              {t(
                "Cortometrajes, campañas y personajes para agencias, productoras y marcas. Disponible en remoto.",
                "Short films, campaigns and characters for agencies, production companies and brands. Available remotely.",
              )}
            </p>
          </div>

          {/* Navegación */}
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              {t("NAVEGACIÓN", "NAVIGATION")}
            </p>
            <ul className="space-y-2">
              {[
                { id: "portfolio", label: t("PROYECTOS", "PROJECTS") },
                { id: "sobre-mi", label: t("SOBRE MÍ", "ABOUT") },
                { id: "contacto", label: t("CONTACTO", "CONTACT") },
              ].map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                     className="group inline-flex min-h-11 items-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-[0.1em] transition-colors hover:text-[color:var(--brand)] md:min-h-0"
                    style={{ color: "#f5f5f5" }}
                  >
                    {n.label}
                    <span className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" style={{ color: "#ecd012" }}>
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              {t("PERFILES", "PROFILES")}
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                     className="group flex min-h-11 flex-col justify-center md:block md:min-h-0"
                  >
                    <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em]" style={{ color: "#8a8a8a" }}>
                      {s.icon && (
                        <svg aria-hidden viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                        </svg>
                      )}
                      {s.label}
                    </span>
                    <span
                      className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors group-hover:text-[color:var(--brand)]"
                      style={{ color: "#f5f5f5" }}
                    >
                      {s.handle}
                      <span
                        className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        style={{ color: "#ecd012" }}
                      >
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              {t("CONTACTO", "CONTACT")}
            </p>
            <a
              href="mailto:ramonfernandezvisual@gmail.com"
               className="group inline-flex min-h-11 items-center gap-2 font-sans text-[clamp(0.8rem,3.8vw,0.875rem)] font-medium transition-colors hover:text-[color:var(--brand)] md:min-h-0 lg:text-sm"
              style={{ color: "#f5f5f5" }}
            >
              <span>ramonfernandezvisual<wbr />@gmail.com</span>
              <span
                className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                style={{ color: "#ecd012" }}
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-6 font-mono text-[10px] tracking-[0.2em] md:flex-row md:items-center"
          style={{ borderColor: "#161616", color: "#8a8a8a" }}
        >
          <span>© 2026 RAMÓN FERNÁNDEZ</span>
          <span>{t("PROYECTOS · MMXXVI", "PROJECTS · MMXXVI")}</span>
        </div>
      </div>
    </footer>
  );
}
