import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const timeline = [
  { year: "[ANNO DA CONFERMARE]", label: "Prime esperienze nel commercio elettronico" },
  { year: "[ANNO DA CONFERMARE]", label: "Consulenze ai primi clienti e-commerce" },
  { year: "[ANNO DA CONFERMARE]", label: "Fondazione di DT E-commerce Consulting con Tiziana Tana" },
  { year: "Oggi", label: "Consulenza, formazione e docenza in ambito e-commerce" },
];

export function ExperienceSection() {
  return (
    <section className="py-section bg-background-secondary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + timeline */}
          <div className="flex flex-col gap-8">
            <MediaPlaceholder
              ratio="4/3"
              label="Dario e Tiziana Tana"
              description="Fotografia professionale di Dario Tana e Tiziana Tana, cofondatori di DT E-commerce Consulting. Ambiente professionale, tono naturale e diretto."
              altPlaceholder="Dario Tana e Tiziana Tana, cofondatori di DT E-commerce Consulting"
            />

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 pb-6 last:pb-0 relative">
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[31px] top-6 bottom-0 w-px bg-border-neutral" />
                  )}
                  <div className="w-16 shrink-0">
                    <span className="font-mono text-xs text-accent-primary">{item.year}</span>
                  </div>
                  <div className="flex items-start gap-3 pt-0.5">
                    <div className="w-2 h-2 rounded-full border border-accent-primary/60 mt-0.5 bg-surface-secondary shrink-0" />
                    <span className="text-sm text-text-secondary leading-relaxed">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <MonoLabel className="mb-3 block">Esperienza diretta</MonoLabel>
            <h2 className="font-display text-display-md text-text-primary mb-6">
              La consulenza nasce dall&apos;esperienza sul campo.
            </h2>

            <div className="flex flex-col gap-5 text-text-secondary leading-relaxed">
              <p>
                Lavoro nel commercio elettronico da oltre vent&apos;anni. Ho seguito l&apos;evoluzione del settore
                dalle prime piattaforme alle architetture composable di oggi, attraversando cambiamenti
                tecnologici, modelli di business e dinamiche di mercato molto diversi tra loro.
              </p>
              <p>
                Ho fondato DT E-commerce Consulting insieme a mia sorella Tiziana Tana. L&apos;agenzia
                lavora quotidianamente su progetti reali: sviluppo, migrazione, crescita, gestione
                operativa. Questo contatto diretto con problemi concreti alimenta il lavoro consulenziale
                e formativo.
              </p>
              <p>
                Quando affianco un&apos;azienda come consulente, porto con me non solo la conoscenza teorica del
                settore, ma anche la comprensione di ciò che accade ogni giorno in chi fa e-commerce sul campo.
              </p>
            </div>

            <div className="mt-8 p-5 rounded-lg border border-border-neutral bg-surface-primary">
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                Cerchi un partner operativo per sviluppare o gestire il tuo e-commerce?
              </p>
              <a
                href="https://www.dtecommerce.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent-primary hover:text-accent-light transition-colors font-medium"
              >
                Visita DT E-commerce Consulting <ArrowRight size={13} />
              </a>
            </div>

            <div className="mt-6">
              <Button href="/chi-sono" variant="secondary">
                Il mio percorso completo <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
