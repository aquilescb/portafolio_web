import { Card } from "../../shared/ui/primitives/Card";
import type { CertificateItem } from "./types";

function formatRange(r: CertificateItem["date"]) {
   return r.end ? `${r.start} - ${r.end}` : r.start;
}

function kindLabel(k: CertificateItem["kind"]) {
   switch (k) {
      case "course":
         return "Course";
      case "certificate":
         return "Certificate";
      case "bootcamp":
         return "Bootcamp";
      default:
         return "Certificate";
   }
}

export function CertificateItemCard({ item }: { item: CertificateItem }) {
   return (
      <Card className="p-6">
         <div className="flex items-start justify-between gap-6">
            {/* Left */}
            <div className="min-w-0 flex-1">
               <div className="flex flex-wrap items-center gap-2">
                  <span
                     className="
                inline-flex items-center rounded-full
                border border-[var(--border)]
                bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]
                px-3 py-1 text-xs text-[var(--text)]
              "
                  >
                     {kindLabel(item.kind)}
                  </span>

                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="text-sm text-[var(--muted)]">
                     {item.issuer}
                  </div>
               </div>

               <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
                  <span>{formatRange(item.date)}</span>
                  {item.credentialId ? (
                     <span>• ID: {item.credentialId}</span>
                  ) : null}
               </div>

               <p className="mt-3 text-sm text-[var(--text)]/90">
                  {item.summary}
               </p>

               {item.skills?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                     {item.skills.map((s) => (
                        <span
                           key={s}
                           className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                        >
                           {s}
                        </span>
                     ))}
                  </div>
               ) : null}

               {item.learnings?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-[var(--text)]/90">
                     {item.learnings.map((x) => (
                        <li key={x} className="flex gap-2">
                           <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                           />
                           <span className="min-w-0">{x}</span>
                        </li>
                     ))}
                  </ul>
               ) : null}

               <div className="mt-4 flex flex-wrap gap-2">
                  {item.verifyUrl ? (
                     <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                  inline-flex items-center rounded-full border border-[var(--border)]
                  px-3 py-1 text-xs text-[var(--text)]
                  hover:bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]
                  transition
                "
                     >
                        Ir a credencial
                     </a>
                  ) : null}

                  {item.image ? (
                     <a
                        href={item.image.src}
                        target="_blank"
                        rel="noreferrer"
                        className="
                  inline-flex items-center rounded-full border border-[var(--border)]
                  px-3 py-1 text-xs text-[var(--text)]
                  hover:bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]
                  transition
                "
                     >
                        Ver certificado
                     </a>
                  ) : null}
               </div>
            </div>

            {/* Right (issuer logo) */}
            {item.issuerLogo ? (
               <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)]">
                  <img
                     src={item.issuerLogo.src}
                     alt={item.issuerLogo.alt}
                     className="h-full w-full object-cover"
                     loading="lazy"
                  />
               </div>
            ) : null}
         </div>
      </Card>
   );
}
