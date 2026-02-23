import type { ReactNode } from "react";
import { Card } from "../../../shared/ui/primitives/Card";

export function AboutSection({
   title,
   children,
}: {
   title: string;
   children: ReactNode;
}) {
   return (
      <Card className="relative overflow-hidden p-5 ring-1 ring-[var(--border)] transition-transform duration-200 hover:-translate-y-0.5">
         <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--border)]" />
         <h2 className="text-base font-semibold">{title}</h2>
         <div className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {children}
         </div>
      </Card>
   );
}
