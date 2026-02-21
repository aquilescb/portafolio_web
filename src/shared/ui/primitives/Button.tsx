import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
   return (
      <button
         className={cn(
            "inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition",
            "border border-[var(--border)]",
            variant === "primary" &&
               "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] border-transparent",
            variant === "ghost" &&
               "bg-transparent text-[var(--text)] hover:bg-[var(--surface)]",
            className,
         )}
         {...props}
      />
   );
}
