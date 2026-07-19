"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal trigger built on IntersectionObserver.
 *
 * IntersectionObserver (unlike a requestAnimationFrame-driven animation) fires
 * reliably as soon as the element scrolls into view, and the reveal itself is a
 * CSS transition — so the final, visible state is always applied and content
 * can never be left stuck hidden. Under prefers-reduced-motion, or when the API
 * is unavailable, the element is shown immediately.
 */
export function useReveal<T extends HTMLElement>(amount = 0.14) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: amount },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [amount]);

  return { ref, shown };
}
