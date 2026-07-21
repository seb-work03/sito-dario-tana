"use client";

import { motion } from "framer-motion";
import { AnimatedLabel } from "./AnimatedLabel";

const steps = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Prima capire, poi proporre. Ricostruisco insieme al cliente il contesto: obiettivi, vincoli, dati disponibili, punti dolenti.",
  },
  {
    number: "02",
    title: "Analisi",
    description:
      "Metto ordine tra le informazioni. Identifico le domande importanti, escludo il rumore, evidenzio ciò che serve davvero decidere.",
  },
  {
    number: "03",
    title: "Priorità",
    description:
      "Definisco insieme al cliente cosa affrontare per primo, con quali risorse e con che criteri di verifica.",
  },
  {
    number: "04",
    title: "Azione",
    description:
      "Restituisco un piano operativo comprensibile, con passaggi realistici. Se serve, resto a disposizione durante l'esecuzione.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#0D1218] px-5 py-16 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-[1240px]">
        <AnimatedLabel>IL METODO</AnimatedLabel>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="text-[#EDF2F7] font-medium text-[32px] md:text-[52px] leading-[1.05] max-w-2xl tracking-tight"
          >
            Un processo lineare, ma non rigido.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-[#94A9BE] max-w-sm md:text-right leading-relaxed"
          >
            Ogni progetto è diverso. Il metodo rimane, i tempi e la profondità
            si adattano al contesto.
          </motion.p>
        </div>

        {/* Vertically centered stacked cards — revealed one at a time on scroll */}
        <div className="flex flex-col gap-5 items-center">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.35 } }}
              className="group w-full max-w-[680px] bg-[#17222F] border border-[#253444] hover:border-[#77C0CF]/40 rounded-2xl p-7 md:p-9 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="inline-flex items-center justify-center bg-[#77C0CF] rounded-lg w-10 h-10 shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-[#0D1218] text-sm font-semibold tabular-nums">{s.number}</span>
                </div>
                <div>
                  <h3 className="text-[#EDF2F7] text-2xl font-medium mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-[#94A9BE] text-sm leading-relaxed max-w-xl">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
