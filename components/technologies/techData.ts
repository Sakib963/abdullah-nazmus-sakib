export interface Tech {
  name: string;
  category: string;
  color: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
  abbr: string;
  siIcon?: string; // react-icons/si key e.g. "SiAngular"
}

export const techs: Tech[] = [
  // Language
  { name: "JavaScript",    category: "Language", color: "#F7DF1E", textColor: "text-[#F7DF1E]", borderColor: "border-[#F7DF1E]/20", glowColor: "shadow-[0_0_20px_rgba(247,223,30,0.3)]",  abbr: "JS",  siIcon: "SiJavascript" },
  { name: "TypeScript",    category: "Language", color: "#3178C6", textColor: "text-[#3178C6]", borderColor: "border-[#3178C6]/30", glowColor: "shadow-[0_0_20px_rgba(49,120,198,0.3)]",  abbr: "TS",  siIcon: "SiTypescript" },
  { name: "Python",        category: "Language", color: "#3776AB", textColor: "text-[#3776AB]", borderColor: "border-[#3776AB]/30", glowColor: "shadow-[0_0_20px_rgba(55,118,171,0.3)]",  abbr: "Py",  siIcon: "SiPython" },

  // Frontend
  { name: "Angular",       category: "Frontend", color: "#DD0031", textColor: "text-[#DD0031]", borderColor: "border-[#DD0031]/25", glowColor: "shadow-[0_0_20px_rgba(221,0,49,0.3)]",    abbr: "Ng",  siIcon: "SiAngular" },
  { name: "React",         category: "Frontend", color: "#61DAFB", textColor: "text-[#61DAFB]", borderColor: "border-[#61DAFB]/25", glowColor: "shadow-[0_0_20px_rgba(97,218,251,0.3)]",  abbr: "Re",  siIcon: "SiReact" },
  { name: "Next.js",       category: "Frontend", color: "#FFFFFF", textColor: "text-white",      borderColor: "border-white/20",     glowColor: "shadow-[0_0_20px_rgba(255,255,255,0.15)]", abbr: "Nx",  siIcon: "SiNextdotjs" },
  { name: "Nuxt",          category: "Frontend", color: "#42B883", textColor: "text-[#42B883]", borderColor: "border-[#42B883]/25", glowColor: "shadow-[0_0_20px_rgba(66,184,131,0.3)]",  abbr: "Nt",  siIcon: "SiNuxt" },
  { name: "Tailwind",      category: "Frontend", color: "#06B6D4", textColor: "text-[#06B6D4]", borderColor: "border-[#06B6D4]/25", glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",   abbr: "TW",  siIcon: "SiTailwindcss" },

  // Backend
  { name: "Node.js",       category: "Backend",  color: "#339933", textColor: "text-[#339933]", borderColor: "border-[#339933]/30", glowColor: "shadow-[0_0_20px_rgba(51,153,51,0.3)]",   abbr: "No",  siIcon: "SiNodedotjs" },
  { name: "Hapi.js",       category: "Backend",  color: "#EF8C2A", textColor: "text-[#EF8C2A]", borderColor: "border-[#EF8C2A]/25", glowColor: "shadow-[0_0_20px_rgba(239,140,42,0.3)]",  abbr: "Hp",  siIcon: "SiHapi" },
  { name: "Express",       category: "Backend",  color: "#ABABAB", textColor: "text-[#ABABAB]", borderColor: "border-[#ABABAB]/20", glowColor: "shadow-[0_0_20px_rgba(171,171,171,0.2)]", abbr: "Ex",  siIcon: "SiExpress" },
  { name: "Socket.io",     category: "Backend",  color: "#666666", textColor: "text-[#666666] dark:text-white", borderColor: "border-[#666666]/25 dark:border-white/20", glowColor: "shadow-[0_0_20px_rgba(102,102,102,0.25)]", abbr: "Sk",  siIcon: "SiSocketdotio" },

  // Database
  { name: "PostgreSQL",    category: "Database", color: "#4169E1", textColor: "text-[#4169E1]", borderColor: "border-[#4169E1]/25", glowColor: "shadow-[0_0_20px_rgba(65,105,225,0.3)]",  abbr: "Pg",  siIcon: "SiPostgresql" },
  { name: "MongoDB",       category: "Database", color: "#47A248", textColor: "text-[#47A248]", borderColor: "border-[#47A248]/30", glowColor: "shadow-[0_0_20px_rgba(71,162,72,0.3)]",   abbr: "Mg",  siIcon: "SiMongodb" },
  { name: "Oracle",        category: "Database", color: "#F80000", textColor: "text-[#F80000]", borderColor: "border-[#F80000]/20", glowColor: "shadow-[0_0_20px_rgba(248,0,0,0.25)]",    abbr: "Or",  siIcon: undefined },
  { name: "Redis",         category: "Database", color: "#DC382D", textColor: "text-[#DC382D]", borderColor: "border-[#DC382D]/25", glowColor: "shadow-[0_0_20px_rgba(220,56,45,0.3)]",   abbr: "Rd",  siIcon: "SiRedis" },
  { name: "Firebase",      category: "Database", color: "#FFCA28", textColor: "text-[#FFCA28]", borderColor: "border-[#FFCA28]/20", glowColor: "shadow-[0_0_20px_rgba(255,202,40,0.3)]",  abbr: "Fb",  siIcon: "SiFirebase" },

  // DevOps
  { name: "Git",           category: "DevOps",   color: "#F05032", textColor: "text-[#F05032]", borderColor: "border-[#F05032]/25", glowColor: "shadow-[0_0_20px_rgba(240,80,50,0.3)]",   abbr: "Git", siIcon: "SiGit" },
  { name: "Docker",        category: "DevOps",   color: "#2496ED", textColor: "text-[#2496ED]", borderColor: "border-[#2496ED]/25", glowColor: "shadow-[0_0_20px_rgba(36,150,237,0.3)]",  abbr: "Dk",  siIcon: "SiDocker" },
  { name: "Vercel",        category: "DevOps",   color: "#666666", textColor: "text-[#666666] dark:text-white", borderColor: "border-[#666666]/25 dark:border-white/20", glowColor: "shadow-[0_0_20px_rgba(102,102,102,0.25)]", abbr: "▲",   siIcon: "SiVercel" },

  // Tools
  { name: "Postman",       category: "Tools",    color: "#FF6C37", textColor: "text-[#FF6C37]", borderColor: "border-[#FF6C37]/25", glowColor: "shadow-[0_0_20px_rgba(255,108,55,0.3)]",  abbr: "Pm",  siIcon: "SiPostman" },
  { name: "Cypress",       category: "Tools",    color: "#17D19B", textColor: "text-[#17D19B]", borderColor: "border-[#17D19B]/25", glowColor: "shadow-[0_0_20px_rgba(23,209,155,0.3)]",  abbr: "Cy",  siIcon: "SiCypress" },
  { name: "DBeaver",       category: "Tools",    color: "#5B6EAE", textColor: "text-[#5B6EAE]", borderColor: "border-[#5B6EAE]/30", glowColor: "shadow-[0_0_20px_rgba(91,110,174,0.3)]",  abbr: "DB",  siIcon: undefined },
  { name: "Jasper Report", category: "Tools",    color: "#1DAADD", textColor: "text-[#1DAADD]", borderColor: "border-[#1DAADD]/25", glowColor: "shadow-[0_0_20px_rgba(29,170,221,0.3)]",  abbr: "Jr",  siIcon: undefined },

  // Design
  { name: "Figma",         category: "Design",   color: "#F24E1E", textColor: "text-[#F24E1E]", borderColor: "border-[#F24E1E]/25", glowColor: "shadow-[0_0_20px_rgba(242,78,30,0.3)]",   abbr: "Fig", siIcon: "SiFigma" },
];

export const categories = ["All", "Language", "Frontend", "Backend", "Database", "DevOps", "Tools", "Design"];
