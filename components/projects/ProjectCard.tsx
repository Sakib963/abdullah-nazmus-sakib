"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Project } from "./projectData";
import { TagPill } from "@/components/ui";

export default function ProjectCard({
  label,
  title,
  description,
  href,
  image,
  accentColor,
  glowColor,
  tags,
  reverse,
  index,
}: Project & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle 3-D tilt on hover
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === card) st.kill();
      });
    };
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel rounded-2xl overflow-hidden border-white/5 glass-card-hover group relative"
    >
      {/* Hover glow orb */}
      <div
        className={`absolute -z-10 w-48 h-48 ${glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${
          reverse ? "-bottom-10 -left-10" : "-top-10 -right-10"
        }`}
      />

      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} h-full`}>
        {/* Image */}
        <div className="w-full md:w-3/5 h-52 md:h-72 relative overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 ${
              reverse
                ? "bg-gradient-to-l from-surface/80 to-transparent"
                : "bg-gradient-to-r from-surface/80 to-transparent"
            } hidden md:block`}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center gap-3">
          <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${accentColor}`}>
            {label}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-headline leading-tight">
            {title}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed font-body">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          {/* Link */}
          <a
            href={href}
            className={`inline-flex items-center gap-2 text-sm font-bold font-headline mt-2 ${accentColor} hover:gap-3 transition-all group/link w-fit`}
          >
            Deep Dive
            <span className="material-symbols-outlined text-[18px] group-hover/link:text-glow">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
