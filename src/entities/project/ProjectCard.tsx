import { Link } from "react-router-dom";
import type { Project } from "./types";
import { Card } from "../../shared/ui/primitives/Card";
import { Github, ExternalLink } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
   const github = project.links.find((l) => l.kind === "github");

   return (
      <Card className="p-4 hover:shadow-md transition-shadow">
         <div className="flex items-start justify-between gap-3">
            <Link to={`/projects/${project.slug}`} className="min-w-0">
               <h3 className="truncate text-sm font-semibold">
                  {project.title}
               </h3>
               <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                  {project.summary}
               </p>
            </Link>

            <div className="flex items-center gap-2">
               {github && (
                  <a
                     href={github.href}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface)]"
                     aria-label="GitHub"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <Github className="h-4 w-4" />
                  </a>
               )}
               <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface)]"
                  aria-label="View details"
               >
                  <ExternalLink className="h-4 w-4" />
               </Link>
            </div>
         </div>

         <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
               <span
                  key={t}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)]"
               >
                  {t}
               </span>
            ))}
         </div>
      </Card>
   );
}
