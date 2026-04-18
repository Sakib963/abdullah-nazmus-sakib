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
    title: "Full Stack Web Applications",
    description:
      "Frontend and backend built together, not bolted together. When both sides share the same understanding of the product, the API fits the UI, the data model makes sense, and nothing gets lost between layers.",
    deliverables: [
      "End-to-end application development",
      "Authentication & role-based access",
      "Responsive, production-ready UI",
      "API design and database setup",
    ],
    stack: ["Angular", "Next.js", "Node.js", "PostgreSQL"],
    accentColor: "text-primary",
    glowColor: "bg-primary",
    borderColor: "border-primary/20",
  },
  {
    number: "02",
    icon: "hub",
    title: "Frontend Engineering",
    description:
      "The interface is the product to everyone who is not you. I build the part your users actually touch. Fast, clear, works on their phone, does not fall apart when they do something unexpected.",
    deliverables: [
      "Component-driven UI development",
      "State management (Signals / RxJS / Redux)",
      "Performance and bundle optimization",
      "Pixel-accurate UI/UX implementation",
    ],
    stack: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    accentColor: "text-secondary",
    glowColor: "bg-secondary",
    borderColor: "border-secondary/20",
  },
  {
    number: "03",
    icon: "desktop_windows",
    title: "Backend & Database Systems",
    description:
      "APIs that say what they mean, databases that stay fast when the data grows, errors that get caught before the user sees them. The invisible layer that either holds everything up or quietly takes it all down.",
    deliverables: [
      "REST API design & implementation",
      "Database modelling, indexing & optimization",
      "Authentication (JWT / session)",
      "Structured error handling & logging",
    ],
    stack: ["Node.js", "Hapi.js", "Express.js", "PostgreSQL", "MongoDB"],
    accentColor: "text-tertiary",
    glowColor: "bg-tertiary",
    borderColor: "border-tertiary/20",
  },
  {
    number: "04",
    icon: "search_insights",
    title: "MVP & Product Development",
    description:
      "You have an idea and need to know if it is real before committing everything to it. I build the version that answers that question. Live, functional, in front of actual users. No Figma files.",
    deliverables: [
      "Idea to deployment, end to end",
      "Iterative development with real feedback",
      "Bug fixing & ongoing maintenance",
      "Deployment & hosting setup",
    ],
    stack: ["Next.js", "Angular", "Node.js", "PostgreSQL", "Vercel"],
    accentColor: "text-primary",
    glowColor: "bg-primary",
    borderColor: "border-primary/20",
  },
];
