import { motion } from "motion/react";

export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-3xl md:mb-14"
    >
      <span className="font-mono text-[11px] tracking-[0.22em]" style={{ color: "#ecd012" }}>
        {number}
      </span>
      <h3
        className="mt-4 font-sans font-semibold uppercase leading-[1.08] tracking-[-0.02em]"
        style={{ color: "#f5f5f5", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        {title}
      </h3>
      <p
        className="mt-4 max-w-xl font-sans text-sm leading-relaxed md:text-[15px]"
        style={{ color: "#8a8a8a" }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
