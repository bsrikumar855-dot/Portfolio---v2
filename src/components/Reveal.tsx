"use client";

import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

interface RevealProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Scroll-reveal wrapper: fade + 28px rise, fired once when in view via
 * IntersectionObserver + a CSS transition. The content is guaranteed to end
 * visible (see useReveal / .reveal in globals.css) and shows immediately under
 * prefers-reduced-motion.
 */
export default function Reveal({
  as = "div",
  className,
  style,
  children,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      className: ["reveal", shown ? "is-in" : "", className]
        .filter(Boolean)
        .join(" "),
      style,
    },
    children,
  );
}
