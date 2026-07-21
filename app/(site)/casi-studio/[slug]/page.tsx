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

const sectorLabels: Record<string, string> = {
  moda: "Moda & Abbigliamento",
  arredamento: "Arredamento & Design",
  alimentare: "Alimentare & Bevande",
  elettronica: "Elettronica",
  b2b: "B2B",
  farmaceutico: "Farmaceutico & Salute",
  altro: "Altro settore",
};

async function getCaseStudy(slug: string) {
  const { docs } = await safeFind({
    collection: "case-studies",
    where: { slug: { equals: slug }, _status: { equals: "published" } },
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
  const cs = await getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.seo?.title || cs.title,
    description: cs.seo?.description || cs.excerpt || undefined,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="pt-32 md:pt-40 pb-section bg-ink-900">
      <Container size="md">
        <FadeIn>
          <Link
            href="/casi-studio"
            className="inline-flex items-center gap-2 text-paper-400 hover:text-celeste-500 text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={14} /> Tutti i casi studio
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            {cs.sector && (
              <SectionLabel>{sectorLabels[cs.sector] ?? cs.sector}</SectionLabel>
            )}
            {cs.publishedAt && (
              <span className="text-paper-500 text-xs font-mono">
                {formatDate(cs.publishedAt)}
              </span>
            )}
          </div>
          <h1 className="font-display text-display-xl text-paper-50 text-balance leading-[1.05] mb-4">
            {cs.title}
          </h1>
          {cs.subtitle && (
            <p className="text-paper-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              {cs.subtitle}
            </p>
          )}
        </FadeIn>

        {(cs.challenge || cs.approach) && (
          <FadeIn delay={0.15}>
            <div className="grid md:grid-cols-2 gap-6 mt-14 mb-4">
              {cs.challenge && (
                <div className="rounded-2xl border border-ink-700 bg-ink-800/50 p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-celeste-500 mb-3">
                    Il problema
                  </p>
                  <p className="text-paper-300 text-sm leading-relaxed">{cs.challenge}</p>
                </div>
              )}
              {cs.approach && (
                <div className="rounded-2xl border border-ink-700 bg-ink-800/50 p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-celeste-500 mb-3">
                    L&apos;approccio
                  </p>
                  <p className="text-paper-300 text-sm leading-relaxed">{cs.approach}</p>
                </div>
              )}
            </div>
          </FadeIn>
        )}

        {cs.results && cs.results.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-ink-800">
              {cs.results.map((r: { metric?: string | null; value?: string | null }, i: number) => (
                <div key={i}>
                  <p className="text-paper-50 text-xl font-medium tracking-tight">{r.value}</p>
                  <p className="text-paper-500 text-xs mt-1">{r.metric}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {cs.content && (
          <FadeIn delay={0.25}>
            <div className="rich-text mt-14 pt-14 border-t border-ink-800">
              <RichText data={cs.content} />
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-16 pt-10 border-t border-ink-800 text-center">
            <p className="text-paper-400 mb-6">Hai un progetto con esigenze simili?</p>
            <Button href="/contatti" size="lg" variant="celeste">
              Parliamone
            </Button>
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}
