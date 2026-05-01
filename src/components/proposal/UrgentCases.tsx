import { urgentCases, te } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";
import { Bullets } from "./Bullets";
import ohodLogo from "@/assets/ohod-logo.jpeg";

const LOGOS: Record<string, string> = { ohod: ohodLogo };

export function UrgentCases() {
  const { lang } = useLang();
  const cases = urgentCases[lang];

  return (
    <section>
      <SectionHeading eyebrow={te("urgentEyebrow", lang)} headline={te("urgentHeadline", lang)} />
      <p className="mt-8 max-w-3xl text-[15px] leading-8 text-[var(--color-ink-soft)]">{te("urgentIntro", lang)}</p>

      <div className="mt-10 space-y-6">
        {cases.map((c, index) => (
          <article key={c.title} className="gov-card-strong overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="border-b border-[var(--color-gold)]/22 bg-[linear-gradient(135deg,rgba(3,42,24,.95),rgba(0,108,53,.88),rgba(55,19,59,.82))] px-6 py-5 text-white sm:px-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)] text-[var(--color-navy-deep)] ring-1 ring-white/20">⚠</span>
                  <div>
                    <span className="eyebrow !text-[var(--color-gold-soft)]">{te("urgentTag", lang)}</span>
                    <p className="mt-1 text-xs font-bold text-white/65">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                </div>
                {c.logoKey && LOGOS[c.logoKey] && <img src={LOGOS[c.logoKey]} alt={c.logoAlt || ""} className="h-16 w-16 shrink-0 rounded-2xl bg-white object-contain p-2 ring-1 ring-[var(--color-gold)]/30 sm:h-20 sm:w-20" />}
              </div>
              <h3 className="mt-5 max-w-4xl font-serif text-2xl font-bold leading-snug text-white sm:text-3xl">{c.title}</h3>
            </div>

            <div className="p-6 sm:p-8">
              <div className={`rounded-2xl border border-[var(--color-gold)]/24 bg-white/90 p-5 ${lang === "ar" ? "border-r-4" : "border-l-4"} border-[var(--color-gold)]`}>
                <p className="eyebrow mb-2 !text-[var(--color-navy)]">{te("whatLabel", lang)}</p>
                <p className="max-w-3xl whitespace-pre-line text-[15px] leading-8 text-[var(--color-ink)]">{c.what}</p>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="gov-card p-5">
                  <p className="eyebrow mb-3 !text-[var(--color-navy)]">{te("causesLabel", lang)}</p>
                  <Bullets items={c.causes} muted compact />
                </div>
                <div className="gov-card p-5">
                  <p className="eyebrow mb-3 !text-[var(--color-navy)]">{te("impactLabel", lang)}</p>
                  <Bullets items={c.impact} muted compact accentColor="var(--color-plum)" />
                </div>
                <div className="gov-card p-5" style={{ borderTop: "4px solid var(--color-gold)" }}>
                  <p className="eyebrow mb-3 !text-[var(--color-navy)]">{te("solutionsLabel", lang)}</p>
                  <Bullets items={c.solutions} compact />
                </div>
              </div>

              {c.recommendation && (
                <div className={`mt-6 rounded-lg border border-[var(--color-plum)]/20 bg-[var(--color-plum-soft)]/70 p-5 ${lang === "ar" ? "border-r-4" : "border-l-4"} border-[var(--color-plum)]`}>
                  <p className="eyebrow mb-3 !text-[var(--color-navy)]">{te("recommendationLabel", lang)}</p>
                  <p className="max-w-3xl whitespace-pre-line text-[15px] leading-8 text-[var(--color-ink)]">{c.recommendation}</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
