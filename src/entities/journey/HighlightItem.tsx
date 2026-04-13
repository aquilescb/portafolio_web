import { Card } from "../../shared/ui/primitives/Card";
import type { Person } from "../people/types";
import type { HighlightItem } from "./types";
import { Linkedin } from "lucide-react";

function formatRange(r: HighlightItem["date"]) {
   return r.end ? `${r.start} — ${r.end}` : r.start;
}

type HighlightItemCardProps = {
   item: HighlightItem;
   peopleMap?: Record<string, Person>;
};

export function HighlightItemCard({
   item,
   peopleMap = {},
}: HighlightItemCardProps) {
   const images = item.images ?? [];
   const people = (item.peopleIds ?? [])
      .map((id) => peopleMap[id])
      .filter(Boolean);

   return (
      <Card variant={item.featured ? "elevated" : "default"} className="p-6">
         <div className="space-y-4">
            <div>
               <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold">{item.title}</h3>

                  {item.org && (
                     <span className="text-sm text-[var(--muted)]">
                        {item.org}
                     </span>
                  )}
               </div>

               <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
                  <span>{formatRange(item.date)}</span>
                  {item.location && <span>• {item.location}</span>}
               </div>
            </div>
            <p className="text-sm text-[var(--text)]/90">{item.description}</p>

            {people.length > 0 ? (
               <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                     {people.map((person) =>
                        person.linkedin ? (
                           <a
                              key={person.id}
                              href={person.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              title={`Go to ${person.name}'s LinkedIn`}
                              className="
                     group
                     inline-flex items-center gap-2
                     rounded-full border border-[var(--border)]
                     px-3 py-1 text-xs
                     text-[var(--text)]/90
                     cursor-pointer
                     transition
                     hover:border-[#0A66C2]
                     hover:bg-[color-mix(in_oklab,#0A66C2_12%,transparent)]
                  "
                           >
                              <Linkedin className="h-3.5 w-3.5 shrink-0 opacity-80 transition group-hover:opacity-100" />
                              <span>{person.name}</span>
                           </a>
                        ) : (
                           <span
                              key={person.id}
                              className="
                     inline-flex items-center rounded-full
                     border border-[var(--border)]
                     px-3 py-1 text-xs
                     text-[var(--text)]/85
                  "
                           >
                              {person.name}
                           </span>
                        ),
                     )}
                  </div>
               </div>
            ) : null}

            {item.tags?.length ? (
               <div className="flex flex-wrap gap-2">
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
            {images.length > 0 && (
               <div
                  className={`
                     grid gap-2
                     ${
                        images.length === 1
                           ? "grid-cols-1"
                           : images.length === 2
                             ? "grid-cols-2"
                             : "grid-cols-3"
                     }
                  `}
               >
                  {images.map((img) => (
                     <div
                        key={img.src}
                        className="
                           overflow-hidden rounded-lg
                           border border-[var(--border)]
                           bg-[var(--surface)]
                        "
                     >
                        <img
                           src={img.src}
                           alt={img.alt}
                           loading="lazy"
                           className="
                              h-60 w-full object-cover
                              transition-transform
                              hover:scale-105
                           "
                        />
                     </div>
                  ))}
               </div>
            )}
            {item.links?.length ? (
               <div className="flex flex-wrap gap-2">
                  {item.links.map((l) => (
                     <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="
                           inline-flex items-center rounded-full
                           border border-[var(--border)]
                           px-3 py-1 text-xs
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
      </Card>
   );
}
