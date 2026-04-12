"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { featuredSkills, skillGroups } from "./skillData";
import SkillRadial from "./SkillRadial";
import SkillBar from "./SkillBar";

const accentMap = ["text-primary", "text-secondary", "text-tertiary"];

export default function Skills() {
  const headingRef = useRef<HTMLDivElement>(null);
  const radialsRef = useRef<HTMLDivElement>(null);

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
    <section id="Skills" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="section-bg-blob bg-primary w-[300px] h-[300px] top-[5%] -right-[4%]" />
      <div className="section-bg-blob bg-tertiary w-[250px] h-[250px] bottom-[10%] -left-[4%]" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-14">

        {/* Heading */}
        <div ref={headingRef} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 font-headline">
            Skill <span className="text-tertiary">Matrix</span>
          </h2>
          <p className="text-on-surface-variant text-sm max-w-md mx-auto font-body">
            Proficiency across the full stack — from pixel-perfect UI to cloud infrastructure.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-tertiary to-transparent mx-auto rounded-full mt-3" />
        </div>

        {/* Featured radial indicators */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 border-white/5">
          <p className="text-[11px] uppercase tracking-widest text-on-surface-variant font-label mb-6 text-center">
            Core Proficiencies
          </p>
          <div
            ref={radialsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center"
          >
            {featuredSkills.map((skill, i) => (
              <SkillRadial key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* Skill bar groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
              {/* Group header */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-7 h-7 rounded-lg glass-panel flex items-center justify-center border-white/10`}>
                  <span className={`material-symbols-outlined text-[16px] ${accentMap[gi]}`}>
                    {group.icon}
                  </span>
                </div>
                <span className={`text-xs font-bold font-label uppercase tracking-wider ${accentMap[gi]}`}>
                  {group.category}
                </span>
              </div>

              {/* Bars */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    accentClass={accentMap[gi]}
                    index={si}
                    groupIndex={gi}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
