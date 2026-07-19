"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      className="cursor-pointer bg-transparent uppercase tracking-[inherit] transition-colors hover:text-paper"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
    >
      Back to top ↑
    </button>
  );
}
