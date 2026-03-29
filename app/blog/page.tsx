import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, stripHtml } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Blog | Fractional HR Support",
  description:
    "Insights, updates, and practical HR advice from Fractional HR Support.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            The <span className="highlight">Blog</span>
          </h1>
          <p>Practical HR insights, compliance updates, and workplace tips.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-list">
            {posts.length === 0 ? (
              <p style={{ textAlign: "center", color: "#888", padding: "40px 0" }}>
                No posts yet — check back soon!
              </p>
            ) : (
              posts.map((post) => {
                const excerpt =
                  post.excerpt ||
                  stripHtml(post.content).slice(0, 200) + "...";
                return (
                  <div key={post.slug} className="blog-entry">
                    <p className="blog-date">{post.date}</p>
                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-excerpt">{excerpt}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
