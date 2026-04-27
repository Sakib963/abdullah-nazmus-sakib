"use client";

import { useEffect, useState } from "react";
import { navLinks, contactLink } from "./navLinks";

// Derived from navLinks — single source of truth
const SECTION_IDS = [...navLinks, contactLink].map((l) => l.href.split("#")[1]);

export function useActiveSection(): string {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
