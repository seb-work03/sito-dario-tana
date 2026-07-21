"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const engagements = [
  { title: "Corporate Banking", description: "Banking and capital structuring support.", image: "pK0MgeT7XpWRNeefyNQiRiZz7nQ.jpg", align: "left" },
  { title: "Investment Advisory", description: "Portfolio strategy and risk oversight for institutional investment mandates.", image: "2HY57myX3y7mgS1UFfrGVyN2yPw.jpg", align: "right" },
  { title: "Risk Management", description: "Financial risk assessment and mitigation.", image: "h4Vde8UkfZBpzplF7BaH0980o.jpg", align: "left" },
  { title: "Strategic Planning", description: "Long-term financial and capital planning.", image: "Bbboi4AXyPJPomZeBfoeBQjvFfA.jpg", align: "right" },
  { title: "Advisory Oversight", description: "Continuous monitoring aligned with financial objectives.", image: "0MOEYyAAQpBf4BhTNL0rh0kmJoU.jpg", align: "left" },
];

export function Experience() {
  return (
    <section className="bg-[#121A24] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1536px]">
        <span className="font-mono text-sm tracking-widest text-[#77C0CF]/70">[ EXPERIENCE ]</span>
        <h2 className="text-[#EDF2F7] font-medium text-[32px] md:text-[48px] leading-tight max-w-2xl mt-4 mb-16 md:mb-24">
          Representative Advisory Engagements
        </h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {engagements.map((e, i) => (
            <div
              key={e.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${e.align === "right" ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#17222F]"
              >
                <Image
                  src={`/reference-assets/adviest/${e.image}`}
                  alt={e.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <span className="font-mono text-sm text-[#77C0CF]">{`0${i + 1}`.slice(-2)}</span>
                <h3 className="text-[#EDF2F7] text-2xl md:text-4xl font-medium mt-3 mb-4">{e.title}</h3>
                <p className="text-[#94A9BE] text-base md:text-lg max-w-md">{e.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 border-t border-white/8 pt-14">
          <span className="font-mono text-sm tracking-widest text-[#77C0CF]/70">[ R ]</span>
          <h3 className="text-[#EDF2F7] font-medium text-[28px] md:text-[40px] mt-4">Multi-Sector Work</h3>
          <p className="text-[#94A9BE] mt-3 max-w-lg">
            Adviest experience across corporate and institutional environments.
          </p>
        </div>
      </div>
    </section>
  );
}
