import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { safeFind } from "@/lib/payload";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const { docs } = await safeFind({
    collection: "posts",
    where: { slug: { equals: slug }, _status: { equals: "published" } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt || undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const category = post.category && typeof post.category === "object" ? post.category.name : null;
  const author = post.author && typeof post.author === "object" ? post.author : null;

  return (
    <article className="pt-32 md:pt-40 pb-section bg-ink-900">
      <Container size="md">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-paper-400 hover:text-celeste-500 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> Tutti gli articoli
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            {category && <SectionLabel>{category}</SectionLabel>}
            {post.publishedAt && (
              <span className="text-paper-500 text-xs font-mono">
                {formatDate(post.publishedAt)}
              </span>
            )}
          </div>
          <h1 className="font-display text-display-xl text-paper-50 text-balance leading-[1.05] mb-4">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-paper-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
              {post.subtitle}
            </p>
          )}
          {author && <p className="text-paper-500 text-sm">A cura di {author.name}</p>}
        </FadeIn>

        {post.content && (
          <FadeIn delay={0.2}>
            <div className="rich-text mt-14 pt-14 border-t border-ink-800">
              <RichText data={post.content} />
            </div>
          </FadeIn>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <FadeIn delay={0.25}>
            <div className="mt-14 pt-14 border-t border-ink-800">
              <h2 className="font-display text-display-sm text-paper-50 mb-8">Domande frequenti</h2>
              <div className="flex flex-col divide-y divide-ink-800">
                {post.faqs.map((f: { question?: string | null; answer?: string | null }, i: number) => (
                  <div key={i} className="py-5">
                    <p className="text-paper-50 font-medium mb-2">{f.question}</p>
                    <p className="text-paper-400 text-sm leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-16 pt-10 border-t border-ink-800 text-center">
            <p className="text-paper-400 mb-6">Vuoi approfondire questo tema per il tuo progetto?</p>
            <Button href="/contatti" size="lg" variant="celeste">
              Parliamone
            </Button>
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}
