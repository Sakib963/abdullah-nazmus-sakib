export interface Reflection {
  id: number;
  comment: string;
  name: string;
  designation: string;
  company: string;
  photo?: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
}

export const reflections: Reflection[] = [
  {
    id: 1,
    comment:
      "Sakib has this rare quality of making complex things feel simple. He'd take a vague requirement, ask two sharp questions, and come back with exactly what was needed — sometimes better than what we'd imagined.",
    name: "Aryan Chowdhury",
    designation: "Product Manager",
    company: "Celloscope Ltd",
    initials: "AC",
    avatarBg: "bg-primary/15",
    avatarText: "text-primary",
  },
  {
    id: 2,
    comment:
      "The kind of engineer you actually want reviewing your code. He doesn't just spot the bug — he quietly explains why it was a bug and what a better pattern looks like. No ego, just craft.",
    name: "Nadia Rahman",
    designation: "Senior Frontend Engineer",
    company: "Celloscope Ltd",
    initials: "NR",
    avatarBg: "bg-secondary/15",
    avatarText: "text-secondary",
  },
  {
    id: 3,
    comment:
      "I dropped a production issue on him at 5:45 PM on a Friday. He fixed it, wrote a post-mortem, and pushed a prevention patch — all before I finished typing the Slack message. I still owe him a coffee.",
    name: "Tariq Islam",
    designation: "Engineering Lead",
    company: "Celloscope Ltd",
    initials: "TI",
    avatarBg: "bg-tertiary/15",
    avatarText: "text-tertiary",
  },
  {
    id: 4,
    comment:
      "What stood out most was his attention to how things felt, not just how they worked. He cared about the experience, the loading state, the micro-interaction. That level of care is not common in full-stack engineers.",
    name: "Samira Hossain",
    designation: "UX Designer",
    company: "Freelance",
    initials: "SH",
    avatarBg: "bg-primary/15",
    avatarText: "text-primary",
  },
  {
    id: 5,
    comment:
      "Sakib writes code that reads like documentation. Six months after he shipped a feature and moved on, a junior dev onboarded, read through it, and needed zero hand-holding. That says everything.",
    name: "Mehedi Hasan",
    designation: "Tech Lead",
    company: "Celloscope Ltd",
    initials: "MH",
    avatarBg: "bg-secondary/15",
    avatarText: "text-secondary",
  },
];
