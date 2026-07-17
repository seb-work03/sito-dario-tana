import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  ratio?: string;
  label?: string;
  description?: string;
  altPlaceholder?: string;
  className?: string;
}

export function MediaPlaceholder({
  ratio = "16/9",
  label = "Immagine",
  description,
  altPlaceholder,
  className,
}: MediaPlaceholderProps) {
  const [w, h] = ratio.split("/").map(Number);
  const paddingTop = h && w ? `${(h / w) * 100}%` : "56.25%";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-surface-secondary border border-border-neutral",
        className
      )}
      style={{ paddingTop }}
      role="img"
      aria-label={altPlaceholder || label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <div className="w-8 h-8 rounded border border-border-primary flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" className="text-text-muted" />
            <circle cx="5.5" cy="6.5" r="1" fill="currentColor" className="text-text-muted" />
            <path d="M1 10.5l4-3 3 2.5 2-1.5 4 3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" className="text-text-muted" />
          </svg>
        </div>
        <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{label}</p>
        {description && (
          <p className="text-xs text-text-muted/60 max-w-[200px]">{description}</p>
        )}
        <p className="text-[10px] text-text-muted/40 font-mono">{ratio}</p>
      </div>
    </div>
  );
}
