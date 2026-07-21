import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, ExternalLink, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivi a Dario Tana per una consulenza e-commerce, un percorso di formazione o un intervento di docenza. Risposta personale in 1-2 giorni lavorativi.",
};

export default function ContattiPage() {
  return (
    <section className="pt-32 md:pt-40 pb-section bg-ink-900">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <FadeIn>
              <SectionLabel className="mb-6 block">Contatti</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-display-xl text-paper-50 text-balance leading-[1.05] mb-6">
                Raccontami il tuo contesto.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-paper-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Che si tratti di una consulenza, di un percorso di formazione o di un
                intervento di docenza, il modo più semplice per iniziare è scrivermi
                direttamente. Rispondo personalmente in 1-2 giorni lavorativi.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-5 pt-8 border-t border-ink-800">
                <a
                  href="mailto:info@dariotana.it"
                  className="flex items-center gap-3 text-paper-100 hover:text-celeste-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center shrink-0">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>
                  info@dariotana.it
                </a>
                <a
                  href="https://linkedin.com/in/dariotana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-paper-100 hover:text-celeste-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center shrink-0">
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </div>
                  LinkedIn
                </a>
                <div className="flex items-center gap-3 text-paper-400">
                  <div className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center shrink-0">
                    <Clock size={16} strokeWidth={1.5} />
                  </div>
                  Risposta in 1-2 giorni lavorativi
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-paper-500 text-xs leading-relaxed mt-10 pt-8 border-t border-ink-800 max-w-md">
                Per attività legate a{" "}
                <a
                  href="https://www.dtecommerce.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-300 hover:text-celeste-500 underline underline-offset-4 decoration-ink-600 hover:decoration-celeste-500"
                >
                  DT E-Commerce Consulting
                </a>{" "}
                — la struttura operativa cofondata con Tiziana Tana — contatta
                direttamente il sito dello studio. Questo modulo è dedicato
                all&apos;attività di consulenza, formazione e docenza indipendente.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-ink-700 bg-ink-800/50 p-6 md:p-10">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
