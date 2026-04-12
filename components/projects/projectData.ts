export interface Project {
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
  image: string;
  accentColor: string;
  glowColor: string;
  tags: string[];
  reverse?: boolean;
}

export const projects: Project[] = [
  {
    id: "nexus",
    label: "Project Alpha",
    title: "Nexus Protocol",
    description:
      "A decentralized ecosystem designed for fluidity. We reimagined the asset management interface from the ground up, focusing on biological motion and intuitive flows.",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6TUtZVp3iHM1pf6CkURYEKcvYiK7aIC6_GurXGKZuOrPI6E9a6dGLCkzbb-6znTVZW-5HBdDzKSLjidzooMWawcjOqYB2tWI8ZjqgWgnSGjtbZFHEGrhPADf5BfPGkwiaYrEtrAEgxVPbQgO72zrRdWOoxl5fQFzqP4x98_IP5tCwVcpT70rXWtL-lRXDgMVctaxy3g31I2Ocvf5ZLv8v7RmCpPcS772lOqtGineG7fTVwtrWjcjwdVXMaatxM0-Ta8rL7Djf1CwU",
    accentColor: "text-primary",
    glowColor: "bg-primary/5",
    tags: ["React", "Next.js", "Web3", "Motion"],
    reverse: false,
  },
  {
    id: "aether",
    label: "Project Beta",
    title: "Aether Engine",
    description:
      "Visualizing the invisible. Aether Engine translates complex GPU cluster data into a poetic dashboard of light and motion for global infrastructure monitoring.",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaY_o5mvi7BAIQlLkBXBHAKt0tLfYN7krnX4lxyIkQdP1kdPEQXG5Z5mvpPPawi45VURohr8eyvER8ER4WsZYQwWkPvPbDGnzIBFbzi0LwxE2iwnEDFX2DRJnf3CApLadV8scX38AWoO0rBR-aMcCfG1WYduEUeVK7Qy7zcaajbNtegC_pxwmzFrPnbDwowng8BChATJXbVWTRbphN1lyo8Y8nzVy8Ekk5DU--mcp1zJTZ5TjgMFi7RwB03wcK_N8_zup0b55cD4Ex",
    accentColor: "text-secondary",
    glowColor: "bg-secondary/5",
    tags: ["Node.js", "WebGL", "D3.js", "AWS"],
    reverse: true,
  },
];
