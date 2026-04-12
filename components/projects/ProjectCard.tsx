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
  tags,
  index,
}: Project & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() { x.set(0); y.set(0); }

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: (index % 2) * 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
    });
    return () => { ScrollTrigger.getAll().forEach((st) => { if (st.vars.trigger === card) st.kill(); }); };
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel rounded-2xl overflow-hidden border-white/5 glass-card-hover group flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        {/* Label badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 glass-panel rounded-full border-white/10 ${accentColor}`}>
            {label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-base font-bold text-white tracking-tight font-headline leading-tight">
          {title}
        </h3>
        <p className="text-on-surface-variant text-xs leading-relaxed font-body line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map((tag) => <TagPill key={tag} label={tag} />)}
        </div>

        <a
          href={href}
          className={`inline-flex items-center gap-1.5 text-xs font-bold font-headline mt-1 ${accentColor} hover:gap-2.5 transition-all group/link w-fit`}
        >
          View Project
          <span className="material-symbols-outlined text-[16px] group-hover/link:text-glow">arrow_forward</span>
        </a>
      </div>
    </motion.div>
  );
}
