"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Service } from "./serviceData";

interface ServiceCardProps extends Service {
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export default function ServiceCard({
  icon,
  title,
  description,
  tags,
  accentColor,
  iconBg,
  tagColor,
  tagBorder,
  glowColor,
  cardRef,
}: ServiceCardProps) {
  return (
    <div
      ref={cardRef}
      className="glass-panel p-6 md:p-8 rounded-2xl glass-card-hover group relative overflow-hidden border-white/10"
    >
      {/* Large ghost icon background */}
      <div className="absolute top-0 right-0 p-6 opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-500 pointer-events-none select-none">
        <span className="material-symbols-outlined text-7xl">{icon}</span>
      </div>

      {/* Glow orb bottom */}
      <div
        className={`absolute -right-4 -bottom-4 w-24 h-24 ${glowColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />

      {/* Icon box */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}
      >
        <span className={`material-symbols-outlined ${accentColor} text-2xl`}>
          {icon}
        </span>
      </motion.div>

      <h3 className="text-lg font-bold text-white mb-3 font-headline">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-5 font-body">
        {description}
      </p>

      {/* Tag pills */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 glass-panel rounded-full border ${tagBorder} ${tagColor}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
