import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { safeFind } from "@/lib/payload";
import { ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Casi studio",
  description:
    "Progetti reali di consulenza e-commerce: il problema affrontato, l'approccio adottato e l'esito del lavoro svolto.",
};

const sectorLabels: Record<string, string> = {
  moda: "Moda & Abbigliamento",
  arredamento: "Arredamento & Design",
  alimentare: "Alimentare & Bevande",
  elettronica: "Elettronica",
  b2b: "B2B",
  farmaceutico: "Farmaceutico & Salute",
  altro: "Altro settore",
};

export default async function CasiStudioPage() {
  const { docs } = await safeFind({
    collection: "case-studies",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 30,
  });

  return (
    <>
      <PageHero
        eyebrow="Casi studio"
        title="Progetti reali, con problemi reali e approcci concreti."
        description="Ogni caso studio racconta il contesto di partenza, il metodo adottato e il percorso seguito insieme all'azienda — nel rispetto della riservatezza quando richiesta."
      />

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container>
          {docs.length === 0 ? (
            <EmptyState
              title="I casi studio saranno pubblicati a breve"
              description="I progetti di consulenza vengono documentati e pubblicati qui man mano che si concludono e viene concordata la relativa riservatezza."
            />
          ) : (
            <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8">
              {docs.map((cs) => (
                <StaggerItem key={cs.id}>
                  <Link
                    href={`/casi-studio/${cs.slug}`}
                    className="group block h-full rounded-2xl border border-ink-700 bg-ink-800/50 p-8 hover:border-celeste-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      {cs.sector && (
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-celeste-500 bg-celeste-500/10 px-3 py-1 rounded-full">
                          {sectorLabels[cs.sector] ?? cs.sector}
                        </span>
                      )}
                      <ArrowUpRight
                        size={18}
                        className="text-paper-500 group-hover:text-celeste-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                    <h2 className="text-2xl font-medium text-paper-50 tracking-tight mb-3 text-balance">
                      {cs.title}
                    </h2>
                    {cs.excerpt && (
                      <p className="text-paper-400 text-sm leading-relaxed">{cs.excerpt}</p>
                    )}
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </Container>
      </section>

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container size="md" className="text-center">
          <FadeIn>
            <h2 className="font-display text-display-md text-paper-50 text-balance mb-6">
              Vuoi diventare il prossimo caso studio?
            </h2>
            <p className="text-paper-400 leading-relaxed max-w-md mx-auto">
              Raccontami il contesto del tuo progetto: valuteremo insieme se e come
              posso esserti utile.
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
