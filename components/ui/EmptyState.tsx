import { FileText } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 rounded-2xl border border-ink-700 bg-ink-800/50 px-6 py-20">
      <div className="w-12 h-12 rounded-full border border-ink-600 flex items-center justify-center">
        <FileText size={18} className="text-paper-400" strokeWidth={1.5} />
      </div>
      <p className="text-paper-100 text-lg font-medium tracking-tight">{title}</p>
      <p className="text-paper-400 text-sm max-w-sm leading-relaxed">{description}</p>
    </div>
  );
}
