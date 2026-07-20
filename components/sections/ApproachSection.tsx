"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const steps = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Partiamo dal contesto: chi decide, quali dati ci sono, cosa si è già provato. La consulenza inizia con l&apos;ascolto, non con la soluzione.",
  },
  {
    number: "02",
    title: "Analisi",
    description:
      "Osservo numeri, processi, piattaforma, offerta e customer journey. Cerco dove la realtà diverge dalle aspettative e perché.",
  },
  {
    number: "03",
    title: "Priorità",
    description:
      "Non tutto è urgente allo stesso modo. Distinguo ciò che blocca la crescita adesso da ciò che può aspettare, con un piano concreto.",
  },
  {
    number: "04",
    title: "Verifica",
    description:
      "Le priorità cambiano, i dati aggiornano il quadro. Continuiamo insieme con confronti periodici e revisioni delle scelte fatte.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-section-lg bg-celeste-500 relative overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <SectionLabel variant="light" className="mb-6 block !text-ink-900/60">
            Il metodo
          </SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-display text-display-lg text-ink-900 max-w-2xl text-balance leading-[1.05]">
              Un approccio consulenziale
              <br />
              in quattro fasi.
            </h2>
            <p className="text-ink-900/80 max-w-sm text-sm leading-relaxed">
              Un percorso che si adatta al contesto: le fasi rimangono, ma la
              profondità e la durata di ognuna cambiano da progetto a progetto.
            </p>
          </div>
        </FadeIn>

        {/* Offset stacked cards — Adviest signature */}
        <div className="relative">
          {/* Desktop: overlapping absolute layout */}
          <div className="hidden md:block relative min-h-[500px]">
            {steps.map((step, i) => {
              const offsets = [
                { top: 0, left: "0%" },
                { top: "120px", left: "22%" },
                { top: 0, left: "50%" },
                { top: "120px", left: "72%" },
              ];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  whileHover={{ y: -8, zIndex: 20 }}
                  className="absolute w-[26%] max-w-[300px]"
                  style={{ top: offsets[i].top, left: offsets[i].left }}
                >
                  <div className="bg-celeste-500 border border-paper-50/40 rounded-2xl p-6 relative shadow-xl hover:border-paper-50/80 transition-colors">
                    <div className="inline-flex items-center justify-center bg-paper-50 rounded-md w-9 h-9 mb-6">
                      <span className="font-mono text-xs text-ink-900 font-medium">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-3xl font-medium text-paper-50 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p
                      className="text-paper-50/85 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-celeste-500 border border-paper-50/40 rounded-2xl p-6"
              >
                <div className="inline-flex items-center justify-center bg-paper-50 rounded-md w-9 h-9 mb-4">
                  <span className="font-mono text-xs text-ink-900 font-medium">{step.number}</span>
                </div>
                <h3 className="text-2xl font-medium text-paper-50 mb-2 tracking-tight">{step.title}</h3>
                <p
                  className="text-paper-50/85 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
