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
    degree: "MERN Stack Bootcamp 2023",
    institution: "Udemy",
    period: "May 2023",
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
        description:
          "Rebuilt a bank's legacy internet banking portals in Angular, with config-driven tables and reports, CASL permissions and GitLab CI/CD with Docker. Before that, owned the HR and employee self-service modules of a 12-module system for a government regulator.",
        skills: ["Angular", "TypeScript", "Node.js", "Hapi.js", "PostgreSQL", "Docker"],
        current: true,
      },
      {
        title: "Junior Software Engineer",
        period: "Sep 2023 – Jun 2025",
        location: "Dhaka, Bangladesh",
        mode: "On-site",
        description:
          "Worked on government systems: an office management system for a regulator, a customs advance-ruling e-filing system that passed UAT, and a microfinance system where I ported a service from Java to Node.js and made it run on both Oracle and PostgreSQL.",
        skills: ["Angular", "TypeScript", "Node.js", "Hapi.js", "PostgreSQL", "Oracle"],
      },
    ],
  },
];
