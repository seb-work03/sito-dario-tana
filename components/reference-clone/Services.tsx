"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Banking Advisory",
    description:
      "We support clients with strategic banking solutions, capital structuring, and institutional financial planning for long-term financial stability.",
  },
  {
    number: "02",
    title: "Investment Advisory",
    description: "Disciplined investment guidance for long-term outcomes.",
  },
  {
    number: "03",
    title: "Risk Management",
    description: "Identification and mitigation of financial risk.",
  },
  {
    number: "04",
    title: "Strategic Planning",
    description: "Long-term financial strategies aligned with objectives.",
  },
];

export function Services() {
  return (
    <section id="service" className="bg-[#0D1218] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px]">
        <span className="font-mono text-sm tracking-widest text-[#77C0CF]/70">[ OUR SERVICES ]</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4 mb-14">
          <h2 className="text-[#EDF2F7] font-medium text-[32px] md:text-[48px] leading-tight max-w-lg">
            Discover Our Advisory Services
          </h2>
          <p className="text-[#94A9BE] max-w-sm">
            Serving institutional and corporate clients with disciplined banking
            and investment advisory services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative md:sticky md:top-[130px] rounded-3xl overflow-hidden aspect-[4/3] bg-[#17222F]">
            <Image
              src="/reference-assets/adviest/orECDk1yHAceniWXq7yKvfvv7Y.jpg"
              alt="Consulente al lavoro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col divide-y divide-white/8">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="py-8 first:pt-0 flex gap-6"
              >
                <span className="font-mono text-sm text-[#77C0CF]/60 shrink-0 pt-1">{s.number}</span>
                <div>
                  <h3 className="text-[#EDF2F7] text-2xl md:text-3xl font-medium mb-2">{s.title}</h3>
                  <p className="text-[#94A9BE]">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
