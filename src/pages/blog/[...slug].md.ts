import type { APIContext } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renditionMarkdown } from "../../lib/agent-markdown";

export async function getStaticPaths() {
  const entries = await getCollection("blog", ({ data }) => !data.draft);
  return entries.map((entry) => ({
    params: { slug: entry.id.replace(/\.(md|mdx)$/, "") },
    props: { entry },
  }));
}

export function GET({ props, site }: APIContext) {
  const entry = props.entry as CollectionEntry<"blog">;
  const slug = entry.id.replace(/\.(md|mdx)$/, "");

  const extras = [`Published: ${entry.data.date.toISOString().slice(0, 10)}`];
  if (entry.data.tags.length > 0) {
    extras.push(`Tags: ${entry.data.tags.join(", ")}`);
  }

  const markdown = renditionMarkdown(
    {
      title: entry.data.title,
      description: entry.data.description,
      pageUrl: new URL(`/blog/${slug}/`, site).toString(),
      extras,
    },
    entry.body ?? "",
  );

  return new Response(markdown, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
