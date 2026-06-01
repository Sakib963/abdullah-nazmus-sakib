import { projects } from "@/components/projects/projectData";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description:
    "Projects by Abdullah Nazmus Sakib — full-stack engineer specializing in Angular, Next.js, and Node.js. Inventory systems, APIs, and developer tools.",
  keywords: [
    "Abdullah Nazmus Sakib projects",
    "Angular projects",
    "Next.js projects",
    "Full Stack Developer",
    "StockFlow",
    "DevTerms",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Abdullah Nazmus Sakib",
    description: "Full-stack projects across web apps, inventory systems, and APIs.",
    url: "/projects",
    type: "website",
  },
};

const SITE_URL = "https://www.sakib.app";

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Abdullah Nazmus Sakib",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.title,
      description: p.description,
      applicationCategory: "WebApplication",
      url: p.liveUrl,
      codeRepository: p.gitUrl,
      keywords: p.tags.join(", "),
      datePublished: p.year,
      author: { "@type": "Person", name: "Abdullah Nazmus Sakib", url: SITE_URL },
    },
  })),
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 pt-36 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-headline">
            All <span className="text-primary text-glow">Projects</span>
          </h1>
          <p className="text-on-surface-variant mt-2 text-sm font-body max-w-md">
            {projects.length} projects. No progress bars, no made-up percentages.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
