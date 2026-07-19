"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/asset";

const EASE_CLIP = [0.77, 0, 0.18, 1] as const;
const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function PhotoBand() {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="px-[var(--pad)]">
      <motion.figure
        className="relative overflow-hidden bg-paper-2"
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={reduce ? { duration: 0 } : { duration: 1.1, ease: EASE_CLIP }}
      >
        <motion.div
          initial={reduce ? false : { scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduce ? { duration: 0 } : { duration: 1.4, ease: EASE }}
        >
          <Image
            src={asset("/landscape.jpg")}
            alt="Shreekumar standing in the Western Ghats hills, Tamil Nadu"
            width={720}
            height={1280}
            className="w-full object-cover"
            style={{
              height: "clamp(380px, 72vh, 720px)",
              objectPosition: "center 38%",
            }}
          />
        </motion.div>
        <figcaption className="flex flex-wrap justify-between gap-4 pt-[14px]">
          <span className="lbl">Fig. 01 — Western Ghats, Tamil Nadu</span>
          <span className="lbl">Thinking in systems, offline</span>
        </figcaption>
      </motion.figure>
    </div>
  );
}
