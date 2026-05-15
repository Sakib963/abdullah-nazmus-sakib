export interface Reflection {
  id: number;
  comment: string;
  name: string;
  designation: string;
  company: string;
  /** True if the person is no longer at the listed company. */
  formerly?: boolean;
  photo: string | null;
  initials: string;
}

export const reflections: Reflection[] = [
  {
    id: 1,
    comment:
      "Sakib is someone who brings both reliability and clarity to a team. He communicates well, takes ownership of his work, and consistently delivers with attention to detail. Working with him made collaboration smooth and productive.",
    name: "Md Sohel Rana",
    designation: "Senior Software Engineer & Team Lead",
    company: "Celloscope Ltd.",
    photo: "/reflections/sohel-rana.png",
    initials: "SR",
  },
  {
    id: 2,
    comment:
      "From my experience as part of HR, Sakib comes across as a composed and efficient professional. He maintains a good work-life balance while ensuring tasks are completed smoothly and on time. A dependable team member to work with.",
    name: "Shajeda Akter Shanta",
    designation: "Senior HR Executive",
    company: "Celloscope Ltd.",
    formerly: true,
    photo: null,
    initials: "SS",
  },
  {
    id: 3,
    comment:
      "You have impressive individual skills, but showing more interest in working together as a team will take your contributions to the next level. You’re already a strong developer, but with a little more focus on leadership, you’ll inspire and motivate the team even more.",
    name: "Kamruzzaman Tanim",
    designation: "Assistant Manager",
    company: "Celloscope Ltd.",
    photo: "/reflections/kamruzzaman-tanim.png",
    initials: "KT",
  },
];
