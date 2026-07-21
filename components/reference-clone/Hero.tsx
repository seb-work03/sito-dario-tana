"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-[#F9F9F9] pt-[130px] pb-6 px-5 overflow-hidden">
      <div className="mx-auto max-w-[1536px]">
        <h1
          className="relative z-0 font-bold text-[#0D0D0D] whitespace-nowrap select-none overflow-hidden"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="relative -mt-6 sm:-mt-16 md:-mt-24 lg:-mt-32 rounded-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(256deg, rgba(83, 114, 176, 0.7) 10%, rgb(83, 114, 176) 88%)",
          }}
        >
          <div className="relative min-h-[420px] md:min-h-[521px] flex items-end justify-center">
            <div className="relative w-[220px] sm:w-[300px] md:w-[410px] aspect-[410/689] mt-auto">
              <Image
                src="/reference-assets/adviest/i3hyvUzl7FhrcIR6gR2nigcrK0.png"
                alt="Consulente al lavoro"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 300px, 410px"
              />
            </div>

            <div className="absolute left-5 md:left-10 bottom-6 md:bottom-10 max-w-[560px]">
              <p className="text-white font-normal text-[22px] sm:text-[32px] md:text-[40px] leading-[1.2]">
                Professional Banking and Investment Services for Financial Decisions.
              </p>
            </div>

            <div className="absolute right-5 md:right-10 top-8 md:top-10 max-w-[320px] hidden sm:block">
              <p className="text-[#DEDEDE] text-[16px] md:text-[18px] leading-relaxed">
                We provide independent banking and investment advisory focused on
                clarity, analysis, risk management, and outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
