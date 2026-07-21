"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about-us" },
  { label: "Services", href: "#service" },
  { label: "Insights", href: "#insights" },
  { label: "Testimonials", href: "#testimon" },
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
        className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9] transition-shadow duration-300"
        style={{ height: 100, boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none" }}
      >
        <div className="mx-auto h-full max-w-[1536px] px-5 flex items-center justify-between">
          <a href="#" className="text-[24px] font-bold tracking-tight text-[#0D0D0D]">
            Adviest
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[16px] text-[#0D0D0D] hover:text-[#5372B0] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="/contatti"
            className="hidden md:inline-flex items-center gap-1 rounded-xl bg-[#5372B0] pl-4 pr-1 py-1 text-white text-[15px] transition-colors duration-200 hover:bg-[#46609a]"
            style={{ height: 60 }}
          >
            <span className="px-1">Get Started</span>
            <span className="flex items-center justify-center rounded-lg bg-white text-[#0D0D0D] w-11 h-11">
              <ArrowRight size={16} />
            </span>
          </a>

          <button
            className="lg:hidden p-2 text-[#0D0D0D]"
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
            className="fixed inset-0 z-40 bg-[#F9F9F9] lg:hidden pt-[100px]"
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
                  className="text-2xl font-medium text-[#0D0D0D] py-3 border-b border-black/10"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="/contatti"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#5372B0] text-white py-4"
              >
                Get Started <ArrowRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
