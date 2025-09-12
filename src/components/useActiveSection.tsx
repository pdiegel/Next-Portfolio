import { useEffect, useMemo, useState } from "react";

type Opts = { headerOffset?: number }; // sticky header height (px)

export function useActiveSection(ids: string[], opts: Opts = {}) {
  const { headerOffset = 0 } = opts;
  const [active, setActive] = useState<string | null>(null);

  const sections = useMemo(() => {
    if (typeof window === "undefined") return []; // SSR safe
    return ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
  }, [ids]);

  useEffect(() => {
    if (!sections.length) return;

    let ticking = false;

    const calc = () => {
      ticking = false;

      const viewportY = headerOffset; // Top of the viewport
      let current: string | null = null;

      for (const el of sections) {
        const r = el.getBoundingClientRect();
        const top = r.top;
        const bottom = r.bottom;
        if (top <= viewportY && bottom >= viewportY) {
          current = el.id;
          break;
        }
      }

      // Fallbacks at extremes
      if (!current) {
        const first = sections[0];
        const last = sections[sections.length - 1];
        if (window.scrollY < first.offsetTop - headerOffset) current = first.id;
        else current = last.id;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(calc);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // initial
    calc();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections, headerOffset]);

  return active;
}
