import { motion } from "motion/react";
import { useT } from "@/lib/i18n";

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
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-8 max-w-3xl md:mb-14"
    >
      <div className="flex items-baseline gap-4 whitespace-nowrap">
        <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#ecd012" }}>
          {number}
        </span>
        {typeof count === "number" && (
          <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "#8a8a8a" }}>
            {String(count).padStart(2, "0")} {count === 1 ? t("PROYECTO", "PROJECT") : t("PROYECTOS", "PROJECTS")}
          </span>
        )}
      </div>
      <h2
        className="mt-3 font-sans text-[24px] font-semibold uppercase leading-[1.08] tracking-[-0.02em] [overflow-wrap:normal] md:mt-4 md:text-[clamp(1.375rem,3vw,2.5rem)]"
        style={{ color: "#f5f5f5" }}
      >
        {title}
      </h2>
      <p
        className="mt-3 max-w-xl font-sans text-[16px] leading-[1.55] md:mt-4 md:text-[15px] md:leading-relaxed"
        style={{ color: "#8a8a8a" }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
