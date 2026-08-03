import { motion } from "motion/react";

export function SectionHeader({
  number,
  title,
  subtitle,
  count,
}: {
  number: string;
  title: string;
  subtitle: string;
  count?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-8 max-w-3xl md:mb-14"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#ecd012" }}>
          {number}
        </span>
        {typeof count === "number" && (
          <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
            {String(count).padStart(2, "0")} {count === 1 ? "PROYECTO" : "PROYECTOS"}
          </span>
        )}
      </div>
      <h3
        className="mt-3 font-sans font-semibold uppercase leading-[1.08] tracking-[-0.02em] md:mt-4"
        style={{ color: "#f5f5f5", fontSize: "clamp(1.375rem, 3vw, 2.5rem)" }}
      >
        {title}
      </h3>
      <p
        className="mt-3 max-w-xl font-sans text-sm leading-relaxed md:mt-4 md:text-[15px]"
        style={{ color: "#8a8a8a" }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
