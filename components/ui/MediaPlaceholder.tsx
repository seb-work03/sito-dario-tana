import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface MediaPlaceholderProps {
  ratio?: string;
  label?: string;
  description?: string;
  altPlaceholder?: string;
  className?: string;
  variant?: "dark" | "light";
  rounded?: string;
}

export function MediaPlaceholder({
  ratio = "16/9",
  label = "Immagine",
  description,
  altPlaceholder,
  className,
  variant = "dark",
  rounded = "rounded-2xl",
}: MediaPlaceholderProps) {
  const [w, h] = ratio.split("/").map(Number);
  const paddingTop = h && w ? `${(h / w) * 100}%` : "56.25%";

  const bg = variant === "dark" ? "bg-ink-800 border-ink-600" : "bg-paper-100 border-paper-200";
  const textColor = variant === "dark" ? "text-paper-400" : "text-paper-500";

  return (
    <div
      className={cn("relative w-full overflow-hidden border", bg, rounded, className)}
      style={{ paddingTop }}
      role="img"
      aria-label={altPlaceholder || label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className={cn("w-10 h-10 rounded-full border flex items-center justify-center", variant === "dark" ? "border-ink-600" : "border-paper-300")}>
          <ImageIcon size={16} className={textColor} strokeWidth={1.5} />
        </div>
        <p className={cn("text-xs font-mono uppercase tracking-[0.15em]", textColor)}>{label}</p>
        {description && (
          <p className={cn("text-xs max-w-[280px] leading-relaxed", variant === "dark" ? "text-paper-500" : "text-paper-500")}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
