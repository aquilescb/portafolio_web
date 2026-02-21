import { Card } from "../../../../shared/ui/primitives/Card";

export function InfoCard({ title, text }: { title: string; text: string }) {
   return (
      <Card className="p-5">
         <h3 className="text-sm font-semibold">{title}</h3>
         <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
            {text}
         </p>
      </Card>
   );
}
