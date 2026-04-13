"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Container: 380px md. Image inset-16 = 64px from each side → image at x:64–316, y:64–316.
// Align chip RIGHT edges to x≈64 (left chips) and chip LEFT edges to x≈316 (right chips).
// right:"83%" → chip right edge lands at 17% of 380 ≈ 65px (image left edge) ✓
// left:"83%"  → chip left edge lands at 83% of 380 ≈ 315px (image right edge) ✓
const CHIPS = [
  // ── Left side ──
  { label: "Angular",    color: "rgba(221,0,49,0.18)",    border: "rgba(221,0,49,0.4)",    text: "#ff6b8a", side: "left",  top: "22%", dur: 4.8, delay: 0   },
  { label: "TypeScript", color: "rgba(49,120,198,0.18)",  border: "rgba(49,120,198,0.4)",  text: "#6ab0f5", side: "left",  top: "60%", dur: 5.6, delay: 1.2 },
  // ── Right side ──
  { label: "Next.js",    color: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.2)", text: "#e8e8e8", side: "right", top: "12%", dur: 5.2, delay: 0.5 },
  { label: "Node.js",    color: "rgba(104,184,104,0.15)", border: "rgba(104,184,104,0.4)", text: "#7bcf7b", side: "right", top: "42%", dur: 4.4, delay: 1.8 },
  { label: "PostgreSQL", color: "rgba(51,103,145,0.18)",  border: "rgba(51,103,145,0.4)",  text: "#5ba3d9", side: "right", top: "70%", dur: 6.0, delay: 0.9 },
];

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative w-64 h-64 md:w-[380px] md:h-[380px]">

        {/* Ambient glows */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-full bg-primary/20 blur-3xl z-0"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-8 rounded-full bg-secondary/15 blur-2xl z-0"
        />

        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-6 rounded-full border border-primary/15 animate-[spin_40s_linear_infinite_reverse]" />

        {/* Profile image */}
        <div className="absolute inset-14 md:inset-16 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(199,185,245,0.25)] z-10 bg-surface">
          <Image
            src="/abdullah_nazmus_sakib.png"
            alt="Abdullah Nazmus Sakib"
            fill
            sizes="(max-width: 768px) 160px, 220px"
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>

        {/* Floating chips */}
        {CHIPS.map((chip, i) => (
          <motion.div
            key={i}
            className="absolute z-20"
            style={{
              top:   chip.top,
              right: chip.side === "left"  ? "83%" : undefined,
              left:  chip.side === "right" ? "83%" : undefined,
              willChange: "transform",
            }}
            animate={{ y: [0, -9] }}
            transition={{
              duration: chip.dur,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: chip.delay,
            }}
          >
            <div
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                background: chip.color,
                border: `1px solid ${chip.border}`,
                boxShadow: "0 0 16px rgba(199,185,245,0.08), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
              className="flex items-center px-2.5 py-1.5 rounded-full whitespace-nowrap"
            >
              <span
                style={{ color: chip.text }}
                className="text-[11px] font-bold font-headline leading-none"
              >
                {chip.label}
              </span>
            </div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}
