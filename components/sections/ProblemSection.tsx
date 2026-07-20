"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "strategia", label: "Strategia", x: 50, y: 10, desc: "Il posizionamento, il modello di business, gli obiettivi di lungo periodo." },
  { id: "piattaforma", label: "Piattaforma", x: 85, y: 35, desc: "La tecnologia scelta, le sue possibilità e i suoi vincoli." },
  { id: "dati", label: "Dati", x: 72, y: 75, desc: "Analytics, KPI, fonti di dati affidabili e capacità di leggerli." },
  { id: "conversione", label: "Conversione", x: 28, y: 75, desc: "UX, catalogo, prezzi, schede prodotto, checkout." },
  { id: "acquisizione", label: "Acquisizione", x: 15, y: 35, desc: "SEO, advertising, email marketing, canali e budget." },
  { id: "organizzazione", label: "Organizzazione", x: 50, y: 50, desc: "Chi fa cosa, i processi interni, i fornitori coinvolti." },
];

const connections = [
  ["strategia", "piattaforma"],
  ["strategia", "acquisizione"],
  ["piattaforma", "conversione"],
  ["piattaforma", "dati"],
  ["acquisizione", "conversione"],
  ["conversione", "dati"],
  ["dati", "organizzazione"],
  ["organizzazione", "strategia"],
  ["organizzazione", "acquisizione"],
];

const truths = [
  "Aumentare il budget pubblicitario non risolve un'offerta debole.",
  "Cambiare piattaforma non corregge automaticamente i processi.",
  "Aggiungere funzioni non migliora necessariamente le conversioni.",
  "Più traffico non garantisce più redditività.",
  "Un problema tecnico può avere una causa organizzativa.",
];

export function ProblemSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodePos = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <section className="py-section bg-background-secondary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <MonoLabel className="mb-3 block">Il problema</MonoLabel>
            <h2 className="font-display text-display-md text-text-primary mb-6">
              I problemi di un e-commerce raramente hanno una sola causa.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              La tendenza naturale è intervenire sull&apos;elemento più visibile: cambiare piattaforma,
              aumentare la pubblicità, riprogettare il sito. Ma il nodo da sciogliere è quasi sempre
              altrove. Capire dove richiede esperienza, dati e una visione che tiene insieme tutti gli
              elementi.
            </p>

            <ul className="flex flex-col gap-4">
              {truths.map((truth) => (
                <li key={truth} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                  <span className="text-text-secondary text-sm leading-relaxed">{truth}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: interactive diagram */}
          <div className="relative aspect-square max-w-[420px] mx-auto">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              aria-label="Diagramma delle aree interconnesse di un e-commerce"
            >
              {/* Connections */}
              {connections.map(([a, b]) => {
                const na = getNodePos(a);
                const nb = getNodePos(b);
                const isHighlighted =
                  hoveredNode === a || hoveredNode === b || hoveredNode === null;
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke="#31C6F2"
                    strokeWidth="0.5"
                    opacity={isHighlighted ? (hoveredNode === null ? 0.25 : 0.7) : 0.08}
                    style={{ transition: "opacity 0.3s ease" }}
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
              const isCenter = node.id === "organizzazione";
              const isHovered = hoveredNode === node.id;
              return (
                <button
                  key={node.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 cursor-default group"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  aria-label={node.label}
                >
                  <div
                    className={cn(
                      "rounded-full border-2 transition-all duration-300 flex items-center justify-center",
                      isCenter ? "w-10 h-10" : "w-6 h-6",
                      isHovered
                        ? "border-accent-primary bg-accent-primary/20 scale-110"
                        : isCenter
                        ? "border-accent-primary/50 bg-accent-primary/10"
                        : "border-border-primary bg-surface-secondary"
                    )}
                  >
                    {isCenter && (
                      <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-wider whitespace-nowrap transition-colors",
                      isHovered ? "text-accent-primary" : "text-text-muted"
                    )}
                  >
                    {node.label}
                  </span>
                  {isHovered && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-surface-primary border border-border-neutral rounded-lg p-3 text-left z-10 pointer-events-none">
                      <p className="text-text-secondary text-xs leading-relaxed">{node.desc}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
