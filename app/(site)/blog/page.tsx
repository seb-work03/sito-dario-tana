import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EmptyState } from "@/components/ui/EmptyState";
import { Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { safeFind } from "@/lib/payload";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articoli su e-commerce, strategia digitale, analisi dei dati e formazione, scritti dall'esperienza diretta di Dario Tana.",
};

export default async function BlogPage() {
  const { docs } = await safeFind({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 1,
    limit: 30,
  });

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Riflessioni e strumenti su e-commerce e strategia digitale."
        description="Articoli scritti dall'esperienza diretta sul campo — niente teoria generica, solo quello che serve davvero per decidere."
      />

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container>
          {docs.length === 0 ? (
            <EmptyState
              title="I primi articoli sono in preparazione"
              description="Il blog verrà popolato a breve con contenuti gestiti direttamente dal pannello di amministrazione."
            />
          ) : (
            <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {docs.map((post) => {
                const category =
                  post.category && typeof post.category === "object" ? post.category.name : null;
                return (
                  <StaggerItem key={post.id}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col h-full rounded-2xl border border-ink-700 bg-ink-800/50 p-7 hover:border-celeste-500/50 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between mb-6">
                        {category && <SectionLabel className="!text-celeste-500">{category}</SectionLabel>}
                        <ArrowUpRight
                          size={16}
                          className="text-paper-500 group-hover:text-celeste-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                        />
                      </div>
                      <h2 className="text-xl font-medium text-paper-50 tracking-tight mb-3 text-balance">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-paper-400 text-sm leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                      )}
                      {post.publishedAt && (
                        <span className="text-paper-500 text-xs font-mono mt-auto">
                          {formatDate(post.publishedAt)}
                        </span>
                      )}
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          )}
        </Container>
      </section>
    </>
  );
}
