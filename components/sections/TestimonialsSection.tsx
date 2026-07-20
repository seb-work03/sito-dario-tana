"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — recensione Google che descriva chiarezza e concretezza della consulenza. 2-3 righe consigliate.]",
    author: "[NOME COGNOME]",
    role: "[RUOLO], [AZIENDA]",
    type: "Consulenza",
  },
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — recensione che parla della qualità della formazione aziendale ricevuta.]",
    author: "[NOME COGNOME]",
    role: "[RUOLO], [AZIENDA]",
    type: "Formazione",
  },
  {
    text: "[TESTIMONIANZA DA SELEZIONARE — recensione da un ente formativo o studente su un corso o master.]",
    author: "[NOME COGNOME]",
    role: "[RUOLO], [ENTE]",
    type: "Docenza",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-section bg-ink-900">
      <Container>
        <div className="bg-celeste-panel rounded-3xl p-6 md:p-10 lg:p-14 relative overflow-hidden">
          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <filter id="n2">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
              </filter>
              <rect width="100%" height="100%" filter="url(#n2)" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Header row */}
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
                <div>
                  <SectionLabel variant="light" className="mb-4 block !text-paper-50/70">
                    Testimonianze
                  </SectionLabel>
                  <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance leading-[1.05]">
                    Cosa dice chi ha
                    <br />
                    lavorato con Dario.
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full bg-paper-50/15 hover:bg-paper-50/25 text-paper-50 flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Testimonianza precedente"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full bg-paper-50/15 hover:bg-paper-50/25 text-paper-50 flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Testimonianza successiva"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Big white quote card */}
            <div className="grid md:grid-cols-[220px_1fr] gap-6 items-stretch">
              {/* Photo card */}
              <FadeIn delay={0.1}>
                <div className="rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-full bg-paper-100">
                  <MediaPlaceholder
                    ratio="1/1"
                    variant="light"
                    label="Foto testimonianza"
                    description="Ritratto professionale di chi ha rilasciato la testimonianza — sostituire con foto reale"
                    className="h-full !pt-0 rounded-none border-0"
                  />
                </div>
              </FadeIn>

              {/* Quote card */}
              <FadeIn delay={0.2}>
                <div className="bg-paper-50 rounded-2xl p-8 md:p-10 lg:p-12 relative min-h-[280px] flex flex-col justify-between">
                  <Quote size={40} className="text-ink-900 mb-4 shrink-0" strokeWidth={1.5} />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                      className="flex-1 flex flex-col justify-between gap-8"
                    >
                      <p className="text-ink-900 text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-balance">
                        &ldquo;{current.text}&rdquo;
                      </p>

                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-ink-900 font-medium text-base">
                            {current.author}
                          </p>
                          <p className="text-paper-600 text-sm mt-0.5">{current.role}</p>
                        </div>
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-celeste-700 bg-celeste-50 px-3 py-1.5 rounded-full">
                          {current.type}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>

            {/* Dots */}
            <FadeIn delay={0.3}>
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index ? "bg-paper-50 w-8" : "bg-paper-50/40 w-1.5 hover:bg-paper-50/60"
                    )}
                    aria-label={`Vai alla testimonianza ${i + 1}`}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
