"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "institutions", label: "For Institutions", photo: "U2BCGakYtmoTeb2cJuHIw7BiCWA.jpg" },
  { id: "corporates", label: "For Corporates", photo: "JjUw52EussY8kwoSstWgrw6glNA.jpg" },
  { id: "executives", label: "For Executives", photo: "U2BCGakYtmoTeb2cJuHIw7BiCWA.jpg" },
];

export function Insights() {
  const [active, setActive] = useState(0);

  return (
    <section id="insights" className="bg-[#0D1218] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px]">
        <span className="font-mono text-sm tracking-widest text-[#77C0CF]/70">[ INSIGHTS ]</span>
        <h2 className="text-[#EDF2F7] font-medium text-[32px] md:text-[48px] leading-tight max-w-xl mt-4 mb-4">
          Data-Driven Financial Intelligence
        </h2>
        <p className="text-[#94A9BE] max-w-lg mb-8">
          We leverage data and analytics to support informed banking and
          investment decisions.
        </p>
        <a
          href="/contatti"
          className="inline-flex items-center justify-center rounded-xl bg-[#77C0CF] text-[#0D1218] font-medium px-6 py-3 text-sm mb-14 hover:bg-[#5BAAB9] transition-colors"
        >
          Get Started
        </a>

        <div className="grid md:grid-cols-[280px_1fr] gap-4 items-stretch">
          <div className="flex md:flex-col gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={cn(
                  "flex-1 md:flex-none text-left px-6 py-6 rounded-xl text-lg md:text-xl font-medium transition-colors duration-300",
                  active === i ? "bg-[#77C0CF] text-[#0D1218]" : i === 0 ? "bg-[#17222F] text-[#EDF2F7]" : "bg-[#121A24] text-[#94A9BE]"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-black min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={`/reference-assets/adviest/${tabs[active].photo}`}
                  alt={tabs[active].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute right-4 top-4 md:right-8 md:top-8 rounded-xl overflow-hidden shadow-lg w-40 hidden sm:block">
              <Image
                src="/reference-assets/adviest/JctX5w47uDkusOAsdQO5gGY4pzM.jpg"
                alt="Sales"
                width={1195}
                height={1270}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 rounded-xl overflow-hidden shadow-lg w-44 hidden sm:block">
              <Image
                src="/reference-assets/adviest/sKfOtNNshIWgszaVsZ1LVN9BjUw.jpg"
                alt="Social reach"
                width={1130}
                height={624}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
