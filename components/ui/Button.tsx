"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Variant = "celeste" | "white" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  showArrow?: boolean;
  arrowIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  celeste: "bg-celeste-500 text-ink-900 hover:bg-celeste-400",
  white: "bg-paper-50 text-ink-900 hover:bg-paper-100",
  ghost: "bg-transparent text-paper-100 hover:bg-ink-800",
  outline: "bg-transparent text-paper-100 border border-ink-600 hover:border-celeste-500 hover:text-celeste-500",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm pl-4 pr-1.5 py-1.5 gap-1",
  md: "text-sm pl-5 pr-2 py-2 gap-1.5",
  lg: "text-base pl-6 pr-2.5 py-2.5 gap-2",
};

const iconSizeClasses: Record<Size, string> = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "celeste",
      size = "md",
      href,
      external,
      showArrow = true,
      arrowIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const arrowSize = size === "sm" ? 14 : size === "md" ? 15 : 16;
    const iconBg =
      variant === "celeste" || variant === "white"
        ? "bg-ink-900 text-paper-50"
        : "bg-celeste-500 text-ink-900";

    const classes = cn(
      "group inline-flex items-center justify-between rounded-full font-medium transition-all duration-300 ease-adviest select-none whitespace-nowrap",
      variantClasses[variant],
      sizeClasses[size],
      showArrow ? "" : "pr-5",
      className
    );

    const content = (
      <>
        <span className="tracking-tight">{children}</span>
        {showArrow && (
          <span
            className={cn(
              "flex items-center justify-center rounded-full shrink-0 transition-transform duration-300 ease-adviest",
              iconBg,
              iconSizeClasses[size],
              "group-hover:rotate-[-45deg]"
            )}
          >
            {arrowIcon ?? <ArrowRight size={arrowSize} strokeWidth={2} />}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileTap={{ scale: 0.97 }}
        {...(props as Omit<React.HTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag">)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
