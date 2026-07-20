"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const useCases = [
  { label: "Devo avviare un e-commerce e non so da dove iniziare", service: "Consulenza", href: "/consulenza" },
  { label: "Il mio e-commerce non raggiunge i risultati previsti", service: "Consulenza", href: "/consulenza" },
  { label: "Devo scegliere o cambiare piattaforma", service: "Consulenza", href: "/consulenza" },
  { label: "Non so quali attività abbiano la priorità in questo momento", service: "Consulenza", href: "/consulenza" },
  { label: "I fornitori mi danno indicazioni contrastanti", service: "Consulenza", href: "/consulenza" },
  { label: "Il team ha bisogno di formazione sull'e-commerce", service: "Formazione", href: "/formazione" },
  { label: "I dati ci sono, ma non riusciamo a leggerli in modo utile", service: "Consulenza", href: "/consulenza" },
  { label: "Devo valutare un preventivo o un investimento importante", service: "Consulenza", href: "/consulenza" },
  { label: "Cerco un docente esperto per un corso o un master", service: "Docenza", href: "/docenza" },
  { label: "Devo preparare un piano di crescita per i prossimi mesi", service: "Consulenza", href: "/consulenza" },
];

export function UseCasesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-section">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <MonoLabel className="mb-3 block">Quando posso aiutare</MonoLabel>
            <h2 className="font-display text-display-md text-text-primary mb-4">
              Riconosci la tua situazione?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Ogni e-commerce ha una storia diversa. Leggi le situazioni qui accanto: se una ti
              rispecchia, è probabile che un confronto possa essere utile.
            </p>
          </div>

          <div>
            <ul className="flex flex-col divide-y divide-border-neutral">
              {useCases.map((uc, i) => (
                <li key={i}>
                  <a
                    href={uc.href}
                    className={cn(
                      "group flex items-center justify-between gap-4 py-4 px-2 rounded-lg transition-all duration-200",
                      hovered === i ? "bg-surface-primary -mx-2 px-4" : ""
                    )}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span
                      className={cn(
                        "text-sm leading-relaxed transition-colors duration-200",
                        hovered === i ? "text-text-primary" : "text-text-secondary"
                      )}
                    >
                      {uc.label}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <MonoLabel
                        className={cn(
                          "transition-opacity duration-200",
                          hovered === i ? "opacity-100" : "opacity-0"
                        )}
                        accent
                      >
                        {uc.service}
                      </MonoLabel>
                      <ArrowRight
                        size={14}
                        className={cn(
                          "text-accent-primary transition-all duration-200",
                          hovered === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        )}
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/contatti" variant="secondary">
                Parlami della tua situazione <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
