import type { Experience } from "../model/types";
import { Card } from "../../../shared/ui/primitives/Card";

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
                  <span className="text-[var(--text)] font-medium">
                     {item.org}
                  </span>
                  {item.orgType ? ` · ${item.orgType}` : ""}
                  {item.location ? ` · ${item.location}` : ""}
               </p>
            </div>

            <div className="shrink-0 text-sm text-[var(--muted)]">
               {formatRange(item.start, item.end)}
            </div>
         </div>

         <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
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

         {(item.tech?.length || item.links?.length) && (
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
               {item.tech?.length ? (
                  <div className="flex flex-wrap gap-2">
                     {item.tech.slice(0, 8).map((t) => (
                        <span
                           key={t}
                           className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                           {t}
                        </span>
                     ))}
                  </div>
               ) : (
                  <span />
               )}

               {item.links?.length ? (
                  <div className="flex flex-wrap gap-2">
                     {item.links.map((l) => (
                        <a
                           key={l.href}
                           href={l.href}
                           target="_blank"
                           rel="noreferrer"
                           className="text-sm text-[var(--primary)] hover:underline"
                        >
                           {l.label}
                        </a>
                     ))}
                  </div>
               ) : null}
            </div>
         )}
      </Card>
   );
}
