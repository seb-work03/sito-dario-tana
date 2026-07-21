import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  variant = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-xs tracking-[0.15em] uppercase",
        variant === "dark" ? "text-paper-400" : "text-paper-100/70",
        className
      )}
    >
      [ {children} ]
    </span>
  );
}
