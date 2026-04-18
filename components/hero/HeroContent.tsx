"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.11, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const STATS = [
  { value: "2+", label: "Years Exp", icon: "timeline" },
  { value: "7+", label: "Projects", icon: "folder_open" },
  { value: "Global", label: "Clients", icon: "public" },
];

export default function HeroContent() {
  return (
    <div className="space-y-5">
      {/* Status badges row */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center gap-2"
      >
        {/* Company */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-[10px] font-label tracking-widest uppercase border-white/10 text-on-surface-variant">
          <span className="material-symbols-outlined text-[13px] text-secondary">
            business
          </span>
          Celloscope Ltd
        </span>

        {/* Location */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel text-[10px] font-label tracking-widest uppercase border-white/10 text-on-surface-variant">
          <span className="material-symbols-outlined text-[13px] text-secondary">
            location_on
          </span>
          Dhaka, BD
        </span>
      </motion.div>

      {/* Heading + typewriter */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="space-y-2"
      >
        <h1 className="text-4xl md:text-[3.2rem] font-bold tracking-tight leading-[1.08] font-headline">
          <span className="text-on-surface">Abdullah</span>
          <br />
          <span className="text-primary text-glow">Nazmus Sakib</span>
        </h1>

        <div className="flex items-center gap-2 text-sm md:text-base font-headline text-on-surface-variant h-6">
          <span className="text-secondary opacity-60">//</span>
          <Typewriter
            phrases={[
              "Software Engineer.",
              "Full Stack Developer.",
              "Angular · Node.js · PostgreSQL",
              "Enterprise & Fintech Systems.",
              "From Dhaka, Bangladesh.",
            ]}
            className="text-secondary"
          />
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-on-surface-variant text-sm leading-relaxed font-body max-w-[420px]"
      >
        I think about software the way a user thinks about a door. They never
        wonder how it was built. They just know if it opened smoothly .{" "}
        <strong className="text-on-surface font-medium">2+ years</strong>{" "}of
        shipping production systems, and that&apos;s still the only metric I
        trust. If the person using it has to think, something went wrong.
      </motion.p>
      {/* Stats row */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-4"
      >
        {STATS.map((s, i) => (
          <div key={i} className="flex flex-col items-start">
            <span className="text-xl font-bold font-headline text-primary leading-none">
              {s.value}
            </span>
            <span className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant mt-0.5">
              {s.label}
            </span>
          </div>
        ))}

        <div className="h-8 w-px bg-white/10 mx-1" />

        {/* Expertise tags */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant">
            Specialises in
          </span>
          <span className="text-xs font-body text-on-surface">
            Fullstack · APIs · Production
          </span>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-3 pt-1"
      >
        <a
          href="/resume.pdf"
          download
          className="relative px-6 py-2.5 rounded-xl font-semibold font-headline text-sm flex items-center gap-2 text-on-primary overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-xl bg-primary/80 border border-primary/40 shadow-[0_0_30px_rgba(199,185,245,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-primary/95 hover:shadow-[0_0_55px_rgba(199,185,245,0.6),inset_0_1px_0_rgba(255,255,255,0.2)]"
        >
          <span className="material-symbols-outlined text-[17px]">
            cloud_download
          </span>
          Resume
        </a>
        <a
          href="#Contact"
          className="px-6 py-2.5 rounded-xl font-semibold font-headline text-sm text-white transition-all duration-300 backdrop-blur-xl bg-white/[0.06] border border-white/[0.12] shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/[0.11] hover:border-white/[0.22] hover:shadow-[0_8px_40px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.14)] flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[17px] text-secondary">
            handshake
          </span>
          Hire Me
        </a>
        <a
          href="#Projects"
          className="px-6 py-2.5 rounded-xl font-semibold font-headline text-sm text-on-surface-variant transition-all duration-300 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] hover:text-on-surface hover:bg-white/[0.07] flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[17px]">
            folder_open
          </span>
          See Work
        </a>
      </motion.div>
    </div>
  );
}
