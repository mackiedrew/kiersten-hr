import fs from "fs";
import path from "path";

export interface Post {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  published: boolean;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));

  const posts: Post[] = files
    .map((file) => {
      const slug = file.replace(/\.json$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const data = JSON.parse(raw);
      return { slug, ...data } as Post;
    })
    .filter((p) => p.published);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPost(slug: string): Post | null {
  const sanitized = slug.replace(/[^a-zA-Z0-9_-]/g, "");
  const filePath = path.join(POSTS_DIR, `${sanitized}.json`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);
  if (!data.published) return null;

  return { slug: sanitized, ...data } as Post;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
