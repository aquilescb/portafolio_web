import type { ReactNode } from "react";
import { Card } from "../../../../shared/ui/primitives/Card";

export function AboutSection({
   title,
   children,
}: {
   title: string;
   children: ReactNode;
}) {
   return (
      <Card className="p-5">
         <h2 className="text-base font-semibold">{title}</h2>
         <div className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
            {children}
         </div>
      </Card>
   );
}
