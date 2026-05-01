import { useEffect, useRef } from "react";

const WHEEL_THRESHOLD = 8;
const SNAP_LOCK_MS = 900;
const TABS_TOP_TOLERANCE = 140;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getHeaderOffset() {
  const header = document.querySelector("header");
  return header ? Math.ceil(header.getBoundingClientRect().bottom + 12) : 112;
}

function getPageTop(element: HTMLElement, offset = 0) {
  return Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);
}

export function SectionSnapController() {
  const isScrollingRef = useRef(false);
  const wheelDeltaRef = useRef(0);
  const wheelResetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    function releaseLock() {
      window.setTimeout(() => {
        isScrollingRef.current = false;
      }, SNAP_LOCK_MS);
    }

    function snapTo(top: number) {
      isScrollingRef.current = true;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
      releaseLock();
    }

    function resetWheelDeltaSoon() {
      if (wheelResetTimerRef.current !== null) {
        window.clearTimeout(wheelResetTimerRef.current);
      }
      wheelResetTimerRef.current = window.setTimeout(() => {
        wheelDeltaRef.current = 0;
        wheelResetTimerRef.current = null;
      }, 140);
    }

    function onWheel(event: WheelEvent) {
      if (isScrollingRef.current) {
        event.preventDefault();
        return;
      }

      wheelDeltaRef.current += event.deltaY;
      resetWheelDeltaSoon();

      if (Math.abs(wheelDeltaRef.current) < WHEEL_THRESHOLD) return;

      const hero = document.getElementById("top");
      const tabs = document.getElementById("tabs");
      if (!hero || !tabs) return;

      const tabsTop = getPageTop(tabs, getHeaderOffset());
      const currentY = window.scrollY;
      const heroRect = hero.getBoundingClientRect();
      const movingDown = wheelDeltaRef.current > 0;
      const movingUp = wheelDeltaRef.current < 0;

      const isInsideHero = currentY < tabsTop - 24 && heroRect.bottom > getHeaderOffset();
      const isAtTabsStart = currentY >= tabsTop - 24 && currentY <= tabsTop + TABS_TOP_TOLERANCE;

      if (movingDown && isInsideHero && currentY < tabsTop - 24) {
        event.preventDefault();
        wheelDeltaRef.current = 0;
        snapTo(tabsTop);
        return;
      }

      if (movingUp && isAtTabsStart) {
        event.preventDefault();
        wheelDeltaRef.current = 0;
        snapTo(0);
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (wheelResetTimerRef.current !== null) {
        window.clearTimeout(wheelResetTimerRef.current);
      }
    };
  }, []);

  return null;
}
