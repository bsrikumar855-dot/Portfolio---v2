"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Scroll-reveal wrapper: fade + 28px rise, fired once when in view.
 * Under prefers-reduced-motion the content renders immediately with no motion.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  className,
  style,
  children,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[
    as as keyof typeof motion
  ] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
