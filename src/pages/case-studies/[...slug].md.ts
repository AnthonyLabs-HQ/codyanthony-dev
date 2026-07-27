import type { APIContext } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renditionMarkdown } from "../../lib/agent-markdown";

export async function getStaticPaths() {
  const entries = await getCollection("case-studies", ({ data }) => !data.draft);
  return entries.map((entry) => ({
    params: { slug: entry.id.replace(/\.(md|mdx)$/, "") },
    props: { entry },
  }));
}

export function GET({ props, site }: APIContext) {
  const entry = props.entry as CollectionEntry<"case-studies">;
  const slug = entry.id.replace(/\.(md|mdx)$/, "");

  const extras: string[] = [];
  if (entry.data.pdf) {
    const pdfUrl = new URL(entry.data.pdf.href, site).toString();
    extras.push(`Sample PDF: ${entry.data.pdf.label} — ${pdfUrl}`);
  }

  const markdown = renditionMarkdown(
    {
      title: entry.data.title,
      description: entry.data.description,
      pageUrl: new URL(`/case-studies/${slug}/`, site).toString(),
      extras,
    },
    entry.body ?? "",
  );

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
