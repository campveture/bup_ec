import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const root = new URL("..", import.meta.url);
const files = [
  "app/page.tsx", "app/about/page.tsx", "app/join/page.tsx", "app/alumni/page.tsx",
  "data/site.ts", "data/events.ts", "data/achievements.ts", "data/event-seasons.ts",
];
const output = new URL("public/media/", root);
await mkdir(output, { recursive: true });

let downloaded = 0;
let failed = 0;
for (const file of files) {
  const target = new URL(file, root);
  let source = await readFile(target, "utf8");
  const urls = [...source.matchAll(/(?:src|image|cover|logo):?\s*=?:?\s*["'](https:\/\/[^"']+)["']/g)].map((match) => match[1]);
  for (const url of new Set(urls)) {
    try {
      const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 BUPEC-site-asset-cache" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.startsWith("image/")) throw new Error(`Unexpected type: ${contentType}`);
      const extension = contentType.includes("png") ? ".png" : contentType.includes("webp") ? ".webp" : contentType.includes("svg") ? ".svg" : ".jpg";
      const name = `${createHash("sha256").update(url).digest("hex").slice(0, 16)}${extension}`;
      await writeFile(new URL(name, output), Buffer.from(await response.arrayBuffer()));
      source = source.replaceAll(url, `/media/${name}`);
      downloaded++;
      console.log(`Saved ${file}: ${name}`);
    } catch (error) {
      failed++;
      console.warn(`Could not download ${url}: ${error.message}`);
    }
  }
  await writeFile(target, source);
}
console.log(`Cached ${downloaded} images; ${failed} remain remote.`);
