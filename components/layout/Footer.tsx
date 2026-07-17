import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MonoLabel } from "@/components/ui/MonoLabel";

const footerLinks = {
  servizi: [
    { label: "Consulenza e-commerce", href: "/consulenza" },
    { label: "Formazione aziendale", href: "/formazione" },
    { label: "Docenza", href: "/docenza" },
    { label: "Corsi e workshop", href: "/corsi" },
  ],
  contenuti: [
    { label: "Chi sono", href: "/chi-sono" },
    { label: "Insights", href: "/insights" },
    { label: "Contatti", href: "/contatti" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookie" },
    { label: "Note legali", href: "/note-legali" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border-neutral bg-background-secondary">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-semibold text-text-primary">
                Dario Tana
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Consulente e docente e-commerce. Aiuto aziende e professionisti a prendere decisioni più consapevoli nel commercio elettronico.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@dariotana.it"
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
              >
                info@dariotana.it
              </a>
              <a
                href="https://www.linkedin.com/in/dariotana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <MonoLabel className="mb-4 block">Servizi</MonoLabel>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.servizi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenuti */}
          <div>
            <MonoLabel className="mb-4 block">Contenuti</MonoLabel>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.contenuti.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DT E-commerce */}
          <div>
            <MonoLabel className="mb-4 block">Agenzia</MonoLabel>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Cerchi un partner operativo per sviluppare o gestire il tuo e-commerce?
            </p>
            <a
              href="https://www.dtecommerce.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent-primary hover:text-accent-light transition-colors"
            >
              Visita DT E-commerce Consulting
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-neutral flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">
            © {year} Dario Tana. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-text-muted hover:text-text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
