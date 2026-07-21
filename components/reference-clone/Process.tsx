"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description: "We begin by understanding client objectives, financial position, and institutional requirements.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop tailored banking and investment strategies aligned with risk tolerance and long-term goals.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Strategies are implemented with precision, compliance, and ongoing professional oversight.",
  },
];

export function Process() {
  return (
    <section className="bg-[#0D1218] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px]">
        <span className="font-mono text-sm tracking-widest text-[#77C0CF]/70">[ OUR PROCESS ]</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4 mb-16">
          <h2 className="text-[#EDF2F7] font-medium text-[32px] md:text-[48px] leading-tight max-w-lg">
            Our Professional Advisory Approach
          </h2>
          <p className="text-[#94A9BE] max-w-sm">
            Our process is structured, disciplined, and designed to support
            informed banking and investment decisions.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -8 }}
              className="bg-[#17222F] border border-[#253444] rounded-2xl p-8"
              style={{ marginTop: i % 2 === 1 ? 48 : 0 }}
            >
              <div className="inline-flex items-center justify-center bg-[#77C0CF] rounded-md w-11 h-11 mb-8">
                <span className="text-[#0D1218] text-sm font-semibold">{s.number}</span>
              </div>
              <h3 className="text-[#EDF2F7] text-2xl md:text-3xl font-medium mb-3">{s.title}</h3>
              <p className="text-[#94A9BE] text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#17222F] border border-[#253444] rounded-2xl p-6"
            >
              <div className="inline-flex items-center justify-center bg-[#77C0CF] rounded-md w-9 h-9 mb-5">
                <span className="text-[#0D1218] text-xs font-semibold">{s.number}</span>
              </div>
              <h3 className="text-[#EDF2F7] text-xl font-medium mb-2">{s.title}</h3>
              <p className="text-[#94A9BE] text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
