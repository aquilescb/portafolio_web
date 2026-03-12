import type { ProjectLink } from "../../../entities/project/types";
import { Card } from "../../../shared/ui/primitives/Card";
import { Github, ExternalLink, Youtube } from "lucide-react";

function iconFor(kind: ProjectLink["kind"]) {
   switch (kind) {
      case "github":
         return Github;
      case "youtube":
         return Youtube;
      default:
         return ExternalLink;
   }
}

function colorClassFor(kind: ProjectLink["kind"]) {
   switch (kind) {
      case "github":
         return "text-blue-500";
      case "youtube":
         return "text-red-500";
      default:
         return "text-[var(--text)]";
   }
}

type ResourceLinksProps = {
   links: readonly ProjectLink[];
   title?: string;
};

export function ResourceLinks({
   links,
   title = "Recursos",
}: ResourceLinksProps) {
   if (!links || links.length === 0) return null;

   return (
      <Card variant="glass" className="p-5">
         <h2 className="text-base font-semibold">{title}</h2>

         <div className="mt-3 grid gap-2">
            {links.map((l) => {
               const Icon = iconFor(l.kind);
               const color = colorClassFor(l.kind);

               return (
                  <a
                     key={`${l.kind}:${l.href}`}
                     href={l.href}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 px-3 py-2 text-sm hover:bg-[var(--bg)]/60"
                  >
                     <span className={`flex items-center gap-2 ${color}`}>
                        <Icon className="h-4 w-4" />
                        {l.label ?? l.kind}
                     </span>

                     <ExternalLink className="h-4 w-4 text-[var(--muted)]" />
                  </a>
               );
            })}
         </div>
      </Card>
   );
}