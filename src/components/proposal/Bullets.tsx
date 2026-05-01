export function Bullets({
  items,
  accentColor = "var(--color-gold)",
  muted = false,
  compact = false,
}: {
  items: string[];
  accentColor?: string;
  muted?: boolean;
  compact?: boolean;
}) {
  const textColor = muted ? "text-[var(--color-ink-soft)]" : "text-[var(--color-ink)]";
  const spacing = compact ? "space-y-2.5" : "space-y-3";
  const gap = compact ? "gap-2.5" : "gap-3";
  const dot = compact
    ? "mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full"
    : "mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full";

  return (
    <ul className={spacing}>
      {items.map((it) => (
        <li key={it} className={`flex ${gap} text-sm leading-relaxed ${textColor}`}>
          <span className={dot} style={{ backgroundColor: accentColor }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
