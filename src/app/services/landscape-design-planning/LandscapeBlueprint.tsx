type Variant = "light" | "dark";

export function LandscapeBlueprint({ variant = "light" }: { variant?: Variant }) {
  const isDark = variant === "dark";
  const stroke = isDark ? "#e7e5e4" : "#1c1917";
  const textFill = isDark ? "#faf9f6" : "#1c1917";
  const mutedFill = isDark ? "#a8a29e" : "#78716c";
  const gridStroke = isDark ? "#3f3f46" : "#e5e2dc";
  const bg = isDark ? "#18181b" : "#f8f7f5";
  const boxFill = isDark ? "#27272a" : "white";

  return (
    <div
      className="rounded-lg border-2 p-4 shadow-sm md:p-6"
      style={{
        backgroundColor: bg,
        borderColor: isDark ? "#3f3f46" : "var(--color-border)",
      }}
    >
      <svg
        viewBox="0 0 400 320"
        className="w-full max-w-full"
        aria-hidden
      >
        <defs>
          <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={gridStroke} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="320" fill={`url(#grid-${variant})`} />
        <rect x="24" y="24" width="352" height="272" fill="none" stroke={stroke} strokeWidth="1.5" />
        <rect x="140" y="40" width="120" height="52" fill="none" stroke={stroke} strokeWidth="1.2" strokeDasharray="4 2" />
        <text x="200" y="68" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="500">Concrete Patio</text>
        <path d="M 200 92 L 200 120 L 120 120" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" />
        <text x="158" y="112" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="9">Walkway</text>
        <circle cx="80" cy="180" r="28" fill="none" stroke={stroke} strokeWidth="1" />
        <text x="80" y="178" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600">A x.5</text>
        <circle cx="200" cy="200" r="22" fill="none" stroke={stroke} strokeWidth="1" />
        <text x="200" y="198" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600">B x.3</text>
        <circle cx="320" cy="170" r="26" fill="none" stroke={stroke} strokeWidth="1" />
        <text x="320" y="168" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600">C x.4</text>
        <line x1="260" y1="120" x2="320" y2="120" stroke={mutedFill} strokeWidth="0.8" strokeDasharray="2 2" />
        <text x="290" y="115" textAnchor="middle" fill={mutedFill} fontFamily="system-ui,sans-serif" fontSize="8">Drain</text>
        <rect x="100" y="230" width="200" height="58" fill={boxFill} stroke={stroke} strokeWidth="1.2" />
        <text x="200" y="245" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700">PLANT LIST</text>
        <text x="200" y="258" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="8">(A) Juniper  (B) Arborvitae  (C) Loropetalum</text>
        <text x="200" y="270" textAnchor="middle" fill={textFill} fontFamily="system-ui,sans-serif" fontSize="8">Hydrangea · Azalea · Ornamental grass</text>
      </svg>
    </div>
  );
}
