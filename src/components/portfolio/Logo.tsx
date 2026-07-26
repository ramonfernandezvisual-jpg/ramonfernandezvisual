export function Logo({ className = "" }: { className?: string }) {
  // Placeholder para el logo oficial "rf.". Sustituye este SVG por el archivo
  // oficial cuando esté disponible. Manten las proporciones intactas.
  return (
    <span
      className={`inline-flex items-baseline font-sans font-extrabold tracking-tight ${className}`}
      style={{ color: "#ecd012", letterSpacing: "-0.04em" }}
      aria-label="Ramón Fernández"
    >
      <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>R</span>
      <span>f</span>
      <span style={{ color: "#ecd012" }}>.</span>
    </span>
  );
}
