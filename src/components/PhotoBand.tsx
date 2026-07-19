"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { asset } from "@/lib/asset";

export default function PhotoBand() {
  const { ref, shown } = useReveal<HTMLElement>(0.2);

  return (
    <div className="px-[var(--pad)]">
      <figure
        ref={ref}
        className={`img-reveal relative overflow-hidden bg-paper-2 ${
          shown ? "is-in" : ""
        }`}
      >
        <Image
          src={asset("/landscape.jpg")}
          alt="Shreekumar standing in the Western Ghats hills, Tamil Nadu"
          width={720}
          height={1280}
          loading="eager"
          className="w-full object-cover"
          style={{
            height: "clamp(380px, 72vh, 720px)",
            objectPosition: "center 38%",
          }}
        />
        <figcaption className="flex flex-wrap justify-between gap-4 pt-[14px]">
          <span className="lbl">Fig. 01 — Western Ghats, Tamil Nadu</span>
          <span className="lbl">Thinking in systems, offline</span>
        </figcaption>
      </figure>
    </div>
  );
}
