import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import {
  BarChart3,
  Compass,
  LayoutGrid,
  Search,
  Megaphone,
  LineChart,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Consulenza e-commerce, strategia digitale, progettazione e sviluppo, SEO, advertising, analisi dei dati e corsi operativi per aziende e team.",
};

const consulenza = [
  {
    icon: Compass,
    title: "Consulenza e-commerce",
    description:
      "Analisi indipendente del progetto, definizione delle priorità e supporto nelle decisioni strategiche: piattaforma, offerta, organizzazione.",
  },
  {
    icon: BarChart3,
    title: "Strategia digitale",
    description:
      "Impostazione o revisione della strategia digitale complessiva, con attenzione a coerenza tra canali, obiettivi di business e risorse disponibili.",
  },
  {
    icon: LayoutGrid,
    title: "Progettazione e sviluppo",
    description:
      "Supporto nella scelta della piattaforma e-commerce, nella definizione dei requisiti e nel coordinamento tecnico di un nuovo progetto o di una migrazione.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Audit e impostazione della strategia di visibilità organica: architettura del sito, contenuti, aspetti tecnici che influenzano il posizionamento.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Revisione della strategia di advertising a pagamento, coerenza tra canali e budget, valutazione critica dei risultati riportati dalle agenzie.",
  },
  {
    icon: LineChart,
    title: "Analisi dei dati",
    description:
      "Impostazione di cruscotti e indicatori utili a decidere, distinguendo i dati che contano da quelli che distraggono.",
  },
];

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="Servizi"
        title="Consulenza indipendente per decisioni e-commerce più consapevoli."
        description="Ogni servizio nasce dalla stessa base: esperienza diretta, indipendenza di giudizio e attenzione al contesto reale del progetto."
      />

      <section id="consulenza" className="py-section bg-ink-900 border-t border-ink-800 scroll-mt-24">
        <Container>
          <FadeIn>
            <SectionLabel className="mb-6 block">Ambiti di consulenza</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance mb-16">
              Dall&apos;analisi alla decisione,
              <br />
              con metodo.
            </h2>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {consulenza.map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-2xl border border-ink-700 bg-ink-800/50 p-7 hover:border-celeste-500/50 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-full bg-ink-700 flex items-center justify-center mb-6">
                    <s.icon size={18} className="text-celeste-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-paper-50 mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-paper-400 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section id="corsi" className="py-section bg-ink-900 border-t border-ink-800 scroll-mt-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <SectionLabel className="mb-6 block">Corsi e workshop</SectionLabel>
                <h2 className="font-display text-display-lg text-paper-50 text-balance mb-6">
                  Incontri operativi su temi specifici.
                </h2>
                <p className="text-paper-400 text-base md:text-lg leading-relaxed max-w-lg">
                  Accanto alla consulenza continuativa, propongo corsi e workshop
                  mirati su singoli temi operativi — dalla scelta della piattaforma
                  all&apos;impostazione dell&apos;analisi dei dati — pensati per team
                  che vogliono acquisire autonomia su un argomento specifico in tempi
                  brevi.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-ink-700 bg-ink-800/50 p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-celeste-500/10 flex items-center justify-center">
                    <GraduationCap size={16} className="text-celeste-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-paper-100 font-medium">Calendario corsi</span>
                </div>
                <p className="text-paper-400 text-sm leading-relaxed">
                  Il calendario aggiornato di workshop e corsi in programma è
                  disponibile nella sezione{" "}
                  <a href="/formazione" className="text-celeste-500 hover:underline underline-offset-4">
                    Formazione e docenza
                  </a>
                  . Per un percorso su misura per il tuo team, scrivimi direttamente.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container size="md" className="text-center">
          <FadeIn>
            <h2 className="font-display text-display-md text-paper-50 text-balance mb-6">
              Raccontami il tuo progetto.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-paper-400 leading-relaxed mb-8 max-w-md mx-auto">
              Un primo confronto per capire il contesto e valutare insieme se e come
              posso esserti utile.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button href="/contatti" size="lg" variant="celeste">
              Parliamone
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
