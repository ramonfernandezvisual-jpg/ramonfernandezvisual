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
    <div className="mb-10 grid grid-cols-12 gap-6 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="col-span-12 flex items-center gap-4 md:col-span-2"
      >
        <span
          className="font-mono text-xs tracking-[0.2em]"
          style={{ color: "#ecd012" }}
        >
          {number}
        </span>
        <span className="h-px flex-1 md:hidden" style={{ backgroundColor: "#222" }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="col-span-12 md:col-span-7"
      >
        <h3
          className="font-sans font-bold leading-[1.02] tracking-[-0.02em]"
          style={{
            color: "#f5f5f5",
            fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)",
          }}
        >
          {title}
        </h3>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="col-span-12 mt-2 font-sans text-sm leading-relaxed md:col-span-3 md:mt-4 md:text-base"
        style={{ color: "#8a8a8a" }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
