/** Tech index — every tool used across projects 01–06, verbatim from index_5.html. */

export interface TechGroup {
  category: string;
  items: string[];
  used: string;
}

export const techGroups: TechGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
    used: "01 — 06",
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Node.js", "Pytest"],
    used: "01 · 02 · 03 · 04",
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
    used: "02 · 03 · 05 · 06",
  },
  {
    category: "AI & LLM",
    items: ["LangChain", "OpenAI", "Gemini", "Groq", "LLaMA"],
    used: "01 · 02 · 03 · 04",
  },
  {
    category: "Vision & Documents",
    items: ["OpenCV", "Tesseract OCR", "PyMuPDF"],
    used: "03 · 04",
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "SQLite", "ChromaDB"],
    used: "01 — 04",
  },
  {
    category: "Infra & Tooling",
    items: ["Docker", "GitHub Actions", "Git"],
    used: "01 — 06",
  },
];

/** Marquee ticker names (duplicated in the component for a seamless loop). */
export const tickerItems: string[] = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Next.js",
  "Docker",
  "PostgreSQL",
  "LangChain",
  "Gemini",
  "Groq",
  "ChromaDB",
  "OpenCV",
];
