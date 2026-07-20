"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-background-main font-semibold hover:bg-accent-light active:bg-accent-dark",
  secondary:
    "bg-surface-secondary text-text-primary border border-border-neutral hover:bg-surface-hover hover:border-border-primary",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-surface-primary",
  outline:
    "border border-border-primary text-accent-primary hover:bg-surface-primary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-md",
  md: "text-sm px-5 py-2.5 rounded-lg",
  lg: "text-base px-7 py-3.5 rounded-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", href, external, loading, className, children, disabled, ...props },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center gap-2 transition-all duration-200 font-medium cursor-pointer select-none",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      styles[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled || loading} className={classes} {...props}>
        {loading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
