type Props = {
  eyebrow: string;
  headline: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, headline, align = "left" }: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="gold-rule-wide" />
        <span className="eyebrow rounded-full border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/10 px-4 py-2 text-[var(--color-plum)] shadow-[inset_0_1px_0_rgba(255,255,255,.8)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight text-[var(--color-navy-deep)] sm:text-4xl lg:text-[2.65rem]">
        {headline}
      </h2>
    </div>
  );
}
