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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6TUtZVp3iHM1pf6CkURYEKcvYiK7aIC6_GurXGKZuOrPI6E9a6dGLCkzbb-6znTVZW-5HBdDzKSLjidzooMWawcjOqYB2tWI8ZjqgWgnSGjtbZFHEGrhPADf5BfPGkwiaYrEtrAEgxVPbQgO72zrRdWOoxl5fQFzqP4x98_IP5tCwVcpT70rXWtL-lRXDgMVctaxy3g31I2Ocvf5ZLv8v7RmCpPcS772lOqtGineG7fTVwtrWjcjwdVXMaatxM0-Ta8rL7Djf1CwU",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaY_o5mvi7BAIQlLkBXBHAKt0tLfYN7krnX4lxyIkQdP1kdPEQXG5Z5mvpPPawi45VURohr8eyvER8ER4WsZYQwWkPvPbDGnzIBFbzi0LwxE2iwnEDRhPADf5BfPGkwiaYrEtrAEgxVPbQgO72zrRdWOoxl5fQFzqP4x98_IP5tCwVcpT70rXWtL-lRXDgMVctaxy3g31I2Ocvf5ZLv8v7RmCpPcS772lOqtGineG7fTVwtrWjcjwdVXMaatxM0-Ta8rL7Djf1CwU",
    accentColor: "text-secondary",
    tags: ["Node.js", "WebGL", "D3.js", "AWS"],
    year: "2024",
    status: "Open Source",
  },
];

export const MAX_HOMEPAGE_PROJECTS = 6;
