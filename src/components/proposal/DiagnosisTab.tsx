import { diagnosisCards, t } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";
import { FileText } from "lucide-react";

const STRATEGY_PHRASE = "«تكتيكاتنا للغد»";

function renderBody(body: string) {
  if (!body.includes(STRATEGY_PHRASE)) return body;
  const [before, after] = body.split(STRATEGY_PHRASE);
  return (
    <>
      {before}
      <a href="/saff-strategy.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:text-[var(--color-plum)]">
        <FileText className="mx-1 inline-block h-4 w-4 align-text-bottom text-[var(--color-gold)]" aria-hidden="true" />
        {STRATEGY_PHRASE}
      </a>
      {after}
    </>
  );
}

export function DiagnosisTab() {
  const { lang } = useLang();
  return (
    <div>
      <SectionHeading eyebrow={t("diagEyebrow", lang)} headline={t("diagHeadline", lang)} />

      <div className={`mt-10 overflow-hidden rounded-[28px] border border-[var(--color-gold)]/30 bg-[linear-gradient(135deg,rgba(197,163,88,.16),rgba(255,255,255,.92),rgba(145,49,145,.08))] p-7 shadow-[0_18px_50px_rgba(6,30,16,.08)] sm:p-8 ${lang === "ar" ? "border-r-4" : "border-l-4"} border-[var(--color-gold)]`}>
        <p className="max-w-4xl font-serif text-lg font-bold leading-relaxed text-[var(--color-navy-deep)] sm:text-xl">
          {t("diagOpening", lang)}
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {diagnosisCards[lang].map((c, i) => (
          <article key={c.title} className="gov-card p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
            <div className="flex items-start gap-5">
              <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[var(--color-navy-deep)] font-serif text-base font-bold text-[var(--color-gold)] ring-1 ring-[var(--color-gold)]/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold leading-snug text-[var(--color-navy-deep)]">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-[var(--color-ink-soft)]">{renderBody(c.body)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
