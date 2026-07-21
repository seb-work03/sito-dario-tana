"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Consulenza e-commerce",
    description:
      "Analisi indipendente del progetto, definizione delle priorità e supporto nelle decisioni strategiche più importanti.",
    href: "/servizi#consulenza",
  },
  {
    number: "02",
    title: "Formazione aziendale",
    description:
      "Percorsi disegnati sui bisogni reali del team, non corsi standard. Per rendere l'azienda più autonoma.",
    href: "/formazione#formazione-aziendale",
  },
  {
    number: "03",
    title: "Docenza",
    description:
      "Interventi per università, master, business school ed enti di formazione professionale.",
    href: "/formazione#docenza",
  },
  {
    number: "04",
    title: "Corsi e workshop",
    description:
      "Incontri operativi su temi specifici — dalla scelta piattaforma all'analisi dei dati.",
    href: "/servizi#corsi",
  },
];

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-section bg-ink-900">
      <Container>
        <FadeIn>
          <SectionLabel className="mb-6 block">Cosa faccio</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance">
              Quattro ambiti di lavoro,
              <br />
              un solo filo conduttore.
            </h2>
            <p className="text-paper-400 max-w-sm text-sm leading-relaxed">
              Ogni servizio nasce dalla stessa base: esperienza diretta,
              indipendenza di giudizio e attenzione al contesto reale.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: sticky photo */}
          <FadeIn delay={0.2}>
            <div className="md:sticky md:top-32 rounded-2xl overflow-hidden bg-ink-800 aspect-[4/5]">
              <MediaPlaceholder
                ratio="4/5"
                label="Dario in aula / consulenza"
                description="Fotografia editoriale di Dario mentre lavora — in una consulenza, un workshop o una lezione"
                className="h-full !pt-0 rounded-none border-0"
              />
            </div>
          </FadeIn>

          {/* Right: numbered service list */}
          <Stagger className="flex flex-col divide-y divide-ink-700">
            {services.map((service, i) => (
              <StaggerItem key={service.number}>
                <Link
                  href={service.href}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex gap-6 py-8 first:pt-0 relative"
                >
                  {/* Number in circle */}
                  <div
                    className={cn(
                      "shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 mt-1",
                      hovered === i
                        ? "border-celeste-500 bg-celeste-500/10"
                        : "border-ink-600 bg-transparent"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs transition-colors",
                        hovered === i ? "text-celeste-500" : "text-paper-400"
                      )}
                    >
                      {service.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3
                      className={cn(
                        "text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 mb-2",
                        hovered === i ? "text-celeste-500" : "text-paper-50"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="text-paper-400 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-celeste-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
