import { Fragment } from "react";
import type { Plate as PlateType, Seg } from "@/data/projects";

function segClass(v: Seg["v"]): string {
  if (v === "g") return "text-moss";
  if (v === "k") return "font-medium text-ink";
  return "";
}

function Segs({ line }: { line: Seg[] }) {
  return (
    <>
      {line.map((seg, i) => (
        <span key={i} className={segClass(seg.v)}>
          {seg.t}
        </span>
      ))}
    </>
  );
}

function PlateBody({ plate }: { plate: PlateType }) {
  switch (plate.kind) {
    case "terminal":
      return (
        <div className="font-mono text-[12.5px] leading-[2] text-muted">
          {plate.lines.map((line, i) => (
            <div key={i}>
              <Segs line={line} />
            </div>
          ))}
        </div>
      );

    case "tree":
      return (
        <div className="whitespace-pre font-mono text-[12.5px] leading-[2] text-muted">
          {plate.lines.map((line, i) => (
            <Fragment key={i}>
              <Segs line={line} />
              {i < plate.lines.length - 1 ? "\n" : ""}
            </Fragment>
          ))}
        </div>
      );

    case "ledger":
      return (
        <table className="w-full border-collapse font-mono text-[12px]">
          <thead>
            <tr>
              {plate.head.map((h) => (
                <th
                  key={h}
                  className="border-b border-hairline px-3 py-[10px] text-left text-[10px] font-medium uppercase tracking-[0.1em] text-faint"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plate.rows.map((row, i) => (
              <tr key={i}>
                {row.cells.map((cell, j) => (
                  <td
                    key={j}
                    className="border-b border-hairline px-3 py-[10px] text-left"
                  >
                    {cell}
                  </td>
                ))}
                <td
                  className={`border-b border-hairline px-3 py-[10px] text-left font-medium ${
                    row.statusKind === "ok" ? "text-moss" : "text-[#8A3B2E]"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );

    case "scorecard":
      return (
        <div
          className="flex flex-wrap items-center"
          style={{ gap: "clamp(20px, 4vw, 48px)" }}
        >
          <div
            className="font-serif font-light leading-none tracking-[-0.03em]"
            style={{ fontSize: "clamp(64px, 9vw, 120px)" }}
          >
            {plate.score}
            <i className="not-italic text-moss">{plate.scoreSuffix}</i>
          </div>
          <dl className="grid grid-cols-[auto_auto] gap-x-5 gap-y-2 font-mono text-[12px] text-muted">
            {plate.items.map((item) => (
              <Fragment key={item.dt}>
                <dt className="text-[10px] uppercase tracking-[0.1em] text-faint">
                  {item.dt}
                </dt>
                <dd>{item.dd}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
      );

    case "campaign":
      return (
        <div className="max-w-[460px] border border-hairline-strong bg-paper p-6">
          <span className="lbl lbl-moss">{plate.badge}</span>
          <h4 className="mb-1.5 font-serif text-[22px] font-medium">
            {plate.title}
          </h4>
          <div className="relative my-4 mb-2 h-2 border border-hairline bg-paper-2">
            <i
              className="absolute inset-0 bg-moss"
              style={{ right: `${plate.barRemaining}%` }}
            />
          </div>
          <div className="flex justify-between font-mono text-[11px] text-muted">
            <span>{plate.rowLeft}</span>
            <span>{plate.rowRight}</span>
          </div>
        </div>
      );

    case "tokens":
      return (
        <div
          className="grid gap-2.5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          }}
        >
          {plate.items.map((token) => (
            <div
              key={token.label}
              className="border border-hairline-strong bg-paper px-[14px] py-4 font-mono text-[11px] text-muted"
            >
              <b className="mb-1.5 block font-serif text-[18px] font-medium tracking-[-0.01em] text-ink">
                {token.b}
              </b>
              {token.label}
            </div>
          ))}
        </div>
      );
  }
}

export default function Plate({
  plate,
  label,
}: {
  plate: PlateType;
  label: string;
}) {
  return (
    <figure
      className="relative mt-[44px] overflow-hidden border border-hairline-strong bg-paper-2"
      style={{ padding: "clamp(20px, 3vw, 40px)" }}
      aria-hidden="true"
    >
      <span className="absolute right-4 top-[14px] font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        {label}
      </span>
      <PlateBody plate={plate} />
    </figure>
  );
}
