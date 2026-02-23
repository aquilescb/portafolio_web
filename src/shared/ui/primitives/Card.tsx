import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type CardVariant = "default" | "glass" | "elevated";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   variant?: CardVariant;
}

export function Card({ className, variant = "default", ...props }: CardProps) {
   const variants: Record<CardVariant, string> = {
      default: "bg-[var(--surface)] border border-[var(--border)] shadow-sm",

      glass: "bg-[var(--surface)]/70 backdrop-blur-xl border border-[var(--border)]",

      elevated:
         "bg-[var(--surface)] border border-[var(--border)] shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
   };

   return (
      <div
         className={cn(
            "rounded-xl transition-colors",
            variants[variant],
            className,
         )}
         {...props}
      />
   );
}
