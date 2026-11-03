"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ── Card height shared between both cards ──────────────────────────────────────
// ── Photo card ─────────────────────────────────────────────────────────────────
function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px" });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { y: [0, -10, 0] } : { y: 0 }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "var(--photo-card-bg)",
        border: "1px solid var(--photo-card-border)",
        boxShadow: "var(--photo-card-shadow)",
      }}
      className="rounded-3xl p-4 flex flex-col gap-3 w-[280px] h-[380px] lg:w-[320px] lg:h-[470px] flex-shrink-0"
    >
      {/* Photo — flex-1 fills remaining height */}
      <div className="relative rounded-2xl overflow-hidden flex-1">
        <Image
          src="/abdullah_nazmus_sakib.png"
          alt="Abdullah Nazmus Sakib"
          fill
          sizes="(min-width: 1024px) 300px, 260px"
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />

        {/* Scan sweep */}
        <motion.div
          animate={inView ? { top: ["-4%", "106%"] } : { top: "-4%" }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "linear",
          }}
          className="absolute left-0 right-0 h-[3px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 10%, rgb(var(--color-secondary) / 0.9) 50%, transparent 90%)",
            boxShadow: "0 0 14px 4px rgb(var(--color-secondary) / 0.5)",
          }}
        />

        {/* HUD corners */}
        {(
          [
            "top-2.5 left-2.5 border-t-2 border-l-2",
            "top-2.5 right-2.5 border-t-2 border-r-2",
            "bottom-2.5 left-2.5 border-b-2 border-l-2",
            "bottom-2.5 right-2.5 border-b-2 border-r-2",
          ] as const
        ).map((cls, i) => (
          <div
            key={i}
            className={`absolute w-5 h-5 ${cls} border-secondary/75`}
          />
        ))}

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "var(--photo-bottom-fade)" }}
        />
      </div>

      {/* Identity */}
      <div className="px-1 flex-shrink-0">
        <p className="text-[12px] font-bold font-headline text-on-surface leading-snug">
          Abdullah Nazmus Sakib
        </p>
        <p className="text-[10px] font-label text-primary dark:text-secondary mt-0.5 tracking-wide">
          Full Stack Engineer
        </p>
      </div>

      {/* Stats */}
      <div
        className="flex items-center justify-between px-1 pt-2.5 pb-0.5 flex-shrink-0"
        style={{ borderTop: "1px solid var(--glass-border)" }}
      >
        <div className="text-center">
          <p className="text-sm font-bold font-headline text-primary leading-none">
            3+
          </p>
          <p className="text-[8px] text-on-surface-variant font-label uppercase tracking-wider mt-1">
            Yrs
          </p>
        </div>
        <div className="w-px h-5 bg-black/10 dark:bg-white/10" />
        <div className="text-center">
          <motion.p
            animate={inView ? { opacity: [1, 0.15, 1] } : { opacity: 1 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm text-emerald-400 font-bold leading-none"
          >
            ●
          </motion.p>
          <p className="text-[8px] text-on-surface-variant font-label uppercase tracking-wider mt-1">
            Live
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function HeroImage() {
  return (
    <motion.div
      initial={{ x: 30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 50%, rgba(199,185,245,0.1) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative flex justify-center w-full">
        <PhotoCard />
      </div>
    </motion.div>
  );
}
