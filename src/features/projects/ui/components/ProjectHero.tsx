import { motion } from "framer-motion";
import { Card } from "../../../../shared/ui/primitives/Card";
import type { Project } from "../../../../entities/project/model/types";
import { Github, ExternalLink } from "lucide-react";

export function ProjectHero({ project }: { project: Project }) {
   const github = project.links.find((l) => l.kind === "github");
   const demo = project.links.find((l) => l.kind === "demo");

   return (
      <motion.section
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.35 }}
         className="space-y-4"
      >
         <div>
            <p className="text-sm text-[var(--muted)]">Proyecto</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
               {project.title}
            </h1>
            <p className="mt-3 text-sm text-[var(--muted)]">
               {project.summary}
            </p>
         </div>

         <Card className="p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
               <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                     <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)]"
                     >
                        {t}
                     </span>
                  ))}
               </div>

               <div className="flex gap-2">
                  {github && (
                     <a
                        href={github.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm hover:bg-[var(--surface)]"
                     >
                        <Github className="h-4 w-4" />
                        GitHub
                     </a>
                  )}

                  {demo && (
                     <a
                        href={demo.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm hover:bg-[var(--surface)]"
                     >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                     </a>
                  )}
               </div>
            </div>

            {(project.role || project.timeframe) && (
               <div className="mt-4 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                  {project.role && (
                     <div>
                        <span className="text-[var(--text)] font-medium">
                           Rol:
                        </span>{" "}
                        {project.role}
                     </div>
                  )}
                  {project.timeframe && (
                     <div>
                        <span className="text-[var(--text)] font-medium">
                           Fechas:
                        </span>{" "}
                        {project.timeframe}
                     </div>
                  )}
               </div>
            )}
         </Card>
      </motion.section>
   );
}
