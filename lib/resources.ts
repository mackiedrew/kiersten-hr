import fs from "fs";
import path from "path";

export interface Resource {
  id: string;
  title: string;
  description: string;
  filename: string;
  stored_as: string;
  date: string;
}

const MANIFEST = path.join(
  process.cwd(),
  "content",
  "resources",
  "manifest.json"
);

export function getAllResources(): Resource[] {
  if (!fs.existsSync(MANIFEST)) return [];

  const raw = fs.readFileSync(MANIFEST, "utf-8");
  const data: Resource[] = JSON.parse(raw);

  return data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
