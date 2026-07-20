import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ArrowRight } from "lucide-react";

// Placeholder articles — da sostituire con dati da Payload CMS
const placeholderArticles = [
  {
    slug: "#",
    category: "Strategia e-commerce",
    title: "[TITOLO ARTICOLO DA INSERIRE]",
    excerpt: "[Estratto dell'articolo in evidenza — da inserire tramite CMS]",
    date: "2026-01-15",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "#",
    category: "Piattaforme e tecnologia",
    title: "[TITOLO ARTICOLO DA INSERIRE]",
    excerpt: "[Estratto — da inserire tramite CMS]",
    date: "2026-01-08",
    readTime: "4 min",
    featured: false,
  },
  {
    slug: "#",
    category: "Conversione",
    title: "[TITOLO ARTICOLO DA INSERIRE]",
    excerpt: "[Estratto — da inserire tramite CMS]",
    date: "2025-12-20",
    readTime: "5 min",
    featured: false,
  },
];

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateStr));
}

export function InsightsSection() {
  const [featured, ...secondary] = placeholderArticles;

  return (
    <section className="py-section">
      <Container>
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <MonoLabel className="mb-3 block">Insights</MonoLabel>
            <h2 className="font-display text-display-md text-text-primary">
              Analisi, esperienze e punti di vista sull&apos;e-commerce.
            </h2>
          </div>
          <Button href="/insights" variant="ghost" className="hidden sm:inline-flex shrink-0">
            Tutti gli articoli <ArrowRight size={14} />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured */}
          <Link
            href={featured.slug}
            className="group lg:col-span-2 rounded-xl border border-border-neutral bg-surface-primary overflow-hidden hover:border-border-primary transition-all duration-200"
          >
            <MediaPlaceholder
              ratio="16/7"
              label="Immagine articolo principale"
              description="Immagine editoriale per l'articolo in evidenza — sfondo dark, stile grafico astratto coerente con il sito"
              altPlaceholder="Immagine articolo"
              className="rounded-none border-0 border-b border-border-neutral"
            />
            <div className="p-7">
              <MonoLabel accent className="mb-2 block">{featured.category}</MonoLabel>
              <h3 className="font-display text-display-sm text-text-primary mb-3 group-hover:text-accent-light transition-colors">
                {featured.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-text-muted">{formatDate(featured.date)}</span>
                <span className="text-text-muted/40">·</span>
                <span className="font-mono text-xs text-text-muted">{featured.readTime} di lettura</span>
              </div>
            </div>
          </Link>

          {/* Secondary */}
          <div className="flex flex-col gap-6">
            {secondary.map((article, i) => (
              <Link
                key={i}
                href={article.slug}
                className="group rounded-xl border border-border-neutral bg-surface-primary p-6 hover:border-border-primary transition-all duration-200"
              >
                <MonoLabel accent className="mb-2 block">{article.category}</MonoLabel>
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent-light transition-colors leading-snug">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-mono text-xs text-text-muted">{formatDate(article.date)}</span>
                  <span className="text-text-muted/40">·</span>
                  <span className="font-mono text-xs text-text-muted">{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:hidden mt-8">
          <Button href="/insights" variant="secondary">
            Tutti gli articoli <ArrowRight size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
