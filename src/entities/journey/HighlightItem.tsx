import { Card } from "../../shared/ui/primitives/Card";
import type { HighlightItem } from "./types";

function formatRange(r: HighlightItem["date"]) {
   const end = r.end ?? "Present";
   return r.end ? `${r.start} — ${end}` : r.start;
}

export function HighlightItemCard({ item }: { item: HighlightItem }) {
   const images = item.images ?? [];

   return (
      <Card variant={item.featured ? "elevated" : "default"} className="p-6">
         <div className="space-y-4">
            {/* Header */}
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

            {/* Description */}
            <p className="text-sm text-[var(--text)]/90">{item.description}</p>

            {/* Tags */}
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

            {/* Images */}
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

            {/* Links */}
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
