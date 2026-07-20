"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Consulenza", href: "/consulenza" },
  { label: "Formazione", href: "/formazione" },
  { label: "Docenza", href: "/docenza" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Insights", href: "/insights" },
  { label: "Contatti", href: "/contatti" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background-main/90 backdrop-blur-md border-b border-border-neutral"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Dario Tana — Home">
            <div className="flex items-center gap-2">
              {/* Logo SVG placeholder — da sostituire con logo reale */}
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded bg-accent-primary/10 border border-accent-primary/30 group-hover:border-accent-primary/60 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center font-mono text-accent-primary text-xs font-bold">DT</span>
              </div>
              <span className="font-display text-lg font-semibold text-text-primary tracking-tight">
                Dario Tana
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-surface-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block">
            <Button href="/contatti" size="md">
              Parliamo del tuo progetto
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out-expo",
          menuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav
          className="bg-background-main/95 backdrop-blur-md border-t border-border-neutral px-5 py-6 flex flex-col gap-2"
          aria-label="Navigazione mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-surface-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border-neutral">
            <Button href="/contatti" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
              Parliamo del tuo progetto
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
