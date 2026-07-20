"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

const engagements = [
  {
    title: "Audit strategico",
    description:
      "Analisi completa del progetto e-commerce: modello di business, offerta, piattaforma, dati, organizzazione.",
    photo: "Meeting di lavoro con team aziendale, mani che indicano documenti su tavolo",
    align: "left",
  },
  {
    title: "Affiancamento continuativo",
    description:
      "Supporto periodico nelle decisioni strategiche e nel coordinamento delle attività quotidiane.",
    photo: "Skyline di città moderna, edifici corporate al tramonto",
    align: "right",
  },
  {
    title: "Scelta e migrazione piattaforma",
    description:
      "Analisi tecnica e commerciale per orientare la scelta della piattaforma e-commerce, o accompagnare una migrazione in corso.",
    photo: "Schermata di dashboard e-commerce, dettagli tecnici",
    align: "left",
  },
  {
    title: "Formazione del team",
    description:
      "Percorsi formativi personalizzati per portare autonomia decisionale nelle persone che gestiscono il progetto.",
    photo: "Aula con partecipanti attenti, docente al centro",
    align: "right",
  },
];

export function EngagementsSection() {
  return (
    <section className="py-section bg-ink-900">
      <Container>
        <FadeIn>
          <SectionLabel className="mb-6 block">Ambiti di intervento</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-display-lg text-paper-50 mb-16 md:mb-24 max-w-3xl text-balance">
            Progetti concreti,
            <br />
            con obiettivi chiari.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16 md:gap-24">
          {engagements.map((eng, i) => (
            <div
              key={eng.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                eng.align === "right" ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="rounded-2xl overflow-hidden bg-ink-800 aspect-[4/3]"
              >
                <MediaPlaceholder
                  ratio="4/3"
                  label={`Foto ${i + 1}`}
                  description={eng.photo}
                  className="h-full !pt-0 rounded-none border-0"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-celeste-500 tracking-widest">
                    {`0${i + 1}`.slice(-2)}
                  </span>
                  <div className="h-px flex-1 max-w-[60px] bg-ink-600" />
                </div>
                <h3 className="font-display text-display-md text-paper-50 mb-4 tracking-tight text-balance">
                  {eng.title}
                </h3>
                <p className="text-paper-400 text-base md:text-lg leading-relaxed max-w-md">
                  {eng.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
