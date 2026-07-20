"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const footerLinks = {
  servizi: [
    { label: "Consulenza", href: "/consulenza" },
    { label: "Formazione", href: "/formazione" },
    { label: "Docenza", href: "/docenza" },
    { label: "Corsi & Workshop", href: "/corsi" },
  ],
  navigazione: [
    { label: "Chi sono", href: "/chi-sono" },
    { label: "Insights", href: "/insights" },
    { label: "Testimonianze", href: "/testimonianze" },
    { label: "Contatti", href: "/contatti" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/dariotana" },
    { label: "Email", href: "mailto:info@dariotana.it" },
    { label: "Google Reviews", href: "https://g.page/r/[LINK]" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink-900 overflow-hidden">
      {/* Top CTA on celeste */}
      <div className="bg-celeste-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <filter id="nf">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
            </filter>
            <rect width="100%" height="100%" filter="url(#nf)" />
          </svg>
        </div>

        <Container className="relative z-10 py-16 md:py-24">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="font-display text-display-xl text-ink-900 tracking-tight leading-[1] text-balance"
            >
              Hai un progetto,
              <br />
              un problema, o una
              <br />
              decisione da prendere?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col gap-6"
            >
              <p className="text-ink-900/85 text-base md:text-lg leading-relaxed">
                Raccontami il contesto. Valuteremo insieme se e come posso esserti utile.
                Rispondo personalmente in 1-2 giorni lavorativi.
              </p>
              <div>
                <Button href="/contatti" size="lg" variant="white">
                  Parliamone
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <div className="bg-ink-900 border-t border-ink-800">
        <Container className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="font-semibold text-2xl text-paper-50 tracking-tight">
                  Dario<span className="text-celeste-500">.</span>
                </span>
              </Link>
              <p className="text-paper-400 text-sm leading-relaxed max-w-xs">
                Consulente e docente e-commerce.
                <br />
                Cofondatore di{" "}
                <a
                  href="https://www.dtecommerce.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-100 hover:text-celeste-500 transition-colors underline underline-offset-4 decoration-ink-600 hover:decoration-celeste-500"
                >
                  DT E-commerce Consulting
                </a>
                .
              </p>
            </div>

            {/* Servizi */}
            <div>
              <p className="text-paper-500 text-xs font-mono uppercase tracking-[0.15em] mb-4">
                Servizi
              </p>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.servizi.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-paper-300 text-sm hover:text-celeste-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigazione */}
            <div>
              <p className="text-paper-500 text-xs font-mono uppercase tracking-[0.15em] mb-4">
                Navigazione
              </p>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.navigazione.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-paper-300 text-sm hover:text-celeste-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <p className="text-paper-500 text-xs font-mono uppercase tracking-[0.15em] mb-4">
                Contatti
              </p>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-paper-300 text-sm hover:text-celeste-500 transition-colors"
                    >
                      {link.label} {link.href.startsWith("http") ? "↗" : ""}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Giant Dario text — Adviest-style */}
          <div className="border-t border-ink-800 pt-12 mb-6 overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="font-display text-[clamp(4rem,17vw,17rem)] text-paper-50 leading-[0.85] tracking-[-0.04em] font-medium whitespace-nowrap"
              aria-hidden="true"
            >
              DARIO<span className="text-celeste-500">.</span>TANA
            </motion.h3>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-paper-500 text-xs font-mono">
              © {year} Dario Tana &nbsp;·&nbsp; P.IVA [DA INSERIRE]
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-paper-500 text-xs hover:text-paper-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookie"
                className="text-paper-500 text-xs hover:text-paper-300 transition-colors"
              >
                Cookie
              </Link>
              <Link
                href="/note-legali"
                className="text-paper-500 text-xs hover:text-paper-300 transition-colors"
              >
                Note legali
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
