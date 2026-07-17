import { cn } from "@/lib/utils";

interface MonoLabelProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export function MonoLabel({ children, className, accent }: MonoLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs tracking-[0.15em] uppercase",
        accent ? "text-accent-primary" : "text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
