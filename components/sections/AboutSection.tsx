"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-section bg-ink-900">
      <Container>
        <FadeIn>
          <SectionLabel className="mb-6 block">Chi sono</SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-display-lg text-paper-50 mb-16 max-w-3xl text-balance">
            Consulenza e formazione indipendenti per l&apos;e-commerce, con oltre
            vent&apos;anni di esperienza diretta.
          </h2>
        </FadeIn>

        {/* Row: portrait card + big photo + dashboard mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Portrait + quote card */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden bg-ink-800 aspect-[3/4]">
              <MediaPlaceholder
                ratio="3/4"
                label="Dario al lavoro"
                description="Fotografia editoriale, tono naturale"
                className="absolute inset-0 h-full !pt-0 rounded-none border-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-paper-100 text-sm leading-relaxed italic">
                  &ldquo;Il metodo di Dario ha portato chiarezza in un progetto
                  fermo da mesi.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Center: big generic photo */}
          <FadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden bg-ink-800 aspect-[3/4]">
              <MediaPlaceholder
                ratio="3/4"
                label="Ambienti professionali"
                description="Fotografia contesto lavorativo — meeting, aula, ufficio"
                className="h-full !pt-0 rounded-none border-0"
              />
            </div>
          </FadeIn>

          {/* Right: performance dashboard mockup */}
          <FadeIn delay={0.4}>
            <div className="rounded-2xl bg-ink-800 border border-ink-700 aspect-[3/4] p-5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-ink-700 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-celeste-500" />
                  </div>
                  <span className="text-paper-100 text-sm font-medium">Analisi</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-paper-500" />
                  <div className="w-1 h-1 rounded-full bg-paper-500" />
                  <div className="w-1 h-1 rounded-full bg-paper-500" />
                </div>
              </div>

              {/* Fake chart */}
              <div className="flex-1 flex flex-col justify-center py-8">
                <div className="text-paper-400 text-xs font-mono mb-2">CONVERSIONE</div>
                <div className="text-paper-50 text-2xl font-medium mb-4">+18,4%</div>
                <svg viewBox="0 0 200 60" className="w-full h-16">
                  <motion.path
                    d="M0,45 L20,42 L40,38 L60,35 L80,30 L100,25 L120,22 L140,18 L160,15 L180,12 L200,10"
                    stroke="#31C6F2"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
                  />
                  <motion.circle
                    cx="200"
                    cy="10"
                    r="4"
                    fill="#31C6F2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-paper-500">
                <span>M1</span>
                <span>M6</span>
                <span>M12</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 5.0 rating bar */}
        <FadeIn delay={0.5}>
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5">
              <Star size={18} className="text-celeste-500 fill-celeste-500" />
              <span className="text-paper-50 text-xl font-medium">4,9</span>
            </div>
            <span className="text-paper-400 text-sm">
              Media su oltre 200 recensioni verificate
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
