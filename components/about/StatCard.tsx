"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface StatCardProps {
  value: string;
  label: string;
  sub: string;
  accentColor: string;
  glowColor: string;
  index: number;
}

export default function StatCard({
  value,
  label,
  sub,
  accentColor,
  glowColor,
  index,
}: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const num = numRef.current;
    if (!card || !num) return;

    // Parse numeric part for counter animation
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");

    const counter = { val: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.from(card, {
      opacity: 0,
      y: 36,
      duration: 0.6,
      delay: index * 0.12,
      ease: "power3.out",
    }).to(
      counter,
      {
        val: numericValue,
        duration: 1.4,
        ease: "power2.out",
        onUpdate: () => {
          if (num) num.textContent = Math.ceil(counter.val) + suffix;
        },
      },
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === card) st.kill();
      });
    };
  }, [value, index]);

  return (
    <div
      ref={cardRef}
      className="glass-panel p-6 md:p-8 rounded-2xl glass-card-hover group relative overflow-hidden border-white/5"
    >
      {/* Glow orb */}
      <div
        className={`absolute -right-3 -bottom-3 w-20 h-20 ${glowColor} rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500`}
      />
      <span
        ref={numRef}
        className={`text-4xl font-bold text-white mb-2 font-headline block`}
      >
        {value}
      </span>
      <p className={`text-[11px] font-label uppercase tracking-widest ${accentColor} font-bold`}>
        {label}
      </p>
      <p className="mt-3 text-on-surface-variant/80 text-xs leading-relaxed">{sub}</p>
    </div>
  );
}
