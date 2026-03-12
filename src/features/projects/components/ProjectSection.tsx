import type { ReactNode } from "react";
import { Card } from "../../../shared/ui/primitives/Card";

type ProjectSectionProps = {
   title: string;
   children: ReactNode;
};

export function ProjectSection({
   title,
   children,
}: ProjectSectionProps) {
   return (
      <Card variant="glass" className="p-5 sm:p-6">
         <h2 className="text-base font-semibold text-[var(--text)]">{title}</h2>
         <div className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {children}
         </div>
      </Card>
   );
}