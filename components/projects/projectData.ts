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
    id: "nexus",
    label: "Full Stack",
    title: "Nexus Protocol",
    description:
      "A decentralized ecosystem designed for fluidity. Reimagined asset management with biological motion and intuitive flows. Built with React, Node.js, and PostgreSQL.",
    gitUrl: "https://github.com/sakib963",
    liveUrl: "#",
    image: "https://picsum.photos/600/400?random=1",
    accentColor: "text-primary",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    year: "2024",
    status: "Production",
  },
  {
    id: "aether",
    label: "Dashboard",
    title: "Aether Engine",
    description:
      "Translates complex GPU cluster data into a poetic dashboard of light and motion for global infrastructure monitoring. Real-time WebSocket feeds, D3.js charts.",
    gitUrl: "https://github.com/sakib963",
    liveUrl: "#",
    image: "https://picsum.photos/600/400?random=2",
    accentColor: "text-secondary",
    tags: ["Node.js", "WebGL", "D3.js", "AWS"],
    year: "2024",
    status: "Open Source",
  },
];

export const MAX_HOMEPAGE_PROJECTS = 6;
