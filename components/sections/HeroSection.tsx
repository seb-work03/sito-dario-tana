"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { motion } from "framer-motion";
import { RevealText } from "@/components/animations/RevealText";

export function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-ink-900">
      <Container>
        {/* Big celeste card container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative bg-celeste-panel rounded-3xl overflow-hidden"
        >
          {/* Grid inside card */}
          <div className="grid md:grid-cols-[1.4fr_1fr] min-h-[520px] md:min-h-[600px]">
            {/* Left: Big headline overlaid + photo bg */}
            <div className="relative p-8 md:p-12 lg:p-14 flex flex-col justify-between min-h-[420px] md:min-h-0">
              {/* Portrait photo */}
              <div className="absolute inset-0 z-0">
                <MediaPlaceholder
                  ratio="4/5"
                  label="Ritratto Dario Tana"
                  description="Ritratto professionale in ambiente naturale, tono editoriale, luce laterale"
                  className="absolute inset-0 h-full !pt-0 rounded-none border-0"
                  variant="dark"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-celeste-700/70 via-celeste-600/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-celeste-500/40 to-transparent" />
              </div>

              {/* Headline text */}
              <div className="relative z-10">
                <motion.h1
                  className="font-display text-hero text-paper-50 tracking-tight leading-[0.95]"
                  style={{ fontWeight: 500 }}
                >
                  <RevealText delay={0.3}>Consulenza</RevealText>
                  <br />
                  <RevealText delay={0.4}>E-commerce</RevealText>
                  <br />
                  <RevealText delay={0.5}>indipendente.</RevealText>
                </motion.h1>
              </div>

              {/* Bottom-left small bracket label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="relative z-10 flex items-center gap-2 mt-8"
              >
                <div className="w-2 h-2 rounded-full bg-paper-50" />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper-50/90">
                  Dario Tana &nbsp;·&nbsp; Consulente &amp; Docente
                </span>
              </motion.div>
            </div>

            {/* Right: description + CTA on darker celeste area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative bg-celeste-600/40 backdrop-blur-sm p-8 md:p-10 lg:p-12 flex flex-col justify-between gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-celeste-400/30"
            >
              <p className="text-paper-50 text-base md:text-lg leading-relaxed">
                Aiuto aziende, imprenditori e responsabili e-commerce a{" "}
                <span className="text-paper-50 font-medium">
                  analizzare i problemi, definire le priorità e prendere decisioni
                </span>{" "}
                più consapevoli — con oltre vent&apos;anni di esperienza diretta nel commercio elettronico.
              </p>

              <div className="flex flex-col gap-3">
                <Button href="/contatti" size="lg" variant="white">
                  Parliamo del tuo progetto
                </Button>
                <Button href="/chi-sono" size="lg" variant="ghost" showArrow={false} className="text-paper-50 hover:bg-paper-50/10 pl-6 pr-6">
                  Scopri il mio percorso →
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
