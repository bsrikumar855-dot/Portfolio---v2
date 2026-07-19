import Reveal from "./Reveal";
import Plate from "./Plate";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section id="work" style={{ paddingTop: "clamp(60px, 8vw, 110px)" }}>
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline-strong px-[var(--pad)] pb-[18px]">
        <h2
          className="font-serif font-medium leading-none tracking-[-0.025em]"
          style={{ fontSize: "clamp(34px, 5.4vw, 72px)" }}
        >
          Selected <em className="it text-moss">work</em>
        </h2>
        <span className="lbl">(01 — 06) · 2026</span>
      </Reveal>

      {projects.map((project, index) => (
        <article
          key={project.num}
          className={`grid grid-cols-[minmax(180px,300px)_1fr] max-[820px]:grid-cols-1 ${
            index < projects.length - 1 ? "border-b border-hairline" : ""
          }`}
          style={{
            gap: "clamp(24px, 4vw, 72px)",
            padding: "clamp(56px, 7vw, 96px) var(--pad)",
          }}
        >
          <Reveal className="sticky top-[110px] flex flex-col gap-[14px] self-start max-[820px]:static max-[820px]:flex-row max-[820px]:flex-wrap max-[820px]:items-baseline max-[820px]:justify-between">
            <span
              className="font-serif font-light leading-none tracking-[-0.03em] text-faint"
              style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="lbl lbl-moss">{project.category}</span>
              <span className="lbl">{project.yearRole}</span>
            </div>
          </Reveal>

          <div>
            <Reveal
              as="h3"
              className="mb-2.5 font-serif font-medium leading-[0.98] tracking-[-0.03em]"
              style={{ fontSize: "clamp(38px, 6vw, 84px)" }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-moss"
              >
                {project.name}
              </a>
            </Reveal>

            <Reveal
              as="p"
              className="mb-[22px] font-serif italic text-moss"
              style={{ fontSize: "clamp(17px, 2vw, 23px)" }}
            >
              {project.tagline}
            </Reveal>

            <Reveal
              as="p"
              className="mb-[30px] max-w-[640px] text-[16.5px] text-muted"
            >
              {project.description}
            </Reveal>

            <Reveal className="mb-[34px] flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-hairline-strong px-[14px] py-[7px] font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {tech}
                </span>
              ))}
            </Reveal>

            <Reveal>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 border-b border-hairline-strong pb-[5px] font-mono text-[12px] uppercase tracking-[0.12em] transition-all hover:gap-4 hover:border-moss hover:text-moss"
              >
                View on GitHub →
              </a>
            </Reveal>

            <Reveal>
              <Plate plate={project.plate} label={project.plateLabel} />
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}
