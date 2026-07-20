"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const nodes = [
  { label: "Strategia", x: 50, y: 20 },
  { label: "Piattaforma", x: 80, y: 45 },
  { label: "Dati", x: 65, y: 75 },
  { label: "Acquisizione", x: 30, y: 70 },
  { label: "Organizzazione", x: 15, y: 45 },
  { label: "Conversione", x: 50, y: 50 },
];

const connections = [
  [0, 1], [0, 4], [1, 2], [1, 5], [2, 3], [3, 4], [4, 5], [5, 0], [5, 2],
];

export function HeroSection() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("line");
    if (!paths) return;

    let frame: number;
    let t = 0;

    const animate = () => {
      t += 0.005;
      paths.forEach((line, i) => {
        const phase = (t + i * 0.4) % (Math.PI * 2);
        const opacity = (Math.sin(phase) * 0.5 + 0.5) * 0.6 + 0.1;
        line.style.opacity = String(opacity);
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(49,198,242,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: content */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse-slow" />
              <MonoLabel accent>Consulente &amp; Docente E-commerce</MonoLabel>
            </div>

            <h1 className="font-display text-display-xl text-text-primary leading-[1.05] tracking-tight">
              Decisioni migliori{" "}
              <span className="text-accent-gradient">nell&apos;e-commerce</span>{" "}
              nascono dall&apos;esperienza diretta.
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed max-w-[520px]">
              Aiuto aziende e professionisti ad analizzare problemi, definire priorità e costruire
              progetti e-commerce sostenibili. Non soluzioni preconfezionate: metodo, contesto e
              visione d&apos;insieme.
            </p>

            {/* Social proof bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-border-neutral">
              {[
                { value: "+20", label: "anni di esperienza" },
                { value: "+50", label: "corsi tenuti" },
                { value: "+200", label: "recensioni · media 4,9 ★" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-mono text-accent-primary text-xl font-semibold">{stat.value}</span>
                  <span className="text-text-muted text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contatti" size="lg">
                Parliamo del tuo progetto
                <ArrowRight size={16} />
              </Button>
              <Button href="/chi-sono" variant="secondary" size="lg">
                Scopri il mio percorso
              </Button>
            </div>
          </div>

          {/* Right: animated diagram */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Outer ring */}
              <div
                className="absolute inset-4 rounded-full border border-border-neutral"
                style={{ background: "radial-gradient(circle, rgba(49,198,242,0.03) 0%, transparent 70%)" }}
              />

              {/* SVG connections */}
              <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                {connections.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={nodes[a].x}
                    y1={nodes[a].y}
                    x2={nodes[b].x}
                    y2={nodes[b].y}
                    stroke="#31C6F2"
                    strokeWidth="0.4"
                    opacity="0.3"
                  />
                ))}
              </svg>

              {/* Nodes */}
              {nodes.map((node, i) => (
                <div
                  key={node.label}
                  className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
                      i === 5
                        ? "bg-accent-primary border-accent-primary"
                        : "bg-surface-secondary border-border-primary group-hover:border-accent-primary"
                    }`}
                  />
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wide whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              ))}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-mono text-[10px] text-accent-primary uppercase tracking-widest">
                    Visione
                  </span>
                  <br />
                  <span className="font-mono text-[10px] text-accent-primary uppercase tracking-widest">
                    d&apos;insieme
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
