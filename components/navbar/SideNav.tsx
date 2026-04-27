"use client";

import { usePathname } from "next/navigation";
import BrandIcon from "@/components/ui/BrandIcon";

const socialLinks = [
  {
    label: "GitHub",
    icon: "github" as const,
    href: "https://github.com/sakib963",
    hover: "hover:text-white hover:bg-white/10 hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.12)]",
  },
  {
    label: "LinkedIn",
    icon: "linkedin" as const,
    href: "https://www.linkedin.com/in/abdullah-nazmus-sakib/",
    hover: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:shadow-[0_0_20px_rgba(10,102,194,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]",
  },
  {
    label: "Facebook",
    icon: "facebook" as const,
    href: "https://www.facebook.com/abdullahNazmus.Sakib/",
    hover: "hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30 hover:shadow-[0_0_20px_rgba(24,119,242,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]",
  },
  {
    label: "Email",
    icon: "email" as const,
    href: "/#Contact",
    hover: "hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(199,185,245,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
  },
];

export default function SideNav() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4 py-6 px-3 glass-panel rounded-full border-white/5 hidden lg:flex" style={{ backdropFilter: "blur(56px)", WebkitBackdropFilter: "blur(56px)" }}>
      {socialLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={s.label}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant backdrop-blur-sm bg-white/[0.05] border border-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 ${s.hover}`}
        >
          <BrandIcon name={s.icon} className="w-[15px] h-[15px]" />
        </a>
      ))}
    </aside>
  );
}
