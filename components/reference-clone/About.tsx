"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function About() {
  return (
    <section id="about-us" className="bg-[#F9F9F9] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <span className="font-mono text-sm tracking-widest text-[#0D0D0D]/60">[ ABOUT US ]</span>
          <p className="text-[#0D0D0D] text-lg md:text-xl max-w-md md:text-right">
            We provide independent banking and investment advisory focused on
            clarity, analysis, risk management, and outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[400/552] bg-black/5">
              <Image
                src="/reference-assets/adviest/lWBGvORq26aRQEptEZJQdspijzk.jpg"
                alt="Cliente in mobilità"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                <p className="text-white text-[15px] leading-snug italic">
                  &ldquo;Their advisory approach brought clarity and confidence to
                  our financial decisions.&rdquo;
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Star size={18} className="fill-[#5372B0] text-[#5372B0]" />
              <span className="text-[#0D0D0D] font-medium">5.0</span>
              <span className="text-[#0D0D0D]/60 text-sm">Client Satisfaction</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden aspect-[300/363] md:aspect-auto bg-black/5"
          >
            <Image
              src="/reference-assets/adviest/Frr87XRtMwvMp0tFB6pIPmdE.jpg"
              alt="Grattacieli finanziari"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute left-4 bottom-4 rounded-xl overflow-hidden shadow-lg w-32">
              <Image
                src="/reference-assets/adviest/cDLsgPeqL3pVLJhyEAVtGkcw0A.jpg"
                alt="Revenue growth"
                width={500}
                height={136}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-black/10 bg-white p-4 flex flex-col justify-between gap-6"
          >
            <div className="relative rounded-xl overflow-hidden bg-white">
              <Image
                src="/reference-assets/adviest/NvZiTw96HWXcrbBJEfgmR444VR4.jpg"
                alt="Performance reports"
                width={1536}
                height={1172}
                className="w-full h-auto"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden w-28 shrink-0">
                <Image
                  src="/reference-assets/adviest/fyJf6KtkbPj5vEpJXQT8mlRMLI.jpg"
                  alt="Revenue +12,892K"
                  width={496}
                  height={344}
                  className="w-full h-auto"
                />
              </div>
              <a
                href="/contatti"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#5372B0] text-white py-3 text-sm hover:bg-[#46609a] transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
