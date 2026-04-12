"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { blogPosts, MAX_HOMEPAGE_BLOGS } from "./blogData";
import BlogCard from "./BlogCard";
import { AnimatedBlob, SectionHeading } from "@/components/ui";
import Link from "next/link";

export default function Blogs() {
  const headingRef = useRef<HTMLDivElement>(null);
  const visible = blogPosts.slice(0, MAX_HOMEPAGE_BLOGS);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0, y: 28, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="Blogs" className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <AnimatedBlob color="bg-secondary" size="w-[350px] h-[350px]" position="top-[10%] -right-[6%]" duration={13} />
      <AnimatedBlob color="bg-tertiary" size="w-[200px] h-[200px]" position="bottom-[15%] -left-[3%]" duration={10} delay={1.5} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading — centered, View All floated right */}
        <div ref={headingRef} className="relative mb-12">
          <SectionHeading
            pre="The"
            accent="Codex"
            accentClassName="text-tertiary text-glow"
            subtitle="Thoughts on engineering, design systems, and the craft of building software."
            dividerColor="from-tertiary"
          />
          <Link
            href="/blogs"
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 glass-panel text-xs text-on-surface-variant hover:text-white border-white/10 rounded-full hover:bg-white/5 transition-all font-headline"
          >
            View All
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </Link>
        </div>

        {visible.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 border-white/5 text-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/30">edit_note</span>
            <p className="text-on-surface-variant text-sm mt-3 font-body">First post coming soon.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              {visible.map((post, i) => (
                <BlogCard key={post.id} {...post} index={i} />
              ))}
            </div>

            {blogPosts.length > MAX_HOMEPAGE_BLOGS && (
              <p className="text-center text-xs text-on-surface-variant mt-8 font-label">
                Showing {visible.length} of {blogPosts.length} posts.{" "}
                <Link href="/blogs" className="text-tertiary hover:underline">See all →</Link>
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
