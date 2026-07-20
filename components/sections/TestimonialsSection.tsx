"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — selezionare dalle recensioni Google My Business una recensione che descriva competenza, chiarezza e concretezza della consulenza]",
    author: "[NOME]",
    role: "[RUOLO]",
    company: "[AZIENDA]",
    type: "Consulenza",
    stars: 5,
  },
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — selezionare dalle recensioni Google My Business una recensione che descriva la qualità della formazione aziendale]",
    author: "[NOME]",
    role: "[RUOLO]",
    company: "[AZIENDA]",
    type: "Formazione",
    stars: 5,
  },
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — selezionare dalle recensioni Google My Business una recensione che descriva la capacità didattica di Dario come docente]",
    author: "[NOME]",
    role: "[RUOLO]",
    company: "[AZIENDA]",
    type: "Docenza",
    stars: 5,
  },
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — selezionare dalle recensioni Google My Business una quarta recensione di valore da mostrare in Home]",
    author: "[NOME]",
    role: "[RUOLO]",
    company: "[AZIENDA]",
    type: "Workshop",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stelle su 5`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M6 1l1.35 2.73 3.02.44-2.19 2.13.52 3.01L6 7.77l-2.7 1.54.52-3.01L1.63 4.17l3.02-.44L6 1z"
            fill={i < count ? "#31C6F2" : "rgba(117,220,247,0.2)"}
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-section bg-background-secondary overflow-hidden">
      <Container className="mb-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <MonoLabel className="mb-3 block">Testimonianze</MonoLabel>
            <h2 className="font-display text-display-md text-text-primary">
              Cosa dicono chi ha lavorato con Dario.
            </h2>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1">
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-2xl text-accent-primary font-semibold">4,9</span>
              <span className="text-text-muted text-sm">/ 5</span>
            </div>
            <span className="text-text-muted text-xs font-mono">Oltre 200 recensioni Google</span>
          </div>
        </div>
      </Container>

      {/* Scrollable testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-5 px-5 md:px-8 lg:px-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={cn(
              "group min-w-[320px] max-w-[380px] shrink-0 snap-start",
              "rounded-xl border border-border-neutral bg-surface-primary p-7",
              "hover:border-border-primary transition-all duration-300"
            )}
          >
            <StarRating count={t.stars} />
            <blockquote className="mt-4 mb-6 text-text-secondary text-sm leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-semibold text-text-primary text-sm">{t.author}</p>
                <p className="text-text-muted text-xs mt-0.5">
                  {t.role}{t.company && `, ${t.company}`}
                </p>
              </div>
              <MonoLabel accent>{t.type}</MonoLabel>
            </div>
          </div>
        ))}

        {/* CTA card */}
        <a
          href="https://g.page/r/[LINK_GOOGLE_MY_BUSINESS]"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[280px] shrink-0 snap-start rounded-xl border border-dashed border-border-primary bg-surface-primary/50 p-7 flex flex-col items-center justify-center gap-3 text-center hover:border-accent-primary/40 hover:bg-surface-primary transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-full border border-border-primary flex items-center justify-center group-hover:border-accent-primary/40 transition-colors">
            <span className="text-accent-primary text-lg">★</span>
          </div>
          <p className="text-text-secondary text-sm">
            Leggi tutte le recensioni su Google
          </p>
          <span className="font-mono text-xs text-accent-primary uppercase tracking-wider">
            Vai a Google ↗
          </span>
        </a>
      </div>
    </section>
  );
}
