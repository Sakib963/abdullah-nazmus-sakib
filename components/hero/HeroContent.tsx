"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";
import BrandIcon from "@/components/ui/BrandIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socialLinks = [
  { label: "GitHub",   icon: "github"   as const, href: "https://github.com/sakib963",                       color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.1)]" },
  { label: "LinkedIn", icon: "linkedin" as const, href: "https://linkedin.com/in/abdullahnazmussakib",         color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_16px_rgba(10,102,194,0.2)]" },
  { label: "Facebook", icon: "facebook" as const, href: "https://facebook.com",                               color: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_16px_rgba(24,119,242,0.2)]" },
  { label: "Email",    icon: "email"    as const, href: "/#Contact",                                          color: "hover:text-primary hover:border-primary/40 hover:shadow-[0_0_16px_rgba(199,185,245,0.2)]" },
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
        <button className="px-7 py-3 bg-primary text-on-primary font-semibold rounded-xl glow-primary glow-primary-hover hover:scale-105 transition-all flex items-center gap-2 font-headline text-sm">
          <span className="material-symbols-outlined text-[18px]">cloud_download</span>
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
        className="flex items-center gap-2 pt-1"
      >
        {socialLinks.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={s.label}
            whileHover={{ y: -3, scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`w-10 h-10 rounded-full glass-panel border-white/10 flex items-center justify-center text-on-surface-variant transition-all duration-300 ${s.color}`}
          >
            <BrandIcon name={s.icon} className="w-4 h-4" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
