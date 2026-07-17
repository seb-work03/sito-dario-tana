"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "consulenza",
    number: "01",
    title: "Consulenza",
    tagline: "Per analizzare problemi, definire priorità e prendere decisioni più consapevoli.",
    description:
      "Un e-commerce che non raggiunge i risultati attesi raramente ha un solo problema. Lavoro con aziende e imprenditori per individuare le cause reali, stabilire cosa affrontare prima e costruire un piano d'azione concreto.",
    useCases: [
      "Vendite inferiori alle aspettative",
      "Scelta o cambio di piattaforma",
      "Valutazione di fornitori e preventivi",
      "Migrazione in corso",
      "Crescita disordinata",
    ],
    href: "/consulenza",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-3 w-full">
          {["Analisi", "Priorità", "Azione", "Dati", "Processi", "Decisioni"].map((item, i) => (
            <div
              key={item}
              className="border border-border-neutral rounded px-2 py-1.5 text-center"
              style={{ opacity: 0.3 + i * 0.12 }}
            >
              <span className="font-mono text-[10px] text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "formazione",
    number: "02",
    title: "Formazione aziendale",
    tagline: "Per trasferire competenze utili al team e rendere l'azienda più autonoma.",
    description:
      "La formazione che progetto nasce da un'analisi dei bisogni reali dell'organizzazione. Non corsi standard: percorsi costruiti sulle persone che li seguono, sul loro ruolo e sulle decisioni che devono prendere ogni giorno.",
    useCases: [
      "Imprenditori e responsabili",
      "Team marketing e commerciale",
      "Customer care e operatori",
      "Percorsi singoli o continuativi",
      "Online e in presenza",
    ],
    href: "/formazione",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="flex flex-col gap-3 w-full">
          {[80, 60, 90, 45, 70].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded border border-border-neutral flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/40" />
              </div>
              <div
                className="h-1 rounded-full bg-accent-primary/20"
                style={{ width: `${w}%`, opacity: 0.3 + i * 0.1 }}
              />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "docenza",
    number: "03",
    title: "Docenza",
    tagline: "Per enti e organizzazioni che cercano un contributo competente, concreto e aggiornato.",
    description:
      "Collaboro con università, business school, enti di formazione e organizzatori di master per portare in aula l'esperienza diretta del settore. Gli argomenti possono essere adattati al livello dei partecipanti e al contesto del programma.",
    useCases: [
      "Università e business school",
      "Master e corsi specialistici",
      "Enti di formazione professionale",
      "Associazioni di categoria",
      "Lezioni singole o percorsi",
    ],
    href: "/docenza",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-accent-primary/30 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-accent-primary/60" />
          </div>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-surface-secondary border border-border-neutral"
                style={{ opacity: 0.4 + i * 0.12 }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-surface-secondary border border-border-neutral"
                style={{ opacity: 0.3 + i * 0.08 }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "corsi",
    number: "04",
    title: "Corsi e workshop",
    tagline: "Per approfondire argomenti specifici attraverso incontri operativi e personalizzati.",
    description:
      "Workshop, webinar e seminari su temi verticali dell'e-commerce. Incontri più brevi e focalizzati, utili per approfondire un argomento specifico o per formare un gruppo su una competenza precisa.",
    useCases: [
      "Workshop tematici",
      "Webinar e seminari",
      "Sessioni operative",
      "Gruppi aziendali",
      "Percorsi personalizzati",
    ],
    href: "/corsi",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-3 w-full">
          {[
            { label: "Workshop", active: true },
            { label: "Webinar", active: false },
            { label: "Seminario", active: false },
            { label: "Percorso", active: true },
          ].map((item) => (
            <div
              key={item.label}
              className={cn(
                "border rounded p-3 text-center transition-colors",
                item.active
                  ? "border-accent-primary/40 bg-accent-primary/5"
                  : "border-border-neutral"
              )}
            >
              <span className={cn("font-mono text-[10px] uppercase tracking-wide",
                item.active ? "text-accent-primary" : "text-text-muted"
              )}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="py-section bg-background-secondary">
      <Container>
        <div className="mb-12">
          <MonoLabel className="mb-3 block">Cosa faccio</MonoLabel>
          <h2 className="font-display text-display-md text-text-primary">
            Quattro ambiti, un solo filo conduttore.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: service list */}
          <div className="flex flex-col gap-2">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActive(i)}
                className={cn(
                  "group text-left px-5 py-5 rounded-lg border transition-all duration-200",
                  active === i
                    ? "border-accent-primary/40 bg-surface-primary"
                    : "border-transparent hover:border-border-neutral hover:bg-surface-primary/50"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-text-muted pt-0.5 shrink-0">{service.number}</span>
                    <div>
                      <h3 className={cn(
                        "font-semibold text-lg mb-1 transition-colors",
                        active === i ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                      )}>
                        {service.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">{service.tagline}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className={cn(
                      "shrink-0 mt-1 transition-all",
                      active === i ? "text-accent-primary translate-x-0.5" : "text-text-muted opacity-0 group-hover:opacity-100"
                    )}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl border border-border-neutral bg-surface-primary overflow-hidden">
              {/* Visual area */}
              <div className="h-48 border-b border-border-neutral bg-surface-secondary">
                {current.visual}
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-text-secondary leading-relaxed mb-6">{current.description}</p>

                <div className="mb-6">
                  <MonoLabel className="mb-3 block">Quando è utile</MonoLabel>
                  <ul className="flex flex-col gap-2">
                    {current.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-accent-primary shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 text-accent-primary text-sm font-medium hover:text-accent-light transition-colors"
                >
                  Approfondisci <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
