import { useEffect, useRef, useState, type ReactNode } from "react";
import { IntroductionTab } from "./IntroductionTab";
import { DiagnosisTab } from "./DiagnosisTab";
import { FrameworkTab } from "./FrameworkTab";
import { UrgentTab } from "./UrgentTab";
import { TeamTab } from "./TeamTab";
import { useLang } from "./LangContext";
import { t } from "@/content/proposal";

const TAB_IDS = ["introduction", "diagnosis", "framework", "urgent", "team"] as const;
type TabId = (typeof TAB_IDS)[number];

const TAB_LABEL_KEYS: Record<TabId, "tabIntroduction" | "tabDiagnosis" | "tabFramework" | "tabUrgent" | "tabTeam"> = {
  introduction: "tabIntroduction",
  diagnosis: "tabDiagnosis",
  framework: "tabFramework",
  urgent: "tabUrgent",
  team: "tabTeam",
};

const PANEL_ID = "proposal-tab-panel";

export function Tabs({ initial = "introduction" as TabId }: { initial?: TabId }) {
  const [active, setActive] = useState<TabId>(initial);
  const { lang } = useLang();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);
  const isRTL = lang === "ar";

  function updateScrollState() {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = Math.abs(el.scrollLeft);
    setCanScrollStart(left > 2 && max > 2);
    setCanScrollEnd(left < max - 2 && max > 2);
  }

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [lang]);

  useEffect(() => {
    const btn = tabRefs.current[active];
    if (btn) btn.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active, lang]);

  function switchTab(id: TabId) {
    setActive(id);
    const btn = tabRefs.current[id];
    if (btn) btn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    const tabsEl = document.getElementById("tabs");
    if (tabsEl) {
      const offset = tabsEl.getBoundingClientRect().top + window.scrollY - 120;
      if (window.scrollY > offset + 10) window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }

  const content: Record<TabId, ReactNode> = {
    introduction: <IntroductionTab />,
    diagnosis: <DiagnosisTab />,
    framework: <FrameworkTab />,
    urgent: <UrgentTab />,
    team: <TeamTab />,
  };

  return (
    <div id="tabs" className="snap-section relative px-3 pb-16 pt-2 sm:px-5 sm:pb-20">
      <div className="sticky top-[76px] z-40 mx-auto max-w-7xl">
        <div className="royal-surface overflow-hidden rounded-xl">
          <div className="relative px-1.5 py-1">
            <div
              ref={scrollerRef}
              role="tablist"
              aria-label={isRTL ? "أقسام المقترح" : "Proposal sections"}
              className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {TAB_IDS.map((id, i) => (
                <button
                  key={id}
                  id={`tab-${id}`}
                  ref={(el) => {
                    tabRefs.current[id] = el;
                  }}
                  role="tab"
                  aria-selected={active === id}
                  aria-controls={PANEL_ID}
                  onClick={() => switchTab(id)}
                  className={`relative flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/70 sm:px-3.5 sm:py-2 sm:text-xs ${
                    active === id
                      ? "border-[var(--color-gold)]/50 bg-[var(--color-navy-deep)] text-white shadow-[0_10px_24px_rgba(3,42,24,.16)]"
                      : "border-transparent bg-white/62 text-[var(--color-ink-soft)] hover:border-[var(--color-gold)]/25 hover:text-[var(--color-navy-deep)]"
                  }`}
                >
                  <span className={`inline-flex h-4.5 w-4.5 items-center justify-center rounded-full text-[9px] font-bold sm:h-5 sm:w-5 sm:text-[10px] ${active === id ? "bg-[var(--color-gold)] text-[var(--color-navy-deep)]" : "bg-[var(--color-gold)]/14 text-[var(--color-gold)]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t(TAB_LABEL_KEYS[id], lang)}</span>
                  {active === id && <span className="absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[var(--color-plum)]" />}
                </button>
              ))}
            </div>
            <div className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#fffaf0] to-transparent transition-opacity ${canScrollStart ? "opacity-100" : "opacity-0"}`} />
            <div className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#fffaf0] to-transparent transition-opacity ${canScrollEnd ? "opacity-100" : "opacity-0"}`} />
          </div>
        </div>
      </div>

      <div className="gov-container mt-8">
        <div id={PANEL_ID} role="tabpanel" aria-labelledby={`tab-${active}`} key={`${active}-${lang}`} className="gov-panel fade-up px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {content[active]}
        </div>
      </div>
    </div>
  );
}
