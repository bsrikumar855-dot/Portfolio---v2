"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor dot that grows over interactive elements.
 * Hidden on touch/coarse-pointer devices (handled in CSS via @media hover:none)
 * and disabled entirely under prefers-reduced-motion.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };
    const grow = () => dot.classList.add("big");
    const shrink = () => dot.classList.remove("big");

    window.addEventListener("mousemove", move);
    const interactive = document.querySelectorAll("a, button");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return <div id="cursor" ref={ref} aria-hidden="true" />;
}
