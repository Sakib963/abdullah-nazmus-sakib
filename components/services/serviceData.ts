export interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  stack: string[];
  accentColor: string;
  glowColor: string;
  borderColor: string;
}

export const services: Service[] = [
  {
    number: "01",
    icon: "web",
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development — from database schema to pixel-perfect UI. I take a feature from requirements to production, handling every layer in between.",
    deliverables: [
      "Responsive, performant web apps",
      "RESTful API integration",
      "Authentication & role management",
      "Deployment & CI/CD pipeline setup",
    ],
    stack: ["Angular", "Next.js", "Node.js", "PostgreSQL"],
    accentColor: "text-primary",
    glowColor: "bg-primary",
    borderColor: "border-primary/20",
  },
  {
    number: "02",
    icon: "hub",
    title: "API & Backend Engineering",
    description:
      "Designing scalable, well-documented REST APIs built for reliability. Clean architecture, proper error handling, structured logging, and database efficiency from day one.",
    deliverables: [
      "REST API design & implementation",
      "Database modelling & indexing",
      "Authentication (JWT / session)",
      "Unit & integration testing",
    ],
    stack: ["Node.js", "Hapi.js", "Express.js", "PostgreSQL", "TypeScript"],
    accentColor: "text-secondary",
    glowColor: "bg-secondary",
    borderColor: "border-secondary/20",
  },
  {
    number: "03",
    icon: "desktop_windows",
    title: "Frontend & SPA Development",
    description:
      "Building fast, accessible single-page applications with clean component architecture. Focus on state management, smooth UX, and maintainable code that scales with the team.",
    deliverables: [
      "Component-driven UI development",
      "State management (Signals / RxJS)",
      "Performance & bundle optimisation",
      "Cross-browser compatibility",
    ],
    stack: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    accentColor: "text-tertiary",
    glowColor: "bg-tertiary",
    borderColor: "border-tertiary/20",
  },
  {
    number: "04",
    icon: "search_insights",
    title: "Code Review & Technical Consulting",
    description:
      "Independent review of existing codebases to identify bottlenecks, security gaps, and architectural weaknesses — with actionable recommendations and concrete fixes.",
    deliverables: [
      "Codebase audit & report",
      "Performance bottleneck analysis",
      "Refactoring recommendations",
      "Architecture & tech stack advice",
    ],
    stack: ["Angular", "Node.js", "PostgreSQL", "TypeScript"],
    accentColor: "text-primary",
    glowColor: "bg-primary",
    borderColor: "border-primary/20",
  },
];
