"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects } from "./projectData";
import ProjectCard from "./ProjectCard";
import { SectionBlob } from "@/components/ui";

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Projects" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <SectionBlob color="bg-tertiary" size="w-[400px] h-[400px]" position="top-[15%] -left-[8%]" />
      <SectionBlob color="bg-primary" size="w-[250px] h-[250px]" position="bottom-[10%] -right-[4%]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading row */}
        <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-headline">
              Living{" "}
              <span className="text-primary text-glow">Artifacts</span>
            </h2>
            <p className="text-on-surface-variant mt-2 text-sm max-w-sm font-body">
              Each project is a chapter in an ongoing exploration of digital possibility.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 glass-panel text-sm text-on-surface-variant hover:text-white border-white/10 rounded-full hover:bg-white/5 transition-all font-headline shrink-0"
          >
            View All Works
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
