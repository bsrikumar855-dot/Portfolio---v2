"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { asset } from "@/lib/asset";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * A single headline line. The text sits inside a mask and rises on mount.
 *
 * Safety net: once the rise finishes — OR after a 1600ms fallback timer,
 * whichever comes first — the line renders in its final resting state with no
 * transform and an overflow-visible mask. This guarantees the text can never be
 * left stuck hidden off-screen (e.g. if requestAnimationFrame is throttled) and
 * that tall glyph descenders like the "y" in "systems" are never clipped.
 */
function Line({
  children,
  delay,
  reduce,
}: {
  children: ReactNode;
  delay: number;
  reduce: boolean;
}) {
  const [shown, setShown] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    const timer = setTimeout(() => setShown(true), 1600);
    return () => clearTimeout(timer);
  }, [reduce]);

  if (shown) {
    return (
      <span className="block overflow-visible">
        <span className="inline-block">{children}</span>
      </span>
    );
  }

  return (
    <span className="block overflow-hidden">
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, ease: EASE, delay }}
        onAnimationComplete={() => setShown(true)}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col justify-center"
      style={{
        padding:
          "clamp(120px, 15vh, 170px) var(--pad) clamp(40px, 7vh, 80px)",
        gap: "clamp(28px, 5vh, 56px)",
      }}
    >
      <div>
        <div className="flex flex-wrap justify-between gap-4 border-b border-hairline pb-[22px]">
          <span className="lbl lbl-moss">Portfolio — 2026</span>
          <span className="lbl">AI Systems · Agents · Backends</span>
          <span className="lbl">Vol. 02</span>
        </div>

        <h1
          className="mt-0 font-serif font-medium leading-[0.95] tracking-[-0.03em] text-balance"
          style={{ fontSize: "clamp(52px, min(11vw, 15vh), 168px)" }}
        >
          <Line delay={0} reduce={reduce}>
            Shreekumar
          </Line>
          <Line delay={0.12} reduce={reduce}>
            builds{" "}
            <span
              className="inline-block overflow-hidden rounded-full border border-hairline-strong align-baseline"
              style={{
                width: "clamp(64px, 9vw, 150px)",
                height: "clamp(48px, 6.6vw, 108px)",
                margin: "0 clamp(6px, 1vw, 18px)",
                transform: "translateY(clamp(4px, 0.9vw, 14px))",
              }}
            >
              <Image
                src={asset("/portrait-square.jpg")}
                alt="Shreekumar B, black-and-white studio portrait"
                width={600}
                height={600}
                priority
                className="h-full w-full object-cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectPosition: "center 42%",
                }}
              />
            </span>{" "}
            <em className="it text-moss">intelligent</em> systems
          </Line>
        </h1>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-7 border-t border-hairline pt-[28px]">
        <p className="max-w-[430px] text-[16.5px] text-muted">
          <strong className="font-semibold text-ink">
            AI &amp; Data Science student
          </strong>{" "}
          and daily builder. I design production-grade AI systems — agent
          architectures, backend pipelines and autonomous workflows — end to
          end.
        </p>
        <div className="flex flex-col gap-1.5 text-right font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted max-[640px]:text-left">
          <span>Selected work — 01 / 06</span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
