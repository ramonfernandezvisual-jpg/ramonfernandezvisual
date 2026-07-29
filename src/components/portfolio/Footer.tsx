import { Logo } from "./Logo";

const socials = [
  {
    label: "INSTAGRAM — VISUAL / CREATIVO",
    handle: "@ramonfernandez.visual",
    href: "https://www.instagram.com/ramonfernandez.visual",
  },
  {
    label: "INSTAGRAM — ARQUITECTURA / INTERIORISMO",
    handle: "@ramonfernandez.archviz",
    href: "https://www.instagram.com/ramonfernandez.archviz",
  },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="px-5 pb-10 pt-20 md:px-10 md:pb-12 md:pt-28"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 border-t pt-12 md:pt-16" style={{ borderColor: "#161616" }}>
          {/* Marca */}
          <div className="col-span-12 md:col-span-4">
            <Logo className="text-5xl" />
            <p className="mt-4 font-sans text-lg font-semibold" style={{ color: "#f5f5f5" }}>
              Ramón Fernández
            </p>
            <p className="font-sans text-sm" style={{ color: "#ecd012" }}>
              Visual Designer | AI Video Creator | Art Direction
            </p>
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed" style={{ color: "#8a8a8a" }}>
              Disponible para colaboraciones y proyectos remotos.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-span-6 md:col-span-2">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              NAVEGACIÓN
            </p>
            <ul className="space-y-2">
              {[
                { id: "portfolio", label: "PORTFOLIO" },
                { id: "sobre-mi", label: "SOBRE MÍ" },
                { id: "contacto", label: "CONTACTO" },
              ].map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="group inline-flex items-center gap-2 font-sans text-sm font-medium tracking-[0.1em] transition-colors hover:text-[color:var(--brand)]"
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
          <div className="col-span-12 md:col-span-3">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              PERFILES
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <span className="block font-mono text-[10px] tracking-[0.18em]" style={{ color: "#8a8a8a" }}>
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
          <div className="col-span-12 md:col-span-3">
            <p className="mb-4 font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
              CONTACTO
            </p>
            <a
              href="mailto:ramonfernandezvisual@gmail.com"
              className="group inline-flex items-center gap-2 break-all font-sans text-sm font-medium transition-colors hover:text-[color:var(--brand)]"
              style={{ color: "#f5f5f5" }}
            >
              ramonfernandezvisual@gmail.com
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
          <span>PORTFOLIO · MMXXVI</span>
        </div>
      </div>
    </footer>
  );
}
