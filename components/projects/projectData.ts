export interface Project {
  id: string;
  label: string;
  title: string;
  description: string;
  gitUrl: string;
  liveUrl: string;
  image: string;
  accentColor: string;
  tags: string[];
  year: string;
  status: "Production" | "Open Source" | "In Development" | "Archived";
}

export const projects: Project[] = [
  {
    id: "stockflow",
    label: "Full Stack",
    title: "StockFlow",
    description:
      "An inventory and sales management system with batch-based tracking, real-time stock visibility, and a streamlined quick-sale workflow. Built to maintain data integrity while supporting efficient day-to-day operations.",
    gitUrl: "https://github.com/Sakib963/stock-flow-web",
    liveUrl: "https://sakib963.github.io/stock-flow-web/",
    image: "/projects/stockflow-thumbnail.png",
    accentColor: "text-primary",
    tags: ["Angular", "Tailwind", "NgZorro", "Express.js", "PostgreSQL"],
    year: "2025",
    status: "Production",
  },
  {
    id: "devterms",
    label: "Full Stack",
    title: "DevTerms",
    description:
      "A lightweight glossary for developers who prefer clarity over complexity. It explains commonly used engineering terms in plain language with real examples, designed for quick understanding during everyday work.",
    gitUrl: "https://github.com/Sakib963/dev-terms",
    liveUrl: "https://dev-terms.vercel.app/",
    image: "/projects/dev-terms-thumbnail.jpg",
    accentColor: "text-secondary",
    tags: ["Next.js", "TypeScript", "ISR", "Google Sheets API"],
    year: "2026",
    status: "Production",
  },
];

export const MAX_HOMEPAGE_PROJECTS = 6;
