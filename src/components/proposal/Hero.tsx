import { useRef, useState, type CSSProperties, type MouseEvent, type TouchEvent } from "react";
import { useLang } from "./LangContext";
import { t } from "@/content/proposal";

function scrollToTabs() {
  const el = document.getElementById("tabs");
  if (!el) return;
  const header = document.querySelector("header");
  const headerOffset = header ? Math.ceil(header.getBoundingClientRect().bottom + 12) : 112;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Hero() {
  const { lang } = useLang();
  const heroRef = useRef<HTMLElement | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lockRef = useRef(false);
  const [mouse, setMouse] = useState({ x: 70, y: 30 });

  function moveToContent() {
    if (lockRef.current) return;
    lockRef.current = true;
    scrollToTabs();
    window.setTimeout(() => {
      lockRef.current = false;
    }, 950);
  }

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: Math.round(((event.clientX - rect.left) / rect.width) * 100),
      y: Math.round(((event.clientY - rect.top) / rect.height) * 100),
    });
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStartY.current === null) return;
    const endY = event.changedTouches[0]?.clientY ?? touchStartY.current;
    const swipeUp = touchStartY.current - endY > 42;
    touchStartY.current = null;
    if (swipeUp && window.scrollY < 80) moveToContent();
  }

  const heroStyle = {
    "--mouse-x": `${mouse.x}%`,
    "--mouse-y": `${mouse.y}%`,
  } as CSSProperties;

  return (
    <section
      ref={heroRef}
      id="top"
      className="hero-entry snap-section relative px-3 pb-2 pt-1 sm:px-5 sm:pb-3"
      onMouseMove={handleMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={heroStyle}
    >
      <div className="gov-container">
        <div className="hero-stage relative flex h-[calc(100svh-6.75rem)] min-h-[30rem] overflow-hidden rounded-[36px] border border-[var(--color-gold)]/34 text-white shadow-[0_44px_120px_rgba(0,0,0,.38)]">
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-32 mix-blend-luminosity saturate-90"
            src="/hero-background.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(4,17,10,.84),rgba(0,108,53,.66)_46%,rgba(53,16,53,.70)),radial-gradient(circle_at_68%_38%,rgba(197,163,88,.20),transparent_34rem)]" aria-hidden />
          <span className="hero-glow-ring" aria-hidden />
          <span className="hero-glow-ring" aria-hidden />
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#C5A358,#FFFFFF,#913191,transparent)] opacity-80" aria-hidden />
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(197,163,88,.40),transparent_70%)] blur-2xl" aria-hidden />
          <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(145,49,145,.34),transparent_72%)] blur-2xl" aria-hidden />

          <div className="relative z-10 flex w-full flex-col justify-center p-5 sm:p-7 lg:p-9 xl:p-10">
            <div className="absolute right-10 top-8 hidden flex-wrap justify-start gap-3 lg:flex">
              <span className="premium-badge rounded-full px-4 py-2 text-xs font-bold tracking-[0.22em] text-[var(--color-gold-soft)]">
                {t("eyebrowProposal", lang)}
              </span>
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_.96fr]">
              <div className="max-w-5xl">
                <div className="flex flex-wrap justify-start gap-3 lg:hidden">
                  <span className="premium-badge rounded-full px-4 py-2 text-xs font-bold tracking-[0.22em] text-[var(--color-gold-soft)]">
                    {t("eyebrowProposal", lang)}
                  </span>
                </div>

                <h1 className="mt-6 max-w-[40rem] text-2xl font-black leading-[1.18] text-white sm:text-3xl lg:text-4xl">
                  <span className="block">{t("heroHeadlineA", lang)}</span>
                  <span className="mt-3 block pb-1 leading-[1.28] bg-[linear-gradient(90deg,#FFFFFF,#F8F0DA,#C5A358,#FFFFFF)] bg-[length:220%_100%] bg-clip-text text-transparent animate-pulse">
                    {t("heroHeadlineB", lang)}
                  </span>
                </h1>

                <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <p className="max-w-2xl text-sm leading-7 text-white/84 sm:text-base">
                    {t("heroSubheadline", lang)}
                  </p>

                  <button
                    onClick={moveToContent}
                    className="premium-cta group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-black text-[var(--color-navy-deep)] transition-all hover:-translate-y-1 hover:bg-[var(--color-gold-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:absolute lg:bottom-10 lg:left-10 lg:z-20 lg:self-auto"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy-deep)] text-white transition-transform group-hover:scale-110">
                      ↓
                    </span>
                    {t("ctaRead", lang)}
                  </button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="orbit-system mx-auto max-w-[28rem]">
                  <span className="orbit-dot one" />
                  <span className="orbit-dot two" />
                  <span className="orbit-dot three" />
                  <div className="orbit-core text-center">
                    <div>
                      <p className="text-4xl font-black">SA</p>
                      <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-white/70">FOOTBALL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
