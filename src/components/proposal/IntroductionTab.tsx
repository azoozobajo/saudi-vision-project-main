import { mandateBlocks, t } from "@/content/proposal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "./LangContext";

export function IntroductionTab() {
  const { lang } = useLang();
  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-[30px] border border-[var(--color-gold)]/25 bg-[linear-gradient(135deg,rgba(3,42,24,.96),rgba(0,108,53,.92),rgba(55,19,59,.90))] p-7 text-white shadow-[0_24px_70px_rgba(3,42,24,.18)] sm:p-9">
        <div className="hero-pattern absolute inset-0 opacity-70" />
        <div className={`${lang === "ar" ? "border-r-4 pr-5" : "border-l-4 pl-5"} relative border-[var(--color-gold)]`}>
          <h2 className="max-w-4xl font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            “{t("introQuote", lang)}”
          </h2>
        </div>
      </div>

      <section className="gov-card p-6 sm:p-8 lg:p-9">
        <SectionHeading eyebrow={t("prefaceEyebrow", lang)} headline={t("prefaceHeadline", lang)} />
        <div className="mt-8 max-w-3xl">
          {t("prefaceBody", lang).split("\n\n").map((para, i) => (
            <p key={i} className="text-[15px] leading-8 text-[var(--color-ink-soft)] [&:not(:first-child)]:mt-4">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow={t("introEyebrow", lang)} headline={t("introHeadline", lang)} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {mandateBlocks[lang].map((b, index) => (
            <article key={b.title} className="gov-card group p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-gold),#8F6F2E)] font-serif text-sm font-bold text-white shadow-[0_14px_34px_rgba(197,163,88,.24)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="mb-2 block h-[3px] w-14 rounded-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-plum))]" />
                  <h3 className="font-serif text-xl font-bold text-[var(--color-navy-deep)]">{b.title}</h3>
                </div>
              </div>
              <p className="text-[15px] leading-8 text-[var(--color-ink-soft)]">{b.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
