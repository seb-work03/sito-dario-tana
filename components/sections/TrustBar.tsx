"use client";

import { Container } from "@/components/ui/Container";

// Placeholder — da sostituire con i loghi reali di enti, aziende e università con cui Dario ha collaborato, gestibile da CMS
const clients = [
  "[ENTE 1]",
  "[UNIVERSITÀ 2]",
  "[BUSINESS SCHOOL 3]",
  "[ASSOCIAZIONE 4]",
  "[MASTER 5]",
  "[AZIENDA 6]",
  "[ENTE 7]",
  "[UNIVERSITÀ 8]",
];

export function TrustBar() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 bg-ink-900 border-t border-ink-800">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <div className="shrink-0 max-w-[200px]">
            <p className="text-paper-400 text-sm leading-relaxed">
              Ho collaborato con
              <br />
              <span className="text-paper-100">enti, aziende e scuole</span>
            </p>
          </div>

          {/* Marquee */}
          <div className="flex-1 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-ink-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-ink-900 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-12 animate-marquee-slow hover:[animation-play-state:paused] w-max">
              {doubled.map((client, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center h-10 min-w-[140px] px-4"
                >
                  <span className="font-mono text-sm text-paper-500 tracking-tight whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
