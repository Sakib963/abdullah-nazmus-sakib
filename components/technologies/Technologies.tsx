"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motion, AnimatePresence } from "framer-motion";
import { techs, categories } from "./techData";
import TechCard from "./TechCard";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "All"
    ? techs
    : techs.filter((t) => t.category === activeCategory);

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

      gsap.from(filterRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: filterRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          opacity: 0,
          y: 32,
          scale: 0.92,
          stagger: 0.045,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Technologies" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Grid pattern accent */}
      <div className="absolute inset-0 soft-grid opacity-40 pointer-events-none" />
      <div className="section-bg-blob bg-secondary w-[350px] h-[350px] top-[5%] -left-[5%]" />
      <div className="section-bg-blob bg-tertiary w-[250px] h-[250px] bottom-[10%] -right-[4%]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 font-headline">
            Tech <span className="text-secondary">Arsenal</span>
          </h2>
          <p className="text-on-surface-variant text-sm max-w-md mx-auto font-body">
            Tools and technologies I wield to build performant, scalable systems.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent mx-auto rounded-full mt-3" />
        </div>

        {/* Category filter */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold font-label uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "glass-panel text-on-surface-variant hover:text-white border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            ref={gridRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3"
          >
            {filtered.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
