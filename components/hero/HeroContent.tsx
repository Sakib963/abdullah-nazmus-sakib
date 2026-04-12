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

const socialLinks = [
  { label: "GitHub", icon: "code", href: "#" },
  { label: "LinkedIn", icon: "work", href: "#" },
  { label: "Dribbble", icon: "palette", href: "#" },
  { label: "Email", icon: "mail", href: "#Contact" },
];

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
          <span className="text-primary text-glow">Abdullah Sakib</span>
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
        <button className="px-7 py-3 bg-primary text-on-primary font-semibold rounded-xl glow-primary glow-primary-hover hover:scale-105 transition-all flex items-center gap-2 font-headline text-sm">
          <span className="material-symbols-outlined text-[18px]">
            cloud_download
          </span>
          Download Resume
        </button>
        <button className="px-7 py-3 glass-panel text-white font-semibold rounded-xl hover:bg-white/10 transition-all border-white/20 font-headline text-sm">
          Hire Me
        </button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-1 pt-1"
      >
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="p-2 rounded-full glass-panel text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">
              {s.icon}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
