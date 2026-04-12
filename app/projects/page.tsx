import { projects } from "@/components/projects/projectData";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "All projects by Abdullah Nazmus Sakib — full-stack engineer specialising in Angular, Next.js, and Node.js.",
  openGraph: {
    title: "Projects | Abdullah Nazmus Sakib",
    description: "Full-stack projects across web apps, dashboards, and APIs.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 pt-36 pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-headline">
            All <span className="text-primary text-glow">Projects</span>
          </h1>
          <p className="text-on-surface-variant mt-2 text-sm font-body max-w-md">
            {projects.length} projects — a complete archive.
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
