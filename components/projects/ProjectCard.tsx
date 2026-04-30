"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, TagPill, BrandIcon } from "@/components/ui";
import type { Project } from "./projectData";

const statusStyle: Record<Project["status"], string> = {
  Production:      "text-emerald-400 border-emerald-400/25 bg-emerald-400/10",
  "Open Source":   "text-primary border-primary/25 bg-primary/10",
  "In Development":"text-amber-400 border-amber-400/25 bg-amber-400/10",
  Archived:        "text-on-surface-variant border-black/[0.08] dark:border-white/10 bg-black/[0.04] dark:bg-white/5",
};

export default function ProjectCard({
  label,
  title,
  description,
  gitUrl,
  liveUrl,
  image,
  accentColor,
  tags,
  year,
  status,
  index,
}: Project & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 180, damping: 28 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() { x.set(0); y.set(0); }

  return (
    <ScrollReveal direction="up" delay={index * 0.1} amount={0.1}>
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-panel rounded-2xl overflow-hidden glass-card-hover group flex flex-col h-full"
      >
        {/* Image with overlay gradient */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 glass-panel rounded-full ${accentColor}`}>
              {label}
            </span>
            <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border ${statusStyle[status]}`}>
              {status}
            </span>
          </div>

          {/* Year — bottom right of image */}
          <span className="absolute bottom-3 right-3 text-[10px] font-label text-on-surface-variant/60 glass-panel px-2 py-0.5 rounded-full">
            {year}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className={`text-base font-bold tracking-tight font-headline leading-tight group-hover:${accentColor} transition-colors text-on-surface`}>
            {title}
          </h3>

          <p className="text-on-surface-variant text-xs leading-relaxed font-body line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {tags.map((tag) => <TagPill key={tag} label={tag} />)}
          </div>

          {/* Action row */}
          <div className="flex items-center gap-2 pt-2 border-t border-black/[0.06] dark:border-white/5">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 glass-panel rounded-xl hover:border-black/20 dark:hover:border-white/25 hover:bg-black/[0.06] dark:hover:bg-white/5 transition-all text-[11px] font-bold font-headline text-on-surface-variant hover:text-on-surface dark:hover:text-white group/btn"
            >
              <BrandIcon name="github" className="w-3.5 h-3.5 group-hover/btn:text-primary transition-colors" />
              GitHub
            </Link>
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 glass-panel rounded-xl hover:border-primary/30 hover:bg-primary/10 transition-all text-[11px] font-bold font-headline text-on-surface-variant hover:text-primary group/btn`}
            >
              <span className="material-symbols-outlined text-[15px] group-hover/btn:rotate-45 transition-transform">open_in_new</span>
              Live Site
            </Link>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
