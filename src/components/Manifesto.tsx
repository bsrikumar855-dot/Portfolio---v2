import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section
      className="px-[var(--pad)]"
      style={{ paddingBlock: "clamp(100px, 13vw, 180px)" }}
    >
      <Reveal as="span" className="lbl lbl-moss mb-[34px] block">
        The practice
      </Reveal>
      <Reveal
        as="p"
        className="max-w-[1100px] font-serif font-normal leading-[1.22] tracking-[-0.015em] text-balance"
        style={{ fontSize: "clamp(28px, 4.4vw, 60px)" }}
      >
        Not demos. Not toy projects. I architect{" "}
        <em className="italic text-moss">end-to-end</em> — from database schema
        to AI pipeline to interface — building systems that{" "}
        <em className="italic text-moss">run in the real world</em>: audit
        intelligence for CA firms, autonomous company operations, codebase
        engines and vision evaluators.
      </Reveal>
    </section>
  );
}
