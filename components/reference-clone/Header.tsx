"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Chi sono", href: "#about-us" },
  { label: "Servizi", href: "#service" },
  { label: "Metodo", href: "#process" },
  { label: "Testimonianze", href: "#testimon" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0D1218] transition-shadow duration-300"
        style={{ height: 100, boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none" }}
      >
        <div className="mx-auto h-full max-w-[1536px] px-5 flex items-center justify-between">
          <a href="#" className="group text-[24px] font-semibold tracking-tight text-[#EDF2F7] transition-opacity hover:opacity-80">
            Dario<span className="text-[#77C0CF] transition-transform duration-500 inline-block group-hover:translate-x-0.5">.</span>Tana
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[16px] text-[#EDF2F7] transition-colors duration-300 hover:text-[#77C0CF] group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#77C0CF] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="/contatti"
            className="group hidden md:inline-flex items-center gap-1 rounded-xl bg-[#77C0CF] pl-4 pr-1 py-1 text-[#0D1218] text-[15px] font-medium transition-all duration-300 hover:bg-[#5BAAB9] hover:pl-6"
            style={{ height: 60 }}
          >
            <span className="px-1">Parliamone</span>
            <span className="flex items-center justify-center rounded-lg bg-[#0D1218] text-[#77C0CF] w-11 h-11 overflow-hidden">
              <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-45" />
            </span>
          </a>

          <button
            className="lg:hidden p-2 text-[#EDF2F7]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0D1218] lg:hidden pt-[100px]"
          >
            <nav className="flex flex-col px-6 py-8 gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-medium text-[#EDF2F7] py-3 border-b border-white/10"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="/contatti"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#77C0CF] text-[#0D1218] font-medium py-4"
              >
                Parliamone <ArrowRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
