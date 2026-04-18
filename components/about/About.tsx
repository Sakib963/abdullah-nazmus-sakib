"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { AnimatedBlob, SectionHeading } from "@/components/ui";
import StatCard from "./StatCard";
import EducationSection from "./Education";
import ExperienceSection from "./Experience";

const stats = [
  {
    value: "02+",
    label: "Years of Mastery",
    sub: "Enterprise, fintech, and government systems.",
    accentColor: "text-primary",
    glowColor: "bg-primary",
  },
  {
    value: "10+",
    label: "Projects",
    sub: "From side tools to production-grade platforms.",
    accentColor: "text-secondary",
    glowColor: "bg-secondary",
  },
  {
    value: "2+",
    label: "Global Alliances",
    sub: "Collaborating with visionary clients worldwide.",
    accentColor: "text-tertiary",
    glowColor: "bg-tertiary",
  },
];

export default function About() {
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
    <section id="About" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <AnimatedBlob color="bg-secondary" size="w-[400px] h-[400px]" position="bottom-0 -right-[8%]" duration={11} />
      <AnimatedBlob color="bg-primary" size="w-[250px] h-[250px]" position="top-[20%] -left-[5%]" duration={8} delay={1.5} />

      <div className="max-w-6xl mx-auto relative z-10 space-y-14">

        {/* Heading */}
        <div ref={headingRef}>
          <SectionHeading
            pre="About"
            accent="Me"
            accentClassName="text-secondary"
            subtitle="Software engineer with 2+ years building scalable web systems, clean APIs, and interfaces people actually enjoy using."
            dividerColor="from-secondary"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <EducationSection />
          <ExperienceSection />
        </div>

      </div>
    </section>
  );
}
