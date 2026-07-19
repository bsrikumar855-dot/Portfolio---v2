import Reveal from "./Reveal";
import BackToTop from "./BackToTop";

const LINKS = [
  { href: "mailto:bsrikumar855@gmail.com", label: "bsrikumar855@gmail.com" },
  { href: "https://github.com/bsrikumar855-dot", label: "GitHub ↗", external: true },
  {
    href: "https://www.linkedin.com/in/shreekumar-b-103922381/",
    label: "LinkedIn ↗",
    external: true,
  },
  {
    href: "https://www.instagram.com/__im.shree./",
    label: "Instagram ↗",
    external: true,
  },
  { href: "tel:+918122456608", label: "+91 8122 456 608" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-ink text-paper"
      style={{ padding: "clamp(90px, 12vw, 160px) var(--pad) 0" }}
    >
      <Reveal
        as="span"
        className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/55"
      >
        Get in touch — channel open
      </Reveal>

      <Reveal
        as="h2"
        className="my-[26px] mb-[30px] font-serif font-normal leading-[0.95] tracking-[-0.03em]"
        style={{ fontSize: "clamp(52px, 11vw, 170px)" }}
      >
        <a
          href="mailto:bsrikumar855@gmail.com"
          className="group transition-colors hover:text-[#C4DCC0]"
        >
          Got an idea?
          <br />
          <em className="italic text-[#9DBA9A] group-hover:text-[#C4DCC0]">
            Let&apos;s build it.
          </em>
        </a>
      </Reveal>

      <Reveal as="p" className="mb-[44px] max-w-[480px] text-paper/60">
        Available for systems design, AI backend integrations and automated
        agent pipelines.
      </Reveal>

      <Reveal className="mb-[70px] flex flex-wrap gap-3">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="rounded-full border border-paper/30 px-6 py-[14px] font-mono text-[12px] uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 hover:border-paper hover:bg-paper hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </Reveal>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 py-[22px] font-mono text-[11px] uppercase tracking-[0.1em] text-paper/45">
        <span>© 2026 Shreekumar B</span>
        <span>Editorial portfolio · Vol. 02</span>
        <BackToTop />
      </footer>
    </section>
  );
}
