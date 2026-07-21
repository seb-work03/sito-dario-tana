"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-[#F9F9F9] pt-[110px] pb-6 px-5">
      <div className="mx-auto max-w-[1536px] relative">
        <h1
          className="relative z-0 text-center font-bold text-[#0D0D0D] whitespace-nowrap select-none overflow-hidden mb-[10%]"
          style={{
            fontSize: "clamp(2.75rem, 12.8vw, 12.25rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.07em",
          }}
        >
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="inline-block"
          >
            Consultative
          </motion.span>
        </h1>

        {/* Gradient card ("div sfumato") — sits above the title (covers its lower half), below the photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="relative z-10 -mt-6 sm:-mt-16 md:-mt-24 lg:-mt-32 rounded-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(256deg, rgba(83, 114, 176, 0.7) 10%, rgb(83, 114, 176) 88%)",
          }}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-end md:items-center gap-2 md:gap-4 min-h-[clamp(320px,55vw,521px)] px-5 sm:px-6 md:px-10 py-6 md:py-0">
            <p className="text-white font-normal text-[13px] sm:text-[20px] md:text-[40px] leading-[1.25] md:leading-[1.2] max-w-[140px] sm:max-w-[220px] md:max-w-[320px]">
              Professional Banking and Investment Services for Financial Decisions.
            </p>

            {/* invisible spacer reserving room for the overflowing photo — width must match the photo below exactly */}
            <div className="w-[clamp(200px,34vw,410px)] shrink-0" aria-hidden="true" />

            <p className="hidden md:block text-[#DEDEDE] text-[15px] md:text-[18px] leading-relaxed max-w-[320px] justify-self-end text-right">
              We provide independent banking and investment advisory focused on
              clarity, analysis, risk management, and outcomes.
            </p>
          </div>
        </motion.div>

        {/* Person photo — centered, taller than the card, overflowing on top of both title and card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          className="absolute z-20 left-1/2 -translate-x-1/2 bottom-0 w-[clamp(200px,34vw,410px)] aspect-[410/689] pointer-events-none"
        >
          <Image
            src="/reference-assets/adviest/i3hyvUzl7FhrcIR6gR2nigcrK0.png"
            alt="Consulente al lavoro"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 260px, 410px"
          />
        </motion.div>
      </div>
    </section>
  );
}
