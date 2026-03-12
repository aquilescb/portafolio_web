import { Card } from "../../shared/ui/primitives/Card";
import type { EducationItem } from "./types";

function formatRange(r: EducationItem["date"]) {
   const end = r.end ?? "Present";
   return `${r.start} — ${end}`;
}

export function EducationItemCard({ item }: { item: EducationItem }) {
   return (
      <Card className="p-6">
         <div className="flex items-start justify-between gap-6">
            {/* Contenido izquierdo */}
            <div className="min-w-0 flex-1">
               <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="text-sm text-[var(--muted)]">{item.org}</div>
               </div>

               <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
                  <span>{formatRange(item.date)}</span>
                  {item.location ? <span>• {item.location}</span> : null}
               </div>

               <p className="mt-3 text-sm text-[var(--text)]/90">
                  {item.description}
               </p>

               {item.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                     {item.tags.map((tag) => (
                        <span
                           key={tag}
                           className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                           {tag}
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
                           className="
                    inline-flex items-center rounded-full border border-[var(--border)]
                    px-3 py-1 text-xs text-[var(--text)]
                    hover:bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]
                    transition
                  "
                        >
                           {l.label}
                        </a>
                     ))}
                  </div>
               ) : null}
            </div>

            {/* Logo derecho */}
            {item.logo ? (
               <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)]">
                  <img
                     src={item.logo.src}
                     alt={item.logo.alt}
                     className="h-full w-full object-cover"
                     loading="lazy"
                  />
               </div>
            ) : null}
         </div>
      </Card>
   );
}
