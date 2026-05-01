import { useLang } from "./LangContext";
import { t } from "@/content/proposal";
import logo from "@/assets/logo.png";

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="px-3 pb-8 sm:px-5">
      <div className="gov-container relative overflow-hidden rounded-[34px] border border-[var(--color-gold)]/30 bg-[linear-gradient(135deg,#06140D,#006C35_58%,#37133B)] text-white shadow-[0_34px_90px_rgba(0,0,0,.22)]">
        <div className="hero-pattern absolute inset-0 opacity-65" />
        <div className="relative h-1 bg-[linear-gradient(90deg,var(--color-gold),#fff,var(--color-plum),var(--color-gold))]" />
        <div className="relative grid gap-8 px-6 py-10 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
          <div>
            <span className="mb-4 block h-[3px] w-16 rounded-full bg-[var(--color-gold)]" />
            <p className="text-sm leading-7 text-white/76">{t("footerTagline", lang)}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-[30px] border border-[var(--color-gold)]/35 bg-white p-4 shadow-[0_22px_58px_rgba(0,0,0,.22)] sm:h-32 sm:w-32">
              <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </div>
            <p className="max-w-sm text-lg font-bold text-white sm:text-xl">{t("proposalTitle", lang)}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-[var(--color-gold-soft)]/70">
              {lang === "ar" ? "مقترح وطني · مايو 2026" : "National Proposal · May 2026"}
            </p>
          </div>

          <div className="justify-self-end text-right text-xs text-white/55 md:pl-0">
            <p className="uppercase tracking-widest text-[var(--color-gold-soft)]/70">{lang === "ar" ? "مُقدَّم إلى" : "Submitted to"}</p>
            <p className="mt-2 text-sm text-white/82">{lang === "ar" ? "الاتحاد السعودي لكرة القدم" : "Saudi Arabian Football Federation"}</p>
            <p className="mt-4 text-[10px] uppercase tracking-widest opacity-65">{lang === "ar" ? "إصدار 1.0 · 2026" : "v1.0 · 2026"}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
