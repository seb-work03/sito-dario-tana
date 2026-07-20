"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const audiences = [
  {
    id: "imprenditori",
    label: "Per imprenditori",
    title: "Chi guida un&apos;azienda con un e-commerce",
    description:
      "Titolari e founder che devono decidere dove investire, quale direzione dare al progetto, come valutare fornitori e opportunità di crescita.",
    bullets: [
      "Scelte di piattaforma e stack tecnologico",
      "Priorità di investimento",
      "Valutazione di preventivi e fornitori",
      "Piani di crescita realistici",
    ],
  },
  {
    id: "responsabili",
    label: "Per responsabili e-commerce",
    title: "Chi gestisce operativamente il canale",
    description:
      "E-commerce manager, marketing manager e digital manager che cercano un confronto senior indipendente per decisioni strategiche.",
    bullets: [
      "Audit indipendente del progetto",
      "Supporto nelle decisioni difficili",
      "Revisione dei processi interni",
      "Coordinamento tra fornitori e team",
    ],
  },
  {
    id: "enti",
    label: "Per enti e docenti",
    title: "Chi organizza formazione o eventi",
    description:
      "Università, business school, master, enti formativi e organizzatori di eventi che cercano un docente esperto e concreto.",
    bullets: [
      "Docenza in master ed executive program",
      "Interventi in eventi e conferenze",
      "Percorsi formativi personalizzati",
      "Workshop e seminari verticali",
    ],
  },
];

export function AudienceSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-section bg-ink-900">
      <Container>
        <FadeIn>
          <SectionLabel className="mb-6 block">Con chi lavoro</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-display-lg text-paper-50 mb-16 max-w-3xl text-balance">
            Progetti diversi,
            <br />
            metodo condiviso.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Left: tabs stack */}
          <div className="flex flex-col gap-3">
            {audiences.map((aud, i) => (
              <button
                key={aud.id}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left px-6 py-5 rounded-xl border transition-all duration-300 group",
                  active === i
                    ? "bg-celeste-500 border-celeste-500 text-ink-900"
                    : "bg-ink-800 border-ink-700 text-paper-100 hover:border-ink-600 hover:bg-ink-700"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={cn(
                    "text-xl md:text-2xl font-medium tracking-tight",
                  )}>
                    {aud.label}
                  </span>
                  <motion.div
                    animate={{ rotate: active === i ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                      active === i ? "bg-ink-900 text-paper-50" : "bg-ink-700 text-paper-300"
                    )}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6h6M6 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: dynamic content */}
          <div className="relative rounded-2xl overflow-hidden bg-ink-800 border border-ink-700 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="grid grid-rows-[auto_1fr] h-full"
              >
                <div className="aspect-[16/9] relative bg-ink-850">
                  <MediaPlaceholder
                    ratio="16/9"
                    label={`Foto ${audiences[active].label}`}
                    description="Fotografia contesto lavorativo pertinente al pubblico selezionato"
                    className="h-full !pt-0 rounded-none border-0"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3
                    className="text-2xl md:text-3xl font-medium text-paper-50 mb-4 tracking-tight"
                    dangerouslySetInnerHTML={{ __html: audiences[active].title }}
                  />
                  <p className="text-paper-400 text-sm md:text-base leading-relaxed mb-5">
                    {audiences[active].description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {audiences[active].bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-paper-300 text-sm">
                        <div className="w-1 h-1 rounded-full bg-celeste-500 mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
