// Blog list page — ready for content
// Add your posts to a /lib/posts.ts file and map them here

export const metadata = {
  title: "Blog | Abdullah Sakib",
  description: "Thoughts on software engineering, design, and tech.",
};

export default function BlogsPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 pt-36 pb-28">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-headline">
            The <span className="text-tertiary">Codex</span>
          </h1>
          <p className="text-on-surface-variant mt-2 text-sm font-body">
            Thoughts on engineering, design systems, and the craft of building software.
          </p>
        </div>

        {/* Posts will be listed here once you add content */}
        <div className="glass-panel rounded-2xl p-8 border-white/5 text-center">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant/40">edit_note</span>
          <p className="text-on-surface-variant text-sm mt-3 font-body">
            First post coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
