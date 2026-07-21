"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Their advisory approach provided clarity and confidence in our financial decision-making process.",
    author: "Emily Johnson",
    role: "Finance Operations Manager",
    photo: "6KOKZ6o9umNtbSW8DNXdQdttgbU.png",
  },
  {
    text: "Disciplined analysis and guidance supported informed long-term financial planning decisions.",
    author: "Sophia Martinez",
    role: "Wealth Management Advisor",
    photo: "pWdflF1Kk7imAbImoSDBfTT3JsE.png",
  },
  {
    text: "Independent advice enabled confident strategic decisions aligned with organizational financial objectives.",
    author: "Daniel Carter",
    role: "Chief Financial Officer",
    photo: "8nmd4a4Fuz2gP25iKfTc5Obrs.png",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimon" className="bg-[#5372B0] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-sm tracking-widest text-white/60">[ TESTIMONIALS ]</span>
            <h2 className="text-white font-medium text-[32px] md:text-[48px] leading-tight max-w-xl mt-4">
              Trusted by Corporate and Institutional Clients
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto bg-black/10">
            <Image
              src={`/reference-assets/adviest/${current.photo}`}
              alt={current.author}
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
            <Quote size={36} className="text-[#0D0D0D] mb-4" strokeWidth={1.5} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col justify-between gap-8"
              >
                <p className="text-[#0D0D0D] text-xl md:text-2xl font-medium leading-snug">
                  &ldquo;{current.text}&rdquo;
                </p>
                <div>
                  <p className="text-[#0D0D0D] font-medium">{current.author}</p>
                  <p className="text-[#0D0D0D]/60 text-sm">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
