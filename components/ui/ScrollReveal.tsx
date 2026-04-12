"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number; // viewport threshold 0–1
}

const initial: Record<Direction, object> = {
  up:    { opacity: 0, y: 32 },
  down:  { opacity: 0, y: -32 },
  left:  { opacity: 0, x: -32 },
  right: { opacity: 0, x: 32 },
  scale: { opacity: 0, scale: 0.88 },
  none:  { opacity: 0 },
};

const animate: Record<Direction, object> = {
  up:    { opacity: 1, y: 0 },
  down:  { opacity: 1, y: 0 },
  left:  { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  none:  { opacity: 1 },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className = "",
  amount = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={initial[direction]}
      whileInView={animate[direction]}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
