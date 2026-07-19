"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Masthead() {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // move focus into the opened menu
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navClass = [
    "justify-self-center flex gap-[26px]",
    open
      ? "max-[860px]:flex max-[860px]:fixed max-[860px]:inset-0 max-[860px]:z-[1050] max-[860px]:flex-col max-[860px]:justify-center max-[860px]:items-start max-[860px]:gap-2 max-[860px]:bg-paper max-[860px]:p-[var(--pad)]"
      : "max-[860px]:hidden",
  ].join(" ");

  const linkClass =
    "font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink " +
    "max-[860px]:font-serif max-[860px]:text-[40px] max-[860px]:normal-case max-[860px]:tracking-[-0.02em] max-[860px]:text-ink";

  return (
    <header
      className="fixed inset-x-0 top-0 z-[1000] grid grid-cols-[1fr_auto_1fr] items-center gap-5 border-b border-hairline px-[var(--pad)] py-4 max-[860px]:grid-cols-[1fr_auto]"
      style={{
        background: "color-mix(in srgb, var(--color-paper) 88%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <a
        className="font-serif text-[19px] font-semibold tracking-[-0.01em]"
        href="#top"
      >
        Shreekumar B<span className="text-moss">.</span>
      </a>

      <nav id="nav" ref={navRef} className={navClass} aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className={linkClass}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[10px] justify-self-end max-[860px]:hidden">
        <span className="status-dot" aria-hidden="true" />
        <span className="lbl">Available — Coimbatore, IN</span>
      </div>

      <button
        ref={burgerRef}
        type="button"
        className="hidden cursor-pointer border border-hairline-strong px-[14px] py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink max-[860px]:z-[1100] max-[860px]:block max-[860px]:justify-self-end"
        aria-expanded={open}
        aria-controls="nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>
  );
}
