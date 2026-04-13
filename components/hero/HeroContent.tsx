"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroContent() {
  return (
    <div className="space-y-7">
      {/* Badge */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel text-secondary text-[11px] font-label tracking-widest uppercase border-white/10"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
        </span>
        The Digital Architect
      </motion.div>

      {/* Heading */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] font-headline">
          Hi, I&apos;m{" "}
          <span className="text-primary text-glow">Abdullah Nazmus Sakib</span>
        </h1>
        <div className="text-lg md:text-xl font-headline text-on-surface-variant h-7">
          <Typewriter
            phrases={["Full Stack Developer", "Software Engineer", "Hey there!"]}
            className="text-secondary"
          />
        </div>
        <p className="text-on-surface-variant text-sm md:text-base max-w-md leading-relaxed font-body pt-1">
          Crafting immersive narratives through code. Bridging the gap between
          human emotion and digital precision.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-3 pt-1"
      >
        <button className="relative px-7 py-3 rounded-xl font-semibold font-headline text-sm flex items-center gap-2 text-on-primary overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-xl bg-primary/80 border border-primary/40 shadow-[0_0_30px_rgba(199,185,245,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-primary/95 hover:shadow-[0_0_55px_rgba(199,185,245,0.6),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <span className="material-symbols-outlined text-[18px]">cloud_download</span>
          Download Resume
        </button>
        <button className="px-7 py-3 rounded-xl font-semibold font-headline text-sm text-white transition-all duration-300 backdrop-blur-xl bg-white/[0.06] border border-white/[0.12] shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/[0.11] hover:border-white/[0.22] hover:shadow-[0_8px_40px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.14)]">
          Hire Me
        </button>
      </motion.div>

    </div>
  );
}
