import { Card } from "../../../shared/ui/primitives/Card";

export function InfoCard({ title, text }: { title: string; text: string }) {
   return (
      <Card className="p-5 ring-1 ring-[var(--border)] transition-transform duration-200 hover:-translate-y-0.5">
         <h3 className="text-sm font-semibold">{title}</h3>
         <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {text}
         </p>
      </Card>
   );
}
