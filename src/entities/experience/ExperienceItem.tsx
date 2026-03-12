import type { Experience } from "./types";
import { Card } from "../../shared/ui/primitives/Card";

function formatRange(start: string, end?: string) {
   const e = end ?? "Actualidad";
   return `${start} — ${e}`;
}

export function ExperienceItem({ item }: { item: Experience }) {
   return (
      <Card className="p-5">
         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
               <h3 className="text-base font-semibold">{item.role}</h3>

               <p className="mt-1 text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--text)]">
                     {item.org}
                  </span>
                  {item.orgType ? ` · ${item.orgType}` : ""}
                  {item.location ? ` · ${item.location}` : ""}
               </p>
            </div>

            {/* Badge violeta */}
            <span
               className="
            inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
            bg-[color-mix(in_oklab,var(--secondary)_18%,transparent)]
            text-[var(--secondary)]
            ring-1 ring-inset ring-[color-mix(in_oklab,var(--secondary)_35%,transparent)]
          "
            >
               {formatRange(item.start, item.end)}
            </span>
         </div>

         <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            {item.summary}
         </p>

         <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div>
               <div className="text-sm font-medium">Responsabilidades</div>
               <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                  {item.responsibilities.slice(0, 5).map((r, idx) => (
                     <li key={idx}>{r}</li>
                  ))}
               </ul>
            </div>

            <div>
               <div className="text-sm font-medium">Impacto</div>
               <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                  {item.impact.slice(0, 5).map((m, idx) => (
                     <li key={idx}>{m}</li>
                  ))}
               </ul>
            </div>
         </div>
      </Card>
   );
}
