"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

export default function NavWrapper() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Read saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved ? saved === "dark" : prefersDark;
    setIsDark(dark);
    setMounted(true);
  }, []);

  // Apply class + persist on change
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);

  // Avoid flash of wrong theme before mount
  if (!mounted) return null;

  return (
    <>
      <Navbar onThemeToggle={() => setIsDark((prev) => !prev)} isDark={isDark} />
      <SideNav />
    </>
  );
}
