import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { t } from "@/content/proposal";
import logo from "@/assets/logo.png";

export function TopNav() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--color-cream)]/96 px-3 pt-0.5 pb-1 backdrop-blur-md sm:px-5">
      <div
        className={`royal-surface mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] transition-all duration-300 ${
          scrolled ? "px-4 py-3" : "px-5 py-4"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span
            className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.16)] ring-1 ring-[var(--color-gold)]/35 transition-all duration-300 ${
              scrolled ? "h-11 w-11" : "h-14 w-14"
            }`}
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,163,88,.22),transparent_55%)]" />
            <img src={logo} alt="Logo" className="relative h-full w-full object-contain" />
          </span>

          <span className="hidden h-10 w-px bg-[linear-gradient(180deg,transparent,var(--color-gold),transparent)] sm:block" />

          <span className="min-w-0">
            <span className={`block truncate font-bold leading-tight text-[var(--color-navy-deep)] ${scrolled ? "text-sm" : "text-base sm:text-lg"}`}>
              {t("proposalTitle", lang)}
            </span>
            <span className="mt-1 hidden h-[3px] w-20 rounded-full bg-[linear-gradient(90deg,var(--color-gold),var(--color-plum),var(--color-navy))] sm:block" />
          </span>
        </a>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-navy-deep)]/90 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]">
            {(["en", "ar"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/70 ${
                  lang === l
                    ? "bg-[var(--color-gold)] text-[var(--color-navy-deep)] shadow-[0_10px_24px_rgba(197,163,88,.22)]"
                    : "text-white/72 hover:bg-white/10 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
