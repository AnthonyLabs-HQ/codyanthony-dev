/**
 * Build the plain-Markdown agent rendition of a content entry.
 *
 * Renditions are emitted at build time as static `.md` siblings of the
 * rendered pages (src/pages/case-studies/[...slug].md.ts and
 * src/pages/blog/[...slug].md.ts) and indexed by public/llms.txt. The body is
 * the authored Markdown/MDX source — not an HTML round-trip: MDX imports are
 * dropped and the two components used in content (<Aside>, <Image>) are mapped
 * to plain-Markdown equivalents. Lines inside code fences are never touched,
 * so shell placeholders like <CLUSTER_NAME> survive verbatim.
 */

const ASIDE_LABELS: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  caution: "Caution",
  danger: "Warning",
};

function transformLine(line: string): string | null {
  // MDX imports (authored only at the top of a body, outside fences)
  if (/^import\s/.test(line)) return null;

  // <Aside type="..." title="..."> → bold intro line; </Aside> → dropped
  const asideOpen = line.match(/^(\s*)<Aside([^>]*)>\s*$/);
  if (asideOpen) {
    const attrs = asideOpen[2];
    const title = attrs.match(/title="([^"]*)"/)?.[1];
    const type = attrs.match(/type="([^"]*)"/)?.[1] ?? "note";
    return `${asideOpen[1]}**${title ?? ASIDE_LABELS[type] ?? "Note"}:**`;
  }
  if (/^\s*<\/Aside>\s*$/.test(line)) return null;

  // <Image ... alt="..." /> → italic image note; no alt → dropped
  const image = line.match(/^(\s*)<Image[^>]*\balt="([^"]*)"[^>]*\/>\s*$/);
  if (image) return `${image[1]}*(image: ${image[2]})*`;
  if (/^\s*<Image[^>]*\/>\s*$/.test(line)) return null;

  return line;
}

export function cleanBody(source: string): string {
  // Defensive: strip a leading frontmatter block if a loader ever includes one.
  const body = source.replace(/^---\n[\s\S]*?\n---\n/, "");

  const out: string[] = [];
  let inFence = false;
  for (const line of body.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    const transformed = transformLine(line);
    if (transformed !== null) out.push(transformed);
  }
  // Collapse the blank runs left behind by dropped lines.
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export interface RenditionMeta {
  title: string;
  description: string;
  /** Absolute URL of the rendered HTML page. */
  pageUrl: string;
  /** Extra header lines, already formatted (e.g. "Published: …"). */
  extras?: string[];
}

export function renditionMarkdown(meta: RenditionMeta, body: string): string {
  const header = [
    `# ${meta.title}`,
    "",
    `> ${meta.description}`,
    "",
    ...(meta.extras ?? []),
    `Rendered version: ${meta.pageUrl}`,
    "Author: Cody Anthony (https://codyanthony.dev/about/)",
    "",
    "---",
    "",
    "",
  ];
  return header.join("\n") + cleanBody(body) + "\n";
}
