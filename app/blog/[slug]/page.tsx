import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, stripHtml } from "../../../lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found | Fractional HR Support" };

  const description =
    post.excerpt || stripHtml(post.content).slice(0, 160);

  return {
    title: `${post.title} | Fractional HR Support`,
    description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <section className="section">
      <div className="container">
        <div className="post-content">
          <p className="blog-date">{post.date}</p>
          <h1>{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{ marginTop: "1.5em" }}
          />
          <p style={{ marginTop: "2em" }}>
            <Link href="/blog">&larr; Back to Blog</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
