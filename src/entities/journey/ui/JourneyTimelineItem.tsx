import { Card } from "../../../shared/ui/primitives/Card";
import type { JourneyEvent } from "../model/types";
import { JourneyBadge } from "./JourneyBadge";

export function JourneyTimelineItem({ item }: { item: JourneyEvent }) {
   return (
      <Card className="p-5">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
               <div className="flex flex-wrap items-center gap-2">
                  <JourneyBadge type={item.type} />
                  <span className="text-sm text-[var(--muted)]">
                     {item.date}
                  </span>
               </div>

               <h3 className="mt-2 text-base font-semibold">{item.title}</h3>

               {item.org && (
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.org}</p>
               )}

               <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                  {item.description}
               </p>

               {item.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                     {item.tags.map((t) => (
                        <span
                           key={t}
                           className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                           {t}
                        </span>
                     ))}
                  </div>
               ) : null}

               {item.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
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

            {item.image ? (
               <div className="shrink-0">
                  <img
                     src={item.image}
                     alt={item.title}
                     className="h-20 w-20 rounded-xl border border-[var(--border)] object-cover"
                     loading="lazy"
                  />
               </div>
            ) : null}
         </div>
      </Card>
   );
}
