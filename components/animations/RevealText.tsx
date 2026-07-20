"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  splitBy?: "word" | "line";
  triggerOnMount?: boolean;
}

export function RevealText({
  children,
  className,
  delay = 0,
  splitBy = "word",
  triggerOnMount = true,
}: RevealTextProps) {
  const parts = splitBy === "word" ? children.split(" ") : children.split("\n");

  const animateProps = triggerOnMount
    ? { animate: { y: "0%" } }
    : { whileInView: { y: "0%" }, viewport: { once: true, amount: 0.2 } };

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            initial={{ y: "110%" }}
            {...animateProps}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.05,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="inline-block"
          >
            {part}
            {i < parts.length - 1 && splitBy === "word" ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
