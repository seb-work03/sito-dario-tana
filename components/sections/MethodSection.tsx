"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Ascolto e contesto",
    description:
      "Prima di qualsiasi analisi, è necessario capire l'organizzazione: chi prende le decisioni, quali dati esistono, qual è la storia del progetto e cosa si è già provato.",
  },
  {
    number: "02",
    title: "Analisi",
    description:
      "Osservo numeri, processi, piattaforma, offerta e customer journey. Non per trovare conferme, ma per capire dove la realtà diverge dalle aspettative.",
  },
  {
    number: "03",
    title: "Individuazione delle priorità",
    description:
      "Non tutto è urgente alla stessa misura. Distinguo tra ciò che blocca la crescita adesso e ciò che può aspettare, tenendo conto di risorse, budget e organizzazione.",
  },
  {
    number: "04",
    title: "Definizione delle azioni",
    description:
      "Traduco l'analisi in indicazioni concrete: cosa fare, in quale ordine, con quali risorse, e quali risultati aspettarsi in modo realistico.",
  },
  {
    number: "05",
    title: "Affiancamento",
    description:
      "Posso continuare a seguire il progetto durante l'implementazione: confronti periodici, revisione delle scelte, supporto nelle decisioni che emergono lungo il percorso.",
  },
  {
    number: "06",
    title: "Verifica",
    description:
      "Le priorità cambiano, i dati aggiornano il quadro. La verifica serve a capire se la direzione è quella giusta e se serve correggere la rotta.",
  },
];

export function MethodSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="py-section">
      <Container>
        <div className="mb-16">
          <MonoLabel className="mb-3 block">Come lavoro</MonoLabel>
          <h2 className="font-display text-display-md text-text-primary max-w-xl">
            Un processo che si adatta, non un modello rigido.
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl leading-relaxed">
            Ogni progetto ha una storia diversa. Il metodo rimane lo stesso, ma il percorso si
            costruisce in funzione di chi ho davanti e di cosa ha senso fare in quel momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps list — scrollable */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div
                    className={cn(
                      "absolute left-3.5 top-4 bottom-0 w-px transition-colors duration-500",
                      activeStep > i ? "bg-accent-primary/40" : "bg-border-neutral"
                    )}
                  />
                )}

                {/* Dot */}
                <div
                  className={cn(
                    "absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    activeStep === i
                      ? "border-accent-primary bg-accent-primary/10"
                      : activeStep > i
                      ? "border-accent-primary/40 bg-transparent"
                      : "border-border-neutral bg-transparent"
                  )}
                >
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeStep === i ? "bg-accent-primary" : activeStep > i ? "bg-accent-primary/40" : "bg-border-neutral"
                    )}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-text-muted">{step.number}</span>
                    <h3
                      className={cn(
                        "font-semibold text-lg transition-colors duration-300",
                        activeStep === i ? "text-text-primary" : "text-text-secondary"
                      )}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "text-sm leading-relaxed transition-colors duration-300",
                      activeStep === i ? "text-text-secondary" : "text-text-muted"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky visual */}
          <div className="hidden lg:block lg:sticky lg:top-32">
            <div className="rounded-xl border border-border-neutral bg-surface-primary p-8 aspect-square flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Circular progress indicator */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" aria-hidden="true">
                  {steps.map((_, i) => {
                    const angle = (i / steps.length) * 360 - 90;
                    const rad = (angle * Math.PI) / 180;
                    const r = 70;
                    const x = 100 + r * Math.cos(rad);
                    const y = 100 + r * Math.sin(rad);
                    const isActive = i <= activeStep;
                    return (
                      <g key={i}>
                        <circle
                          cx={x}
                          cy={y}
                          r="6"
                          fill={isActive ? "rgba(49,198,242,0.15)" : "rgba(20,37,52,1)"}
                          stroke={isActive ? "#31C6F2" : "rgba(117,220,247,0.18)"}
                          strokeWidth="1.5"
                          style={{ transition: "all 0.4s ease" }}
                        />
                        {i < steps.length - 1 && (
                          <line
                            x1={x}
                            y1={y}
                            x2={100 + r * Math.cos(((i + 1) / steps.length * 360 - 90) * Math.PI / 180)}
                            y2={100 + r * Math.sin(((i + 1) / steps.length * 360 - 90) * Math.PI / 180)}
                            stroke={isActive && activeStep > i ? "#31C6F2" : "rgba(117,220,247,0.18)"}
                            strokeWidth="1"
                            style={{ transition: "stroke 0.4s ease" }}
                          />
                        )}
                      </g>
                    );
                  })}
                  <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(117,220,247,0.06)" strokeWidth="1" />
                </svg>

                {/* Center */}
                <div className="text-center z-10">
                  <span className="font-mono text-accent-primary text-3xl font-semibold">
                    {steps[activeStep].number}
                  </span>
                  <p className="font-display text-text-primary text-lg mt-1">
                    {steps[activeStep].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
