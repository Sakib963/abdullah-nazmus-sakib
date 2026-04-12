"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import StatCard from "./StatCard";

const stats = [
  {
    value: "05+",
    label: "Years of Mastery",
    sub: "Refining the craft across diverse industries and technologies.",
    accentColor: "text-primary",
    glowColor: "bg-primary",
  },
  {
    value: "120+",
    label: "Realized Visions",
    sub: "From startup MVPs to enterprise-grade cloud ecosystems.",
    accentColor: "text-secondary",
    glowColor: "bg-secondary",
  },
  {
    value: "40+",
    label: "Global Alliances",
    sub: "Collaborating with visionary clients around the world.",
    accentColor: "text-tertiary",
    glowColor: "bg-tertiary",
  },
];

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(textRef.current?.children ?? [], {
        opacity: 0,
        y: 24,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="About" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="section-bg-blob bg-secondary w-[400px] h-[400px] bottom-0 -right-[8%]" />
      <div className="section-bg-blob bg-primary w-[250px] h-[250px] top-[20%] -left-[5%]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col gap-14">

          {/* Text block */}
          <div className="max-w-2xl">
            <div ref={headingRef}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight font-headline">
                Genesis of{" "}
                <span className="text-secondary italic">Innovation</span>
              </h2>
            </div>

            <div ref={textRef} className="space-y-5 text-on-surface-variant leading-relaxed text-sm md:text-base font-body">
              <p className="border-l-2 border-secondary/40 pl-5">
                In the vast expanse of the digital void, I find order in chaos.
                My approach is simple: create systems that breathe and
                interfaces that feel alive.
              </p>
              <p>
                With half a decade spent in the trenches of full-stack
                engineering, I've learned that the most complex solutions are
                often the ones that feel the most invisible to the user.
              </p>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
