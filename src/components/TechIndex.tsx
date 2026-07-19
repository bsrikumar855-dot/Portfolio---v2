import { Fragment } from "react";
import Reveal from "./Reveal";
import { techGroups, tickerItems } from "@/data/tech";

export default function TechIndex() {
  return (
    <section
      id="stack"
      style={{
        paddingTop: "clamp(60px, 8vw, 110px)",
        paddingBottom: "clamp(70px, 9vw, 120px)",
      }}
    >
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline-strong px-[var(--pad)] pb-[18px]">
        <h2
          className="font-serif font-medium leading-none tracking-[-0.025em]"
          style={{ fontSize: "clamp(34px, 5.4vw, 72px)" }}
        >
          Tech <em className="it text-moss">index</em>
        </h2>
        <span className="lbl">Every tool used across 01 — 06</span>
      </Reveal>

      <table className="w-full border-collapse">
        <tbody>
          {techGroups.map((group) => (
            <Reveal
              as="tr"
              key={group.category}
              className="border-b border-hairline transition-colors hover:bg-paper-2"
            >
              <td className="w-[220px] whitespace-nowrap px-[var(--pad)] py-5 align-top font-mono text-[11px] uppercase tracking-[0.12em] text-moss max-[820px]:block max-[820px]:w-auto max-[820px]:pb-0">
                {group.category}
              </td>
              <td
                className="px-[var(--pad)] py-5 align-top font-serif font-normal leading-[1.5] tracking-[-0.01em] max-[820px]:block max-[820px]:pt-2"
                style={{ fontSize: "clamp(18px, 2.4vw, 28px)" }}
              >
                {group.items.map((item, i) => (
                  <Fragment key={item}>
                    {item}
                    {i < group.items.length - 1 && (
                      <i className="px-2.5 text-[0.7em] not-italic text-faint">
                        /
                      </i>
                    )}
                  </Fragment>
                ))}
              </td>
              <td className="w-[140px] whitespace-nowrap px-[var(--pad)] py-5 text-right align-top font-mono text-[11px] text-muted max-[820px]:hidden">
                {group.used}
              </td>
            </Reveal>
          ))}
        </tbody>
      </table>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
