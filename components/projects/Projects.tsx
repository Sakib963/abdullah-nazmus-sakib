"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects, MAX_HOMEPAGE_PROJECTS } from "./projectData";
import ProjectCard from "./ProjectCard";
import { AnimatedBlob, SectionHeading } from "@/components/ui";

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const visible = projects.slice(0, MAX_HOMEPAGE_PROJECTS);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0, y: 28, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="Projects" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <AnimatedBlob color="bg-tertiary" size="w-[400px] h-[400px]" position="top-[15%] -left-[8%]" duration={14} />
      <AnimatedBlob color="bg-primary" size="w-[250px] h-[250px]" position="bottom-[10%] -right-[4%]" duration={9} delay={2.5} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <SectionHeading
            pre="Living"
            accent="Artifacts"
            accentClassName="text-primary text-glow"
            subtitle="Selected work across full-stack engineering, dashboards, and digital ecosystems."
            dividerColor="from-primary"
            centered={false}
          />
          <a
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 glass-panel text-xs text-on-surface-variant hover:text-white border-white/10 rounded-full hover:bg-white/5 transition-all font-headline shrink-0"
          >
            View All
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>

        {/* Show count hint if more exist */}
        {projects.length > MAX_HOMEPAGE_PROJECTS && (
          <p className="text-center text-xs text-on-surface-variant mt-8 font-label">
            Showing {visible.length} of {projects.length} projects.{" "}
            <a href="/projects" className="text-primary hover:underline">See all →</a>
          </p>
        )}
      </div>
    </section>
  );
}
