// app/blog/[slug]/page.tsx
import type { Metadata } from "next";

const POSTS = {
  "when-to-simulate": {
    title: "When to simulate instead of calculate",
    category: "Simulation methods",
    readTime: "6 min read",
  },
  "modelling-recruitment-uncertainty": {
    title: "Modelling recruitment uncertainty in early planning",
    category: "Recruitment & timelines",
    readTime: "5 min read",
  },
};

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const post = POSTS[params.slug as keyof typeof POSTS];
  return { title: post ? `${post.title} | Blog` : "Blog post" };
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS[params.slug as keyof typeof POSTS];

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="text-sm text-slate-300">This article could not be found.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <article className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs text-slate-400">
            {post.category} · {post.readTime}
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-slate-300">
            Introductory paragraph setting up the problem, why it matters for
            trial designers, and what the reader will learn.
          </p>
        </header>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">Why this matters</h2>
          <p>
            Briefly connect the topic to real trial planning decisions, such as
            sample size, timelines, or governance thresholds.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">Core idea</h2>
          <p>
            Use 2–3 short paragraphs or bullet points to explain the main
            concept in plain language, with minimal notation.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">Practical takeaways</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>When to apply this in protocol design.</li>
            <li>Common pitfalls or misinterpretations to avoid.</li>
            <li>How simulation can make the trade‑offs visible.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
