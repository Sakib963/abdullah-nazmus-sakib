export interface Tech {
  name: string;
  category: string;
  color: string;       // brand hex — used for glow + accent
  textColor: string;   // tailwind arbitrary text color
  borderColor: string; // tailwind arbitrary border color
  glowColor: string;   // tailwind arbitrary shadow
  abbr: string;        // short label shown as the "icon"
}

export const techs: Tech[] = [
  // Languages
  { name: "JavaScript", category: "Language", color: "#F7DF1E", textColor: "text-[#F7DF1E]", borderColor: "border-[#F7DF1E]/20", glowColor: "shadow-[0_0_20px_rgba(247,223,30,0.3)]", abbr: "JS" },
  { name: "TypeScript", category: "Language", color: "#3178C6", textColor: "text-[#3178C6]", borderColor: "border-[#3178C6]/30", glowColor: "shadow-[0_0_20px_rgba(49,120,198,0.3)]", abbr: "TS" },
  { name: "Python",     category: "Language", color: "#3776AB", textColor: "text-[#3776AB]", borderColor: "border-[#3776AB]/30", glowColor: "shadow-[0_0_20px_rgba(55,118,171,0.3)]", abbr: "Py" },

  // Frontend
  { name: "React",      category: "Frontend", color: "#61DAFB", textColor: "text-[#61DAFB]", borderColor: "border-[#61DAFB]/25", glowColor: "shadow-[0_0_20px_rgba(97,218,251,0.3)]", abbr: "Re" },
  { name: "Next.js",    category: "Frontend", color: "#FFFFFF", textColor: "text-white",      borderColor: "border-white/20",      glowColor: "shadow-[0_0_20px_rgba(255,255,255,0.15)]", abbr: "Nx" },
  { name: "Tailwind",   category: "Frontend", color: "#06B6D4", textColor: "text-[#06B6D4]", borderColor: "border-[#06B6D4]/25", glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.3)]", abbr: "TW" },

  // Backend
  { name: "Node.js",    category: "Backend",  color: "#339933", textColor: "text-[#339933]", borderColor: "border-[#339933]/30", glowColor: "shadow-[0_0_20px_rgba(51,153,51,0.3)]",  abbr: "No" },
  { name: "Express",    category: "Backend",  color: "#ABABAB", textColor: "text-[#ABABAB]", borderColor: "border-[#ABABAB]/20", glowColor: "shadow-[0_0_20px_rgba(171,171,171,0.2)]", abbr: "Ex" },
  { name: "FastAPI",    category: "Backend",  color: "#009688", textColor: "text-[#009688]", borderColor: "border-[#009688]/30", glowColor: "shadow-[0_0_20px_rgba(0,150,136,0.3)]",  abbr: "FA" },
  { name: "GraphQL",    category: "Backend",  color: "#E10098", textColor: "text-[#E10098]", borderColor: "border-[#E10098]/25", glowColor: "shadow-[0_0_20px_rgba(225,0,152,0.3)]",  abbr: "GQ" },

  // Database
  { name: "MongoDB",    category: "Database", color: "#47A248", textColor: "text-[#47A248]", borderColor: "border-[#47A248]/30", glowColor: "shadow-[0_0_20px_rgba(71,162,72,0.3)]",  abbr: "Mg" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1", textColor: "text-[#4169E1]", borderColor: "border-[#4169E1]/25", glowColor: "shadow-[0_0_20px_rgba(65,105,225,0.3)]", abbr: "Pg" },
  { name: "Redis",      category: "Database", color: "#DC382D", textColor: "text-[#DC382D]", borderColor: "border-[#DC382D]/25", glowColor: "shadow-[0_0_20px_rgba(220,56,45,0.3)]",  abbr: "Rd" },

  // DevOps / Cloud
  { name: "Docker",     category: "DevOps",   color: "#2496ED", textColor: "text-[#2496ED]", borderColor: "border-[#2496ED]/25", glowColor: "shadow-[0_0_20px_rgba(36,150,237,0.3)]", abbr: "Dk" },
  { name: "AWS",        category: "DevOps",   color: "#FF9900", textColor: "text-[#FF9900]", borderColor: "border-[#FF9900]/25", glowColor: "shadow-[0_0_20px_rgba(255,153,0,0.3)]",  abbr: "AWS" },
  { name: "Git",        category: "DevOps",   color: "#F05032", textColor: "text-[#F05032]", borderColor: "border-[#F05032]/25", glowColor: "shadow-[0_0_20px_rgba(240,80,50,0.3)]",  abbr: "Git" },
  { name: "Vercel",     category: "DevOps",   color: "#FFFFFF", textColor: "text-white",      borderColor: "border-white/20",      glowColor: "shadow-[0_0_20px_rgba(255,255,255,0.15)]", abbr: "▲" },

  // Design
  { name: "Figma",      category: "Design",   color: "#F24E1E", textColor: "text-[#F24E1E]", borderColor: "border-[#F24E1E]/25", glowColor: "shadow-[0_0_20px_rgba(242,78,30,0.3)]",  abbr: "Fig" },
];

export const categories = ["All", "Language", "Frontend", "Backend", "Database", "DevOps", "Design"];
