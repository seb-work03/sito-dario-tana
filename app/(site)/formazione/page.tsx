import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { FadeIn } from "@/components/animations/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { safeFind } from "@/lib/payload";
import { formatDate } from "@/lib/utils";
import { GraduationCap, MapPin, Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Formazione e docenza",
  description:
    "Percorsi di formazione aziendale su misura e attività di docenza per università, business school, master ed enti formativi.",
};

const statusLabels: Record<string, string> = {
  evergreen: "Sempre disponibile",
  "coming-soon": "Prossimamente",
  open: "Iscrizioni aperte",
  full: "Completo",
  past: "Concluso",
};

export default async function FormazionePage() {
  const [coursesRes, teachingRes] = await Promise.all([
    safeFind({
      collection: "courses",
      where: { status: { not_equals: "past" } },
      sort: "-date",
      limit: 12,
    }),
    safeFind({
      collection: "teaching-experiences",
      where: { published: { equals: true } },
      sort: "-date",
      limit: 20,
    }),
  ]);

  const courses = coursesRes.docs;
  const teaching = teachingRes.docs;

  return (
    <>
      <PageHero
        eyebrow="Formazione e docenza"
        title="Portare autonomia decisionale dentro i team, nelle aule e nei master."
        description="Due attività distinte che condividono lo stesso metodo: contenuti concreti, costruiti sull'esperienza diretta, non su teoria generica."
      />

      <section id="formazione-aziendale" className="py-section bg-ink-900 border-t border-ink-800 scroll-mt-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
            <FadeIn>
              <SectionLabel className="mb-6 block">Formazione aziendale</SectionLabel>
              <h2 className="font-display text-display-lg text-paper-50 text-balance mb-6">
                Percorsi disegnati sui bisogni reali del team.
              </h2>
              <p className="text-paper-400 text-base md:text-lg leading-relaxed max-w-lg">
                Non corsi standard: ogni percorso formativo nasce da un confronto
                iniziale con l&apos;azienda per capire competenze presenti,
                lacune reali e obiettivi. L&apos;obiettivo è rendere il team più
                autonomo nelle decisioni quotidiane sul progetto e-commerce.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="flex flex-col divide-y divide-ink-800 border-t border-ink-800">
                {[
                  "Analisi delle competenze e degli obiettivi del team",
                  "Programma personalizzato su temi e strumenti realmente usati",
                  "Formazione in presenza, online o in modalità ibrida",
                  "Materiali e riferimenti riutilizzabili dopo il percorso",
                ].map((item) => (
                  <li key={item} className="py-4 flex items-start gap-3 text-paper-300 text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-celeste-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section id="docenza" className="py-section bg-ink-900 border-t border-ink-800 scroll-mt-24">
        <Container>
          <FadeIn>
            <SectionLabel className="mb-6 block">Docenza</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance mb-6">
              Interventi per università, master ed enti di formazione.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-paper-400 text-base md:text-lg leading-relaxed max-w-xl mb-12">
              Porto in aula la stessa esperienza diretta che guida la consulenza:
              casi reali, strumenti operativi e un approccio pratico ai temi
              dell&apos;e-commerce, della strategia digitale e dell&apos;analisi dei
              dati.
            </p>
          </FadeIn>

          {teaching.length === 0 ? (
            <EmptyState
              title="Elenco delle esperienze di docenza in aggiornamento"
              description="Gli enti e i percorsi di docenza verranno pubblicati qui a breve, gestiti direttamente dal pannello di amministrazione."
            />
          ) : (
            <div className="flex flex-col divide-y divide-ink-800 border-t border-ink-800">
              {teaching.map((t) => (
                <div key={t.id} className="py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-paper-500 text-xs font-mono w-28 shrink-0">
                    {t.date ? formatDate(t.date) : "—"}
                  </span>
                  <div className="flex-1">
                    <p className="text-paper-50 font-medium">{t.organization}</p>
                    {t.topic && <p className="text-paper-400 text-sm mt-0.5">{t.topic}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container>
          <FadeIn>
            <SectionLabel className="mb-6 block">Corsi e workshop in programma</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-display-lg text-paper-50 max-w-2xl text-balance mb-12">
              Calendario aggiornato.
            </h2>
          </FadeIn>

          {courses.length === 0 ? (
            <EmptyState
              title="Nessun corso in programma al momento"
              description="I prossimi workshop e corsi verranno pubblicati qui. Per un percorso su misura per il tuo team, scrivimi direttamente."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {courses.map((c) => (
                <div key={c.id} className="rounded-2xl border border-ink-700 bg-ink-800/50 p-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-celeste-500 bg-celeste-500/10 px-3 py-1 rounded-full">
                      {c.type}
                    </span>
                    <span className="text-paper-500 text-xs">
                      {statusLabels[c.status ?? "evergreen"]}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-paper-50 tracking-tight">{c.title}</h3>
                  {c.description && (
                    <p className="text-paper-400 text-sm leading-relaxed">{c.description}</p>
                  )}
                  <div className="flex flex-col gap-1.5 text-paper-500 text-xs mt-auto pt-2">
                    {c.duration && (
                      <span className="flex items-center gap-2">
                        <Clock size={13} /> {c.duration}
                      </span>
                    )}
                    {c.location && (
                      <span className="flex items-center gap-2">
                        <MapPin size={13} /> {c.location}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-section bg-ink-900 border-t border-ink-800">
        <Container size="md" className="text-center">
          <FadeIn>
            <div className="w-12 h-12 rounded-full bg-celeste-500/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={20} className="text-celeste-500" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-display-md text-paper-50 text-balance mb-6">
              Organizzi un percorso formativo o un intervento di docenza?
            </h2>
            <p className="text-paper-400 leading-relaxed mb-8 max-w-md mx-auto">
              Scrivimi con i dettagli — ente, argomento e tempistiche — e ti
              risponderò personalmente per valutare la proposta.
            </p>
            <Button href="/contatti" size="lg" variant="celeste">
              Scrivimi
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
