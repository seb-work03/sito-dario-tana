"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you work with institutional clients?",
    a: "We partner with institutional organizations to deliver tailored solutions across multiple industries worldwide markets.",
  },
  {
    q: "How long are advisory engagements?",
    a: "[risposta non estratta dal riferimento — il click sull'accordion non è stato riproducibile in fase di analisi]",
  },
  {
    q: "Is your advisory advice independent?",
    a: "[risposta non estratta dal riferimento — il click sull'accordion non è stato riproducibile in fase di analisi]",
  },
  {
    q: "Do you offer ongoing advisory support?",
    a: "[risposta non estratta dal riferimento — il click sull'accordion non è stato riproducibile in fase di analisi]",
  },
  {
    q: "How do we get started together?",
    a: "[risposta non estratta dal riferimento — il click sull'accordion non è stato riproducibile in fase di analisi]",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0D1218] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px] grid md:grid-cols-[380px_1fr] gap-12 md:gap-20">
        <div className="md:sticky md:top-[130px] self-start">
          <span className="font-mono text-sm tracking-widest text-[#77C0CF]/70">[ FAQ ]</span>
          <h2 className="text-[#EDF2F7] font-medium text-[32px] md:text-[48px] leading-tight mt-4 mb-8">
            Frequently Asked Questions
          </h2>
          <a
            href="/contatti"
            className="inline-flex items-center justify-center rounded-xl bg-[#77C0CF] text-[#0D1218] font-medium px-6 py-3 text-sm hover:bg-[#5BAAB9] transition-colors"
          >
            Get Started
          </a>
        </div>

        <div className="flex flex-col divide-y divide-white/8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-[#EDF2F7] text-lg md:text-xl">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#77C0CF] border-[#77C0CF] text-[#0D1218]" : "border-white/15 text-[#EDF2F7]"}`}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[#94A9BE] italic">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
