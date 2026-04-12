export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const featuredSkills: (Skill & { color: string; trackColor: string })[] = [
  { name: "React / Next.js", level: 92, color: "#61DAFB", trackColor: "rgba(97,218,251,0.15)" },
  { name: "TypeScript",      level: 88, color: "#c7b9f5", trackColor: "rgba(199,185,245,0.15)" },
  { name: "Node.js",         level: 85, color: "#68A063", trackColor: "rgba(104,160,99,0.15)" },
  { name: "Python",          level: 78, color: "#FFD43B", trackColor: "rgba(255,212,59,0.15)" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "web",
    color: "text-primary",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript",      level: 88 },
      { name: "CSS / Tailwind",  level: 90 },
      { name: "GSAP / Framer",   level: 82 },
    ],
  },
  {
    category: "Backend",
    icon: "hub",
    color: "text-secondary",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Python / FastAPI",  level: 78 },
      { name: "REST & GraphQL",    level: 88 },
      { name: "SQL / NoSQL",       level: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "terminal",
    color: "text-tertiary",
    skills: [
      { name: "Git & CI/CD",    level: 85 },
      { name: "Docker / AWS",   level: 72 },
      { name: "Figma / Design", level: 70 },
      { name: "System Design",  level: 75 },
    ],
  },
];
