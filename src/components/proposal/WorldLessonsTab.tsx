import { lessons, t } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";

export function WorldLessonsTab() {
  const { lang } = useLang();
  const forSaudiLabel = lang === "ar" ? "للمملكة" : "For Saudi Arabia";

  return (
    <div className="space-y-28">
      <section>
        <SectionHeading
          eyebrow={t("lessonsEyebrow", lang)}
          headline={t("lessonsHeadline", lang)}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons[lang].map((l, i) => (
            <article
              key={l.country}
              className="group relative flex flex-col overflow-hidden border border-[var(--color-border)] bg-white transition-all hover:-translate-y-1 hover:border-[var(--color-gold)] hover:shadow-lg"
            >
              {/* Top: lesson */}
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="eyebrow">{l.country}</span>
                  <span className="font-serif text-sm text-[var(--color-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-lg leading-snug text-[var(--color-navy)]">
                  {l.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {l.body}
                </p>
              </div>

              {/* Bottom: Saudi takeaway band */}
              <div className="relative bg-[var(--color-navy)] p-6 ps-7 text-white">
                <span
                  aria-hidden
                  className="absolute inset-y-0 start-0 w-1 bg-[var(--color-gold)]"
                />
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-4 bg-[var(--color-gold)]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    {forSaudiLabel}
                  </span>
                </div>
                <p className="font-serif text-base leading-snug text-white">
                  {l.saudiHeadline}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/75">
                  {l.saudiAction}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
