export interface Education {
  degree: string;
  institution: string;
  period: string;
  icon: string;
  detail?: string;
}

export interface Role {
  title: string;
  period: string;
  location?: string;
  mode?: string;
  description?: string;
  skills: string[];
  current?: boolean;
}

export interface Experience {
  company: string;
  type: string;
  roles: Role[];
}

export const education: Education[] = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    period: "2018 – 2022",
    detail: "CGPA 3.39 / 4.00",
    icon: "school",
  },
  {
    degree: "Complete Web Development",
    institution: "Programming Hero",
    period: "Jan 2023 – Jun 2023",
    icon: "terminal",
  },
  {
    degree: "The Complete JavaScript Course",
    institution: "Udemy",
    period: "Dec 2022",
    icon: "play_circle",
  },
  {
    degree: "Alim (HSC Equivalent)",
    institution: "Madinatul Ulum Kamil Madrasah",
    period: "2017",
    icon: "menu_book",
  },
];

export const experiences: Experience[] = [
  {
    company: "Celloscope Limited",
    type: "Full-time",
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2025 – Present",
        location: "Dhaka, Bangladesh",
        mode: "On-site",
        skills: ["Angular", "TypeScript", "Node.js", "Hapi.js", "PostgreSQL"],
        current: true,
      },
      {
        title: "Junior Software Engineer",
        period: "Sep 2023 – Jun 2025",
        location: "Dhaka, Bangladesh",
        mode: "On-site",
        description:
          "Built and maintained web applications using Angular, Node.js, and PostgreSQL. Developed new features, resolved bugs, improved performance, and focused on clean, maintainable code.",
        skills: ["Angular", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
      },
    ],
  },
  {
    company: "Ovigo",
    type: "Full-time",
    roles: [
      {
        title: "Junior MERN Stack Developer",
        period: "Jun 2023 – Aug 2023",
        location: "Dhaka, Bangladesh",
        mode: "Hybrid",
        skills: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript"],
      },
    ],
  },
];
