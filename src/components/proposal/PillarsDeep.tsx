import { useState } from "react";
import { pillarsDetailed, kpiGroups, te } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";
import { Bullets } from "./Bullets";
import { Milestone } from "./Measurement";
import { PILLAR_COLORS } from "@/lib/constants";

export function PillarsDeep() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const items = pillarsDetailed[lang];
  const kpis = kpiGroups[lang];

  return (
    <section>
      <SectionHeading eyebrow={te("pillarsDeepEyebrow", lang)} headline={te("pillarsDeepHeadline", lang)} />
      <p className="mt-8 max-w-3xl text-[15px] leading-8 text-[var(--color-ink-soft)]">
        {te("pillarsDeepIntro", lang)}
      </p>

      <div className="mt-10 divide-y divide-[var(--color-gold)]/20 overflow-hidden rounded-[30px] border border-[var(--color-gold)]/28 bg-[rgba(255,255,255,.78)] shadow-[0_24px_70px_rgba(6,30,16,.10)] backdrop-blur">
        {items.map((p, i) => {
          const isOpen = open === i;
          const color = PILLAR_COLORS[i % PILLAR_COLORS.length];
          return (
            <article key={p.name}>
              <button onClick={() => setOpen(isOpen ? null : i)} className="group flex w-full items-start gap-5 px-5 py-6 text-start transition-all duration-300 hover:bg-[var(--color-gold)]/8 sm:px-7" aria-expanded={isOpen}>
                <span className="mt-1 block h-14 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: color, opacity: isOpen ? 1 : 0.55 }} />
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[var(--color-gold)]/28 bg-white/86 font-serif text-base font-bold shadow-[0_10px_26px_rgba(6,30,16,.06)]" style={{ color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-bold leading-snug text-[var(--color-navy-deep)] sm:text-2xl">{p.name}</h3>
                  <p className="mt-2 max-w-3xl text-sm italic leading-7 text-[var(--color-ink-soft)]">{p.tagline}</p>
                </div>
                <span className={`mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl border border-[var(--color-gold)]/25 bg-white/86 text-xl shadow-[0_10px_24px_rgba(6,30,16,.06)] transition-transform ${isOpen ? "rotate-45" : ""}`} style={{ color }} aria-hidden>
                  +
                </span>
              </button>

              {isOpen && (
                <div className="fade-up border-t border-[var(--color-gold)]/20 bg-[linear-gradient(180deg,rgba(248,240,218,.54),rgba(255,255,255,.75))] px-5 py-8 sm:px-8">
                  <div>
                    <p className="eyebrow mb-3">{te("introduction", lang)}</p>
                    <p className="max-w-3xl text-[15px] leading-8 text-[var(--color-ink)]">{p.intro}</p>
                  </div>

                  <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    <div className="gov-card p-5">
                      <p className="eyebrow mb-4 !text-[var(--color-navy-deep)]">{te("causesLabel", lang)}</p>
                      <Bullets items={p.causes} accentColor="var(--color-gold)" />
                    </div>
                    <div className="gov-card p-5">
                      <p className="eyebrow mb-4 !text-[var(--color-navy-deep)]">{te("impactLabel", lang)}</p>
                      <Bullets items={p.impact} accentColor="var(--color-plum)" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="eyebrow mb-4 !text-[var(--color-navy-deep)]">{te("solutionsHeader", lang)}</p>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="gov-card p-6" style={{ borderTop: `4px solid ${color}` }}>
                        <p className="eyebrow mb-4">{te("shortTermLabel", lang)}</p>
                        <Bullets items={p.shortTerm} accentColor={color} />
                      </div>
                      <div className="gov-card p-6" style={{ borderTop: "4px solid var(--color-navy)" }}>
                        <p className="eyebrow mb-4 !text-[var(--color-navy-deep)]">{te("longTermLabel", lang)}</p>
                        <Bullets items={p.longTerm} accentColor="var(--color-navy)" />
                      </div>
                    </div>
                  </div>

                  {kpis[i] && (
                    <div className="mt-8">
                      <p className="eyebrow mb-4 !text-[var(--color-navy-deep)]">{te("pillarKpisLabel", lang)}</p>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {kpis[i].items.map((kpi) => (
                          <div key={kpi.metric} className="gov-card flex flex-col gap-5 p-5" style={{ borderTopColor: color, borderTopWidth: "4px" }}>
                            <div>
                              <p className="font-serif text-sm font-bold leading-snug text-[var(--color-navy-deep)]">{kpi.metric}</p>
                              <p className="mt-1.5 text-[11px] leading-relaxed text-[var(--color-ink-soft)]">
                                <span className="font-semibold">{te("methodLabel", lang)}: </span>{kpi.method}
                              </p>
                            </div>
                            <div className="flex items-end gap-0">
                              <Milestone label={te("shortHeader", lang)} value={kpi.short} accentColor={color} position="first" />
                              <div className="mb-3.5 h-px flex-1 bg-[var(--color-border)]" />
                              <Milestone label={te("midHeader", lang)} value={kpi.mid} accentColor={color} position="middle" />
                              <div className="mb-3.5 h-px flex-1 bg-[var(--color-border)]" />
                              <Milestone label={te("longHeader", lang)} value={kpi.long} accentColor={color} position="last" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-[12px] italic leading-relaxed text-[var(--color-ink-soft)]/80">{te("kpiHorizonNote", lang)}</p>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
