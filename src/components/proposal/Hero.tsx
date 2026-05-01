import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type TouchEvent } from "react";
import { useLang } from "./LangContext";
import { t } from "@/content/proposal";

function scrollToTabs() {
  const el = document.getElementById("tabs");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 18;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function Hero() {
  const { lang } = useLang();
  const isAr = lang === "ar";
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

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const heroIsDominant = rect.top <= 48 && rect.bottom > window.innerHeight * 0.72;
      if (heroIsDominant && event.deltaY > 10) {
        event.preventDefault();
        moveToContent();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

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
      className="hero-entry relative px-3 pb-8 pt-4 sm:px-5 sm:pb-10"
      onMouseMove={handleMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={heroStyle}
    >
      <div className="gov-container">
        <div className="hero-stage relative flex min-h-[calc(100svh-106px)] overflow-hidden rounded-[42px] border border-[var(--color-gold)]/34 text-white shadow-[0_44px_120px_rgba(0,0,0,.38)]">
          <span className="hero-glow-ring" aria-hidden />
          <span className="hero-glow-ring" aria-hidden />
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#C5A358,#FFFFFF,#913191,transparent)] opacity-80" aria-hidden />
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(197,163,88,.40),transparent_70%)] blur-2xl" aria-hidden />
          <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(145,49,145,.34),transparent_72%)] blur-2xl" aria-hidden />

          <div className="relative z-10 flex w-full flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_.96fr]">
              <div className="max-w-5xl">
                <div className="flex flex-wrap gap-3">
                  <span className="premium-badge rounded-full px-4 py-2 text-xs font-bold tracking-[0.22em] text-[var(--color-gold-soft)]">
                    {t("eyebrowProposal", lang)}
                  </span>
                </div>

                <h1 className="mt-7 max-w-5xl text-3xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  {t("heroHeadlineA", lang)}
                  <span className="mt-3 block bg-[linear-gradient(90deg,#FFFFFF,#F8F0DA,#C5A358,#FFFFFF)] bg-[length:220%_100%] bg-clip-text text-transparent animate-pulse">
                    {t("heroHeadlineB", lang)}
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-base leading-8 text-white/84 sm:text-lg">
                  {t("heroSubheadline", lang)}
                </p>

                <div className={`mt-9 flex flex-wrap items-center gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}>
                  <button
                    onClick={moveToContent}
                    className="premium-cta group inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-black text-[var(--color-navy-deep)] transition-all hover:-translate-y-1 hover:bg-[var(--color-gold-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy-deep)] text-white transition-transform group-hover:scale-110">
                      ↓
                    </span>
                    {t("ctaRead", lang)}
                  </button>

                  <button
                    type="button"
                    onClick={moveToContent}
                    className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-3 text-sm font-semibold text-white/86 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    <span className="scroll-cue h-2.5 w-2.5 rounded-full bg-[var(--color-plum)] ring-4 ring-[var(--color-plum)]/20" />
                    {lang === "ar" ? "مرّر للأسفل" : "Scroll down"}
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
