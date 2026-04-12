import { blogPosts } from "@/components/blogs/blogData";
import BlogCard from "@/components/blogs/BlogCard";

export const metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, Angular, Node.js, PostgreSQL, and the craft of building web systems — by Abdullah Nazmus Sakib.",
  openGraph: {
    title: "The Codex | Abdullah Nazmus Sakib",
    description: "Engineering blog on full-stack development, system design, and web performance.",
  },
};

export default function BlogsPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 pt-36 pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-headline">
            The <span className="text-tertiary">Codex</span>
          </h1>
          <p className="text-on-surface-variant mt-2 text-sm font-body max-w-md">
            Thoughts on engineering, design systems, and the craft of building software.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-tertiary to-transparent rounded-full mt-3" />
        </div>

        {blogPosts.length === 0 ? (
          <div className="glass-panel rounded-2xl p-16 border-white/5 text-center">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">edit_note</span>
            <p className="text-on-surface-variant text-sm mt-4 font-body">First post coming soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} {...post} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
