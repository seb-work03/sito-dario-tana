"use client";

import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topics1 = [
  "Strategia e-commerce", "Piattaforme", "Customer journey", "Organizzazione",
  "Marketing digitale", "Analisi dei dati", "Conversione", "Gestione del catalogo",
];
const topics2 = [
  "Acquisizione", "Fidelizzazione", "Processi interni", "Evoluzione del settore",
  "UX e navigazione", "Pricing", "Logistica e-commerce", "Internazionalizzazione",
];

const offerings = [
  {
    tag: "Formazione aziendale",
    title: "Per il tuo team",
    desc: "Percorsi costruiti sulle esigenze reali dell'organizzazione, non corsi standard. Dal management agli operatori.",
    href: "/formazione",
  },
  {
    tag: "Docenza",
    title: "Per enti e scuole",
    desc: "Interventi in università, business school, master e percorsi di formazione professionale.",
    href: "/docenza",
  },
  {
    tag: "Corsi e workshop",
    title: "Incontri operativi",
    desc: "Workshop tematici e seminari su argomenti specifici, per gruppi aziendali o partecipanti individuali.",
    href: "/corsi",
  },
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-2">
      <div
        className={cn(
          "flex gap-4 shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border-neutral bg-surface-primary px-4 py-1.5 font-mono text-xs text-text-muted uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrainingMarquee() {
  return (
    <section className="py-section overflow-hidden">
      <Container className="mb-12">
        <MonoLabel className="mb-3 block">Formazione e docenza</MonoLabel>
        <h2 className="font-display text-display-md text-text-primary max-w-xl">
          Trasmettere competenze è parte centrale del lavoro.
        </h2>
      </Container>

      {/* Marquee */}
      <div className="mb-12 flex flex-col gap-3">
        <MarqueeRow items={topics1} />
        <MarqueeRow items={topics2} reverse />
      </div>

      <Container>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {offerings.map((o) => (
            <a
              key={o.tag}
              href={o.href}
              className="group rounded-xl border border-border-neutral bg-surface-primary p-6 hover:border-border-primary hover:bg-surface-hover transition-all duration-200"
            >
              <MonoLabel accent className="mb-3 block">{o.tag}</MonoLabel>
              <h3 className="font-semibold text-text-primary mb-2">{o.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{o.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm text-accent-primary group-hover:gap-2.5 transition-all">
                Scopri di più <ArrowRight size={13} />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
