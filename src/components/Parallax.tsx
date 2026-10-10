"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Parallax({
  children,
  className = "",
  speed = 0.16,
  as: Tag = "div",
  ariaHidden,
}: {
  children?: ReactNode;
  className?: string;
  /** Max vertical travel in px over a full viewport pass. */
  speed?: number;
  as?: "div" | "section" | "span";
  ariaHidden?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 when the element is a viewport below, +1 when a viewport above.
      const raw = (rect.top + rect.height / 2 - vh / 2) / vh;
      const progress = Math.max(-1, Math.min(1, raw));
      el.style.setProperty(
        "--parallax-y",
        `${(-progress * speed * 100).toFixed(2)}px`,
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <Tag ref={ref as never} className={`parallax ${className}`} aria-hidden={ariaHidden}>
      {children}
    </Tag>
  );
}
