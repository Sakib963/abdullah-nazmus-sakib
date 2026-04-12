"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

export default function NavWrapper() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <Navbar onThemeToggle={() => setIsDark((prev) => !prev)} isDark={isDark} />
      <SideNav />
    </>
  );
}
