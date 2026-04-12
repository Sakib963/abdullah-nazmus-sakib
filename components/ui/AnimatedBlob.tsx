"use client";

import { motion } from "framer-motion";

interface AnimatedBlobProps {
  color: string;
  size?: string;
  position: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedBlob({
  color,
  size = "w-[350px] h-[350px]",
  position,
  duration = 10,
  delay = 0,
}: AnimatedBlobProps) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        scale: [1, 1.08, 0.96, 1],
        x: [0, 12, -6, 0],
        y: [0, -8, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        // stagger each property slightly so movement feels organic
        times: [0, 0.4, 0.7, 1],
      }}
      className={`absolute pointer-events-none opacity-20 blur-[100px] z-0 rounded-full ${color} ${size} ${position}`}
    />
  );
}
