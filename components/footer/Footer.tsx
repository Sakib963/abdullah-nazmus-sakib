import Link from "next/link";
import BrandIcon from "@/components/ui/BrandIcon";
import { ScrollReveal } from "@/components/ui";

const socialLinks = [
  { label: "GitHub",   icon: "github"   as const, href: "https://github.com/sakib963" },
  { label: "LinkedIn", icon: "linkedin" as const, href: "https://linkedin.com/in/abdullahnazmussakib" },
  { label: "Facebook", icon: "facebook" as const, href: "https://facebook.com" },
  { label: "Email",    icon: "email"    as const, href: "/#Contact" },
];

const navLinks = [
  { label: "About",        href: "#About" },
  { label: "Technologies", href: "#Technologies" },
  { label: "Skills",       href: "#Skills" },
  { label: "Projects",     href: "#Projects" },
  { label: "Blog",         href: "#Blogs" },
  { label: "Contact",      href: "#Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 relative overflow-hidden">
      <ScrollReveal direction="up" amount={0.2}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-12 relative z-10">

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/5">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-9 h-9" viewBox="0 0 40 40" aria-hidden="true">
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#c7b9f5" />
                      <stop offset="100%" stopColor="#c9e8ee" />
                    </linearGradient>
                  </defs>
                  <path d="M12 30L20 10L28 30M15 24H25" fill="none" stroke="url(#footerLogoGrad)" strokeLinecap="round" strokeWidth="2.5" />
                  <path d="M12 34C10 34 8 32 8 30C8 28 10 26 12 26C14 26 16 28 16 30" fill="none" stroke="url(#footerLogoGrad)" strokeWidth="1.5" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-white font-headline leading-tight">Abdullah Nazmus Sakib</p>
                  <p className="text-[10px] text-on-surface-variant font-label tracking-widest uppercase mt-0.5">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-body leading-relaxed max-w-xs">
                Building scalable web systems and clean APIs from Dhaka, Bangladesh. Open to remote opportunities worldwide.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full glass-panel border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <BrandIcon name={s.icon} className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary font-label mb-1">Navigation</p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-on-surface-variant hover:text-white transition-colors font-body w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact / availability */}
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary font-label">Get in Touch</p>
              <div className="space-y-2">
                <a href="mailto:abdullahnazmussakib@gmail.com" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-white transition-colors font-body group">
                  <span className="material-symbols-outlined text-[14px] text-primary">mail</span>
                  abdullahnazmussakib@gmail.com
                </a>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body">
                  <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                  Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body">
                  <span className="material-symbols-outlined text-[14px] text-primary">work</span>
                  Celloscope Limited · Software Engineer
                </div>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-2.5 px-3 py-2 glass-panel rounded-full border-white/5 w-fit mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[10px] text-on-surface-variant font-label">
            <p>© {year} Abdullah Nazmus Sakib. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with
              <span className="text-primary">Next.js</span>·
              <span className="text-primary">TypeScript</span>·
              <span className="text-primary">Tailwind CSS</span>
            </p>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
}
