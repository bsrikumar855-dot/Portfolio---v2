/**
 * Selected work — six projects. All copy, taglines, tech lists and repo URLs
 * are taken verbatim from the reference design (index_5.html). Each project
 * carries a typed, CSS-only "plate" visual rendered by <Plate />.
 */

/** A run of monospace text with an optional colour role. */
export interface Seg {
  t: string;
  /** g = moss accent, k = ink emphasis, undefined = muted default */
  v?: "g" | "k";
}

export type Plate =
  | { kind: "terminal"; lines: Seg[][] }
  | { kind: "tree"; lines: Seg[][] }
  | {
      kind: "ledger";
      head: string[];
      rows: { cells: string[]; status: string; statusKind: "ok" | "flag" }[];
    }
  | {
      kind: "scorecard";
      score: string;
      scoreSuffix: string;
      items: { dt: string; dd: string }[];
    }
  | {
      kind: "campaign";
      badge: string;
      title: string;
      /** percentage of the bar left unfilled, e.g. 32 → 68% filled */
      barRemaining: number;
      rowLeft: string;
      rowRight: string;
    }
  | { kind: "tokens"; items: { b: string; label: string }[] };

export interface Project {
  num: string;
  name: string;
  category: string;
  yearRole: string;
  tagline: string;
  description: string;
  tech: string[];
  href: string;
  plateLabel: string;
  plate: Plate;
}

export const projects: Project[] = [
  {
    num: "01",
    name: "AHAL",
    category: "Agent Automation",
    yearRole: "2026 · Creator",
    tagline: "Developer intelligence, on command",
    description:
      "A developer intelligence platform integrating execution chains for automated directory analysis and modification — semantic agents that parse and act on file structures directly from the command line.",
    tech: ["Python", "AI Agents", "Execution Chains", "CLI"],
    href: "https://github.com/bsrikumar855-dot/AHAL-AI",
    plateLabel: "Plate 01 · agent run",
    plate: {
      kind: "terminal",
      lines: [
        [{ t: "$", v: "g" }, { t: " ahal analyze ./workspace" }],
        [
          { t: "[agent] parsing directory tree … " },
          { t: "1,204 files", v: "k" },
        ],
        [{ t: "[chain] semantic map built → executing plan" }],
        [
          { t: "[write] refactor applied to " },
          { t: "14 modules", v: "k" },
          { t: " " },
          { t: "✓ done", v: "g" },
        ],
      ],
    },
  },
  {
    num: "02",
    name: "AHAL V2",
    category: "Codebase Intelligence",
    yearRole: "2026 · Full-stack Creator",
    tagline: "An engine that reads codebases like an editor reads copy",
    description:
      "Full-stack ingestion engine for scanning and analyzing large codebases. Builds structured semantic layout indexes with parallel token processing and answers natural-language queries through the Gemini API.",
    tech: ["FastAPI", "React", "Vite", "Docker", "Gemini", "TypeScript"],
    href: "https://github.com/bsrikumar855-dot/AHAL-V2",
    plateLabel: "Plate 02 · index tree",
    plate: {
      kind: "tree",
      lines: [
        [{ t: "workspace/", v: "k" }],
        [
          { t: "├── api/            " },
          { t: "indexed · 312 symbols", v: "g" },
        ],
        [
          { t: "├── core/pipeline/  " },
          { t: "indexed · 891 symbols", v: "g" },
        ],
        [
          { t: "├── ui/components/  " },
          { t: "indexed · 240 symbols", v: "g" },
        ],
        [
          { t: "└── query: " },
          { t: '"where is auth handled?"', v: "k" },
          { t: " → core/pipeline/auth.py:41" },
        ],
      ],
    },
  },
  {
    num: "03",
    name: "PRYSM",
    category: "Audit Intelligence",
    yearRole: "2026 · Team Lead & Architect",
    tagline: "Continuous AI compliance for CA firms",
    description:
      "Hackathon MVP that reconciles sales registers against e-way bills and government tax portals — surfacing GST mismatches, missing invoices and critical compliance gaps before the auditor does.",
    tech: ["Next.js", "FastAPI", "ChromaDB", "Groq", "LLaMA", "Tesseract OCR"],
    href: "https://github.com/bsrikumar855-dot/PRYSM---Continuous-AI-Compilance-Operating-System",
    plateLabel: "Plate 03 · reconciliation",
    plate: {
      kind: "ledger",
      head: ["Invoice", "Register", "E-way bill", "Status"],
      rows: [
        {
          cells: ["INV-2026-085", "₹1,42,000", "₹1,42,000"],
          status: "matched",
          statusKind: "ok",
        },
        {
          cells: ["INV-2026-086", "₹86,500", "₹86,500"],
          status: "matched",
          statusKind: "ok",
        },
        {
          cells: ["INV-2026-087", "₹2,10,000", "—"],
          status: "GST mismatch",
          statusKind: "flag",
        },
        {
          cells: ["INV-2026-088", "missing", "₹54,200"],
          status: "sequence gap",
          statusKind: "flag",
        },
      ],
    },
  },
  {
    num: "04",
    name: "GradeMIND",
    category: "Vision × LLM",
    yearRole: "2026 · AI Developer",
    tagline: "Answer sheets, evaluated by machine — fairly",
    description:
      "Computer-vision and multi-modal LLM architecture for automating exam evaluation. Scans physical handwriting, matches answers against structured rubrics through post-OCR validation chains, and generates scored mark lists.",
    tech: ["Python", "Computer Vision", "Multi-modal LLM", "FastAPI", "OCR"],
    href: "https://github.com/bsrikumar855-dot/GradeMIND",
    plateLabel: "Plate 04 · evaluation",
    plate: {
      kind: "scorecard",
      score: "92",
      scoreSuffix: "/100",
      items: [
        { dt: "Paper", dd: "Computer Science — Sem IV" },
        { dt: "Rubric match", dd: "18 / 20 criteria verified" },
        { dt: "Confidence", dd: "99.2%" },
      ],
    },
  },
  {
    num: "05",
    name: "Crowdera UI",
    category: "Product Interface",
    yearRole: "2026 · Frontend Build",
    tagline: "Interface work for a crowdfunding platform",
    description:
      "Frontend build for Crowdera, a fundraising platform — campaign pages, progress states and donor-facing flows composed as clean, reusable interface components.",
    tech: ["React", "TypeScript", "Tailwind", "Component Design"],
    href: "https://github.com/bsrikumar855-dot/NGO_Template_Crowdera-",
    plateLabel: "Plate 05 · campaign card",
    plate: {
      kind: "campaign",
      badge: "Live campaign",
      title: "Clean water for 12 villages",
      barRemaining: 32,
      rowLeft: "₹6.8L raised · 68%",
      rowRight: "21 days left",
    },
  },
  {
    num: "06",
    name: "Vidiyal UI",
    category: "Design System",
    yearRole: "2026 · Creator",
    tagline: "Tokens and components, systematized",
    description:
      "A modular interface system supplying layout components and design tokens for React implementations — the shared visual language across my frontend work.",
    tech: ["TypeScript", "React", "Design Tokens"],
    href: "https://github.com/bsrikumar855-dot/Vidiyal-UI-UX",
    plateLabel: "Plate 06 · tokens",
    plate: {
      kind: "tokens",
      items: [
        { b: "Aa", label: "type.display" },
        { b: "8px", label: "space.unit" },
        { b: "◼", label: "color.ink" },
        { b: "999", label: "radius.pill" },
        { b: "1px", label: "border.hair" },
      ],
    },
  },
];
