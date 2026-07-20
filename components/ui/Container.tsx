import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  full: "max-w-7xl",
};

export function Container({ children, className, size = "full" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 md:px-8 lg:px-12", sizes[size], className)}>
      {children}
    </div>
  );
}
