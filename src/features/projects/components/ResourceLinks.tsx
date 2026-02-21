import type { ProjectLink } from "../../../entities/project/types";
import { Card } from "../../../shared/ui/primitives/Card";
import { Github, ExternalLink, FileText, Video } from "lucide-react";

function iconFor(kind: ProjectLink["kind"]) {
   switch (kind) {
      case "github":
         return Github;
      case "docs":
         return FileText;
      case "video":
         return Video;
      default:
         return ExternalLink;
   }
}

export function ResourceLinks({ links }: { links: ProjectLink[] }) {
   if (!links || links.length === 0) return null;

   return (
      <Card className="p-5">
         <h2 className="text-base font-semibold">Recursos</h2>
         <div className="mt-3 grid gap-2">
            {links.map((l) => {
               const Icon = iconFor(l.kind);
               return (
                  <a
                     key={l.href}
                     href={l.href}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm hover:bg-[var(--surface)]"
                  >
                     <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {l.label}
                     </span>
                     <ExternalLink className="h-4 w-4 text-[var(--muted)]" />
                  </a>
               );
            })}
         </div>
      </Card>
   );
}
