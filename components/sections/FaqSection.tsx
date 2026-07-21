"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Come si svolge una consulenza tipo?",
    a: "Solitamente parte con un primo confronto gratuito per capire il contesto. Poi si definisce l'attività — un audit, un affiancamento o una consulenza continuativa — con obiettivi chiari e tempi realistici. Ogni consulenza è personalizzata sul contesto.",
  },
  {
    q: "Quanto costa una consulenza?",
    a: "Il costo dipende dal tipo di intervento, dalla durata e dalla profondità dell'analisi. Dopo il primo confronto invio una proposta scritta con perimetro, tempi e importo. Nessun preventivo “standard” senza aver capito il contesto.",
  },
  {
    q: "Lavori solo in italiano o anche all'estero?",
    a: "L'attività principale è in italiano, in Italia. Per progetti internazionali valuto caso per caso in funzione della complessità linguistica richiesta.",
  },
  {
    q: "Qual è la differenza tra la consulenza e DT E-commerce Consulting?",
    a: "Come consulente indipendente offro analisi, strategia e affiancamento. DT E-commerce Consulting — di cui sono cofondatore con Tiziana Tana — è la struttura operativa che sviluppa e gestisce i progetti e-commerce. Sono due ruoli complementari, con obiettivi diversi.",
  },
  {
    q: "Come iniziamo a lavorare insieme?",
    a: "Il modo più semplice è scrivermi attraverso il modulo contatti o via email. In 1-2 giorni lavorativi rispondo per capire se e come posso essere utile, e proponiamo un primo confronto.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-section bg-ink-900">
      <Container>
        <div className="grid md:grid-cols-[380px_1fr] gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left: title */}
          <div className="md:sticky md:top-32">
            <FadeIn>
              <SectionLabel className="mb-6 block">FAQ</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-display-lg text-paper-50 mb-8 tracking-tight text-balance">
                Domande
                <br />
                frequenti.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-paper-400 text-sm leading-relaxed mb-8 max-w-xs">
                Non trovi quello che cerchi? Scrivimi direttamente: rispondo
                personalmente in 1-2 giorni.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button href="/contatti" size="md" variant="celeste">
                Parliamone
              </Button>
            </FadeIn>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col divide-y divide-ink-700">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <FadeIn key={i} delay={0.1 + i * 0.05}>
                  <div>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-6 md:py-7 flex items-start justify-between gap-4 text-left group"
                    >
                      <span className="text-paper-50 text-lg md:text-xl font-medium leading-snug tracking-tight pr-4">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-celeste-500 text-ink-900"
                            : "bg-ink-800 text-paper-300 group-hover:bg-ink-700"
                        }`}
                      >
                        <Plus size={16} strokeWidth={2} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-paper-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
