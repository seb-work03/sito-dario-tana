"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Servizi", href: "/consulenza" },
  { label: "Insights", href: "/insights" },
  { label: "Testimonianze", href: "/testimonianze" },
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
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-ink-900/85 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Dario Tana — Home">
              <span className="font-semibold text-xl md:text-2xl text-paper-50 tracking-tight">
                Dario<span className="text-celeste-500">.</span>
              </span>
            </Link>

            {/* Desktop nav — CENTER */}
            <nav
              className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
              aria-label="Navigazione principale"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-paper-300 hover:text-paper-50 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button href="/contatti" size="md" variant="celeste">
                Parliamone
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-full text-paper-100 hover:bg-ink-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-900/95 backdrop-blur-xl lg:hidden pt-24"
          >
            <nav className="px-5 py-8 flex flex-col gap-1" aria-label="Navigazione mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-4 text-2xl font-medium text-paper-100 hover:text-celeste-500 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-6 px-4"
              >
                <Button
                  href="/contatti"
                  size="lg"
                  className="w-full justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  Parliamone
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
