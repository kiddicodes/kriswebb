import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NewsItem = {
  title: string;
  date: string; // ISO or 'YYYY-MM-DD HH:mm' Swedish time
  updated?: string; // optional, same format
  content: string;
  active: boolean;
};

function parseDate(str?: string): number {
  if (!str) return 0;
  // Accept 'YYYY-MM-DD HH:mm' or ISO
  const iso = str.replace(" ", "T");
  const d = new Date(iso);
  return d.getTime();
}

export function getNewsItems(): NewsItem[] {
  const newsDir = path.join(process.cwd(), "src/news");
  if (!fs.existsSync(newsDir)) return [];
  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const filePath = path.join(newsDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        title: data.title || file,
        date: data.date || "",
        updated: data.updated,
        active: data.active !== false,
        content,
      };
    })
    .filter((item) => item.active)
    .sort((a, b) => {
      // Sort by latest of updated or date
      const aTime = parseDate(a.updated) || parseDate(a.date);
      const bTime = parseDate(b.updated) || parseDate(b.date);
      return bTime - aTime;
    });
}
