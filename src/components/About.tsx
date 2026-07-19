import Image from "next/image";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-[minmax(260px,420px)_1fr] items-start max-[820px]:grid-cols-1"
      style={{
        gap: "clamp(32px, 5vw, 90px)",
        padding: "clamp(60px, 8vw, 110px) var(--pad) clamp(90px, 11vw, 150px)",
      }}
    >
      <Reveal
        as="figure"
        className="group overflow-hidden bg-paper-2 max-[820px]:max-w-[420px]"
      >
        <Image
          src={asset("/portrait.jpg")}
          alt="Shreekumar B, black-and-white studio portrait"
          width={900}
          height={1200}
          className="aspect-[3/4] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          style={{ objectPosition: "center 22%" }}
        />
        <figcaption className="flex justify-between gap-3 pt-2.5">
          <span className="lbl">Fig. 02 — The builder</span>
          <span className="lbl lbl-moss">Coimbatore, IN</span>
        </figcaption>
      </Reveal>

      <div>
        <Reveal as="span" className="lbl lbl-moss">
          About
        </Reveal>
        <Reveal
          as="h2"
          className="my-[18px] mb-[22px] font-serif font-medium leading-[1.08] tracking-[-0.02em] text-balance"
          style={{ fontSize: "clamp(30px, 4.2vw, 54px)" }}
        >
          An <em className="italic text-moss">AI &amp; Data Science</em> student
          who ships like an engineer.
        </Reveal>
        <Reveal as="p" className="mb-4 max-w-[600px] text-muted">
          I&apos;m Shreekumar B, studying Artificial Intelligence &amp; Data
          Science at Sri Shakthi Institute of Engineering and Technology,
          Coimbatore. I spend my days architecting agent systems, LLM pipelines
          and the backends that keep them honest.
        </Reveal>
        <Reveal as="p" className="mb-4 max-w-[600px] text-muted">
          Current flagship:{" "}
          <a
            href="https://github.com/bsrikumar855-dot/CompanyOS-CodeRED-"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-hairline-strong"
          >
            CompanyOS CodeRED
          </a>{" "}
          — an autonomous operating layer for organizations, built on agent
          routing and state-machine persistence.
        </Reveal>

        <Reveal className="mt-9 border-t border-hairline-strong">
          {[
            {
              k: "Currently",
              v: (
                <a
                  href="https://github.com/bsrikumar855-dot/CompanyOS-CodeRED-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CompanyOS CodeRED — flagship build ↗
                </a>
              ),
            },
            { k: "Learning", v: "System design & LLM engineering" },
            { k: "Ask me about", v: "AI agents · Python · FastAPI" },
            {
              k: "Institute",
              v: "Sri Shakthi Institute of Engineering & Technology",
            },
          ].map((fact) => (
            <div
              key={fact.k}
              className="flex justify-between gap-[18px] border-b border-hairline py-[15px] font-mono text-[12.5px]"
            >
              <span className="pt-0.5 text-[10.5px] uppercase tracking-[0.1em] text-faint">
                {fact.k}
              </span>
              <span className="text-right text-ink">{fact.v}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
