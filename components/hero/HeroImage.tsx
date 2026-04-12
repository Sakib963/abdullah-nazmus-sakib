"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techBadges = [
  { label: "React", color: "text-[#61DAFB]", border: "border-[#61DAFB]/30", bg: "bg-[#61DAFB]/10", top: "10%", left: "-8%", delay: 0 },
  { label: "Next.js", color: "text-white", border: "border-white/20", bg: "bg-white/5", top: "0%", right: "0%", delay: 0.4 },
  { label: "TypeScript", color: "text-[#3178C6]", border: "border-[#3178C6]/30", bg: "bg-[#3178C6]/10", bottom: "20%", left: "-10%", delay: 0.8 },
  { label: "Node.js", color: "text-[#68A063]", border: "border-[#68A063]/30", bg: "bg-[#68A063]/10", bottom: "8%", right: "-4%", delay: 1.1 },
  { label: "Python", color: "text-[#FFD43B]", border: "border-[#FFD43B]/30", bg: "bg-[#FFD43B]/10", top: "50%", right: "-12%", delay: 0.6 },
];

const floatAnim = (delay: number) => ({
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
      delay,
    },
  },
});

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative w-64 h-64 md:w-[380px] md:h-[380px]">

        {/* Animated blob behind image */}
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

        {/* Profile image frame */}
        <div className="absolute inset-14 md:inset-16 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(199,185,245,0.25)] z-10 bg-surface">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6k6vANu0JWFMRdFp0B1fWKyvNblOmS9hRzVpUV3ijXL0rD6w3pF9Xoh0oyz0KmJnZX4wBm7nLolgrYixJ8UA-HSm2XnZExEflGZN9ZB7oZjQl5F2AsZkAO3X1yXL_Yred_O1E9ktTQdqSGQEtWQMu-s-KpqGoPRwbJVPnbWlV2jfKPnOnd3xsnTGN89Wh_skhC7HPAhTeiRXMiplzbkAtoTlt4y4jQ5FiswOq5NBCQluKF_xN0uHKSVjd3Ln4P3DZYwq3nFFUnsg-"
            alt="Abdullah Sakib"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>

        {/* Floating tech badges */}
        {techBadges.map((badge) => (
          <motion.div
            key={badge.label}
            {...floatAnim(badge.delay)}
            className="absolute z-20"
            style={{
              top: badge.top,
              left: badge.left,
              right: badge.right,
              bottom: badge.bottom,
            }}
          >
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-label backdrop-blur-xl border ${badge.color} ${badge.border} ${badge.bg} shadow-lg whitespace-nowrap`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              {badge.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
