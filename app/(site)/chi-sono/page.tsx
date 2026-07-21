import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Dario Tana — consulente e-commerce indipendente e docente. Percorso, metodo di lavoro e ambiti di attività.",
};

const principles = [
  {
    number: "01",
    title: "Indipendenza di giudizio",
    description:
      "Nessun legame con piattaforme, fornitori o agenzie da consigliare. Le indicazioni nascono solo dall'analisi del contesto specifico.",
  },
  {
    number: "02",
    title: "Esperienza diretta",
    description:
      "Il punto di vista nasce da anni di lavoro concreto sul commercio elettronico, non da teoria applicata a posteriori.",
  },
  {
    number: "03",
    title: "Chiarezza prima della soluzione",
    description:
      "Prima si capisce il problema, poi si decide cosa fare. Ogni intervento parte da un'analisi onesta della situazione reale.",
  },
  {
    number: "04",
    title: "Trasferire competenza",
    description:
      "L'obiettivo non è rendere un'azienda dipendente dal consulente, ma più autonoma nelle decisioni successive.",
  },
];

export default function ChiSonoPage() {
  return (
    <>
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-ink-900">
        <Container>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
            <FadeIn>
              <div className="rounded-3xl overflow-hidden bg-ink-800 aspect-[4/5]">
                <MediaPlaceholder
                  ratio="4/5"
                  label="Ritratto Dario Tana"
                  description="Fotografia editoriale, ambiente naturale, tono professionale"
                  className="h-full !pt-0 rounded-none border-0"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <SectionLabel className="mb-6 block">Chi sono</SectionLabel>
              </FadeIn>
              <h1 className="font-display text-display-xl text-paper-50 leading-[1.05] text-balance mb-6">
                <RevealText delay={0.2}>Dario Tana.</RevealText>
              </h1>
              <FadeIn delay={0.3}>
                <p className="text-paper-300 text-base md:text-lg leading-relaxed max-w-xl">
                  Consulente e-commerce indipendente e docente, con oltre vent&apos;anni di
                  esperienza diretta nel commercio elettronico. Cofondatore, insieme a
                  Tiziana Tana, di DT E-Commerce Consulting.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-8">
                  <Button href="/contatti" size="lg" variant="celeste">
                    Parliamo del tuo progetto
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container size="lg">
          <FadeIn>
            <SectionLabel className="mb-6 block">Il percorso</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance mb-8">
              Vent&apos;anni nel commercio elettronico, da dentro.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-2xl flex flex-col gap-5 text-paper-300 text-base md:text-lg leading-relaxed">
              <p>
                Il mio percorso professionale si è costruito interamente dentro
                l&apos;e-commerce: progetti seguiti in prima persona, decisioni prese
                sul campo, errori corretti e strategie messe alla prova nel tempo.
                Questa esperienza diretta — non teorica — è il punto di partenza di
                ogni consulenza e di ogni lezione che tengo.
              </p>
              <p>
                Insieme a Tiziana Tana ho fondato{" "}
                <a
                  href="https://www.dtecommerce.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-100 hover:text-celeste-500 transition-colors underline underline-offset-4 decoration-ink-600 hover:decoration-celeste-500"
                >
                  DT E-Commerce Consulting
                </a>
                , la struttura che sviluppa e gestisce operativamente progetti
                e-commerce. Accanto a questo ruolo, offro consulenza indipendente,
                formazione aziendale e attività di docenza: tre attività distinte,
                che condividono lo stesso metodo e la stessa esperienza di base.
              </p>
              <p>
                Oggi il mio lavoro si divide tra affiancamento diretto ad aziende e
                imprenditori, percorsi di formazione su misura per i team e docenza
                presso enti e organizzazioni formative su temi di e-commerce,
                strategia digitale e analisi dei dati.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container>
          <FadeIn>
            <SectionLabel className="mb-6 block">Come lavoro</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance mb-16">
              Quattro principi che guidano
              <br />
              ogni collaborazione.
            </h2>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 gap-px bg-ink-800 rounded-2xl overflow-hidden">
            {principles.map((p) => (
              <StaggerItem key={p.number}>
                <div className="bg-ink-900 p-8 md:p-10 h-full">
                  <span className="font-mono text-xs text-celeste-500 tracking-widest">
                    {p.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-paper-50 mt-4 mb-3 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-paper-400 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
