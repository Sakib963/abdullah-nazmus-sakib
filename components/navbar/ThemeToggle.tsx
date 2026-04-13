"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/[0.06] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 hover:bg-white/[0.11] hover:border-white/[0.2] hover:shadow-[0_0_16px_rgba(199,185,245,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="material-symbols-outlined text-[18px] leading-none"
          style={{ color: isDark ? "#c7b9f5" : "#9B8EC7" }}
        >
          {isDark ? "dark_mode" : "light_mode"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
