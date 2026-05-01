import { kpiGroups, te } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";
import { PILLAR_COLORS } from "@/lib/constants";

export function Measurement() {
  const { lang } = useLang();
  const groups = kpiGroups[lang];

  return (
    <section>
      <SectionHeading
        eyebrow={te("measurementEyebrow", lang)}
        headline={te("measurementHeadline", lang)}
      />
      <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
        {te("measurementIntro", lang)}
      </p>
      <p className="mt-3 max-w-3xl text-[12px] italic leading-relaxed text-[var(--color-ink-soft)]/70">
        {lang === "ar"
          ? "تنويه: هذه المعلومات تقريبية لغرض التوضيح."
          : "Note: these figures are approximate, for illustration purposes only."}
      </p>

      <div className="mt-12 space-y-14">
        {groups.map((g, gi) => {
          const accentColor = PILLAR_COLORS[gi % PILLAR_COLORS.length];
          return (
            <div key={g.pillar}>
              <div className="mb-5 flex items-center gap-4">
                <span
                  className="block h-8 w-1 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="font-serif text-2xl text-[var(--color-gold)]">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-[var(--color-navy)]">{g.pillar}</h3>
                <span className="ml-auto text-[11px] uppercase tracking-widest text-[var(--color-ink-soft)]">
                  {g.items.length} {lang === "ar" ? "مؤشرات" : "KPI"}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((kpi) => (
                  <div
                    key={kpi.metric}
                    className="group flex flex-col gap-5 rounded-sm border border-[var(--color-border)] bg-white p-5 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderTopColor: accentColor, borderTopWidth: "3px" }}
                  >
                    <div>
                      <p className="font-serif text-sm leading-snug text-[var(--color-navy)]">
                        {kpi.metric}
                      </p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--color-ink-soft)]">
                        <span className="font-semibold">{te("methodLabel", lang)}: </span>
                        {kpi.method}
                      </p>
                    </div>

                    <div className="flex items-end gap-0">
                      <Milestone
                        label={te("shortHeader", lang)}
                        value={kpi.short}
                        accentColor={accentColor}
                        position="first"
                      />
                      <div className="mb-3.5 h-px flex-1 bg-[var(--color-border)]" />
                      <Milestone
                        label={te("midHeader", lang)}
                        value={kpi.mid}
                        accentColor={accentColor}
                        position="middle"
                      />
                      <div className="mb-3.5 h-px flex-1 bg-[var(--color-border)]" />
                      <Milestone
                        label={te("longHeader", lang)}
                        value={kpi.long}
                        accentColor={accentColor}
                        position="last"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Milestone({
  label,
  value,
  accentColor,
  position,
}: {
  label: string;
  value: string;
  accentColor: string;
  position: "first" | "middle" | "last";
}) {
  const align =
    position === "first" ? "items-start" : position === "last" ? "items-end" : "items-center";
  const isLongText = value.length > 4;
  const textAlign =
    position === "first" ? "text-start" : position === "last" ? "text-end" : "text-center";
  return (
    <div className={`flex min-w-0 flex-1 flex-col ${align} gap-1.5`}>
      <span
        className={`font-serif font-semibold ${isLongText ? "text-[11px] leading-tight" : "text-base"} ${textAlign} break-words`}
        style={{ color: accentColor }}
      >
        {value}
      </span>
      <div
        className="h-1.5 w-1.5 rounded-full border-2"
        style={{ borderColor: accentColor, backgroundColor: "white" }}
      />
      <span className="text-[9px] uppercase tracking-wider text-[var(--color-ink-soft)]">
        {label}
      </span>
    </div>
  );
}
