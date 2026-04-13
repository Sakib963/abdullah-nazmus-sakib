export interface BlogPost {
  id: string;
  label: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  date: string;
  readTime: string;
  views: string;
  accentColor: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "angular-signals",
    label: "Frontend",
    title: "Angular Signals: A Cleaner Way to Manage State",
    excerpt:
      "Angular's new Signals API fundamentally changes how we think about reactivity. Here's how I migrated a production app away from RxJS Subject chains — what broke, what improved, and why I won't go back.",
    href: "#",
    image: "https://picsum.photos/800/400?random=3",
    date: "Mar 2025",
    readTime: "6 min read",
    views: "1.8k views",
    accentColor: "text-primary",
    tags: ["Angular", "TypeScript", "State Management"],
  },
  {
    id: "postgres-indexing",
    label: "Backend",
    title: "PostgreSQL Indexing Strategies That Actually Helped",
    excerpt:
      "When a query fetching 200k rows started taking 4 seconds in production, I had to learn indexing properly. Partial indexes, composite indexes, EXPLAIN ANALYZE — a practical breakdown of what I changed and the results.",
    href: "#",
    image: "https://picsum.photos/800/400?random=4",
    date: "Feb 2025",
    readTime: "8 min read",
    views: "3.2k views",
    accentColor: "text-secondary",
    tags: ["PostgreSQL", "Performance", "Backend"],
  },
  {
    id: "nextjs-app-router",
    label: "Full Stack",
    title: "Next.js App Router: What Changed in My Workflow",
    excerpt:
      "Migrating from Pages Router to App Router wasn't just a folder rename. Server Components, nested layouts, and parallel routes completely changed how I architect frontends — here's my honest assessment after shipping a real project.",
    href: "#",
    image: "https://picsum.photos/800/400?random=5",
    date: "Jan 2025",
    readTime: "7 min read",
    views: "4.1k views",
    accentColor: "text-tertiary",
    tags: ["Next.js", "React", "Architecture"],
  },
  {
    id: "nodejs-error-handling",
    label: "Backend",
    title: "Error Handling in Node.js APIs the Right Way",
    excerpt:
      "Most Node.js tutorials skip error handling entirely. Here's the pattern I use across all Hapi.js and Express projects — centralized error classes, async wrappers, structured logging, and why it matters at scale.",
    href: "#",
    image: "https://picsum.photos/800/400?random=6",
    date: "Dec 2024",
    readTime: "5 min read",
    views: "2.6k views",
    accentColor: "text-primary",
    tags: ["Node.js", "Express", "Hapi.js"],
  },
];

export const MAX_HOMEPAGE_BLOGS = 4;
