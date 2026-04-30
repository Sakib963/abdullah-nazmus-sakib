"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, TagPill } from "@/components/ui";
import type { BlogPost } from "./blogData";

export default function BlogCard({
  label,
  title,
  excerpt,
  href,
  image,
  date,
  readTime,
  views,
  accentColor,
  tags,
  index,
}: BlogPost & { index: number }) {
  const imageRight = index % 2 !== 0;

  return (
    <ScrollReveal direction="up" delay={index * 0.08} amount={0.1}>
      <Link
        href={href}
        className={`glass-panel rounded-2xl overflow-hidden glass-card-hover group flex flex-col sm:flex-row h-full ${imageRight ? "sm:flex-row-reverse" : ""}`}
      >
        {/* Image — fixed width on desktop */}
        <div className="relative h-52 sm:h-auto sm:w-72 lg:w-80 flex-shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          {/* Side fade towards content */}
          <div className={`absolute inset-0 bg-gradient-to-${imageRight ? "l" : "r"} from-transparent via-transparent to-surface/60 hidden sm:block`} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent sm:hidden" />

          {/* Label */}
          <div className="absolute top-3 left-3">
            <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 glass-panel rounded-full ${accentColor}`}>
              {label}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-3 p-6 flex-1 min-w-0">
          {/* Meta row */}
          <div className="flex items-center gap-3 text-[10px] text-on-surface-variant font-label flex-wrap">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">calendar_today</span>
              {date}
            </span>
            <span className="w-1 h-1 rounded-full bg-on-surface-variant/30" />
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">schedule</span>
              {readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-on-surface-variant/30" />
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">visibility</span>
              {views}
            </span>
          </div>

          <h3 className={`text-lg font-bold tracking-tight font-headline leading-snug text-on-surface group-hover:${accentColor} transition-colors`}>
            {title}
          </h3>

          <p className="text-on-surface-variant text-xs leading-relaxed font-body line-clamp-3">
            {excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => <TagPill key={tag} label={tag} />)}
          </div>

          <span className={`inline-flex items-center gap-1.5 text-xs font-bold font-headline ${accentColor} group-hover:gap-3 transition-all w-fit mt-1`}>
            Read Post
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
