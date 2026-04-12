export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
  iconBg: string;
  tagColor: string;
  tagBorder: string;
  glowColor: string;
}

export const services: Service[] = [
  {
    icon: "web",
    title: "Front-end Zenith",
    description:
      "Forging cinematic user interfaces with React and Next.js, where every frame is a testament to quality.",
    tags: ["High-Fidelity UI", "Motion Systems"],
    accentColor: "text-primary",
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    tagColor: "text-primary",
    tagBorder: "border-primary/20",
    glowColor: "bg-primary/15",
  },
  {
    icon: "hub",
    title: "Neural Back-end",
    description:
      "Architecting secure, scalable server-side systems that serve as the indestructible spine of your application.",
    tags: ["Node Logic", "Cloud Native"],
    accentColor: "text-secondary",
    iconBg: "bg-secondary/10 group-hover:bg-secondary/20",
    tagColor: "text-secondary",
    tagBorder: "border-secondary/20",
    glowColor: "bg-secondary/15",
  },
  {
    icon: "design_services",
    title: "UX Narrative",
    description:
      "Designing end-to-end journeys that guide users through a story, ensuring retention and emotional impact.",
    tags: ["Behavioral UX", "Prototyping"],
    accentColor: "text-tertiary",
    iconBg: "bg-tertiary/10 group-hover:bg-tertiary/20",
    tagColor: "text-tertiary",
    tagBorder: "border-tertiary/20",
    glowColor: "bg-tertiary/15",
  },
];
