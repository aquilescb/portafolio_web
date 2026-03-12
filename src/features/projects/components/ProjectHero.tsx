import { motion } from "framer-motion";
import type { ProjectDetail } from "../../../entities/project/types";
import { useContentLang } from "../../../shared/hooks/useContentLang";
import { STACK } from "../../../entities/stack/stack";

function formatProjectTimeframe(
   lang: "es" | "en",
   tf: { start: string; end?: string },
) {
   const sy = tf.start.slice(0, 4);
   if (!tf.end) return lang === "es" ? `${sy} — Actualidad` : `${sy} — Present`;
   const ey = tf.end.slice(0, 4);
   return sy === ey ? sy : `${sy} — ${ey}`;
}

export function ProjectHero({ project }: { project: ProjectDetail }) {
   const lang = useContentLang();

   const ongoing = !project.timeframe.end;
   const timeframeLabel = formatProjectTimeframe(lang, project.timeframe);

   const technologies = project.technologies ?? project.tech ?? [];
   const techItems = STACK.filter((item) => technologies.includes(item.key));

   return (
      <motion.section
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.35 }}
         className="space-y-6 pb-2"
      >
         <div className="space-y-4">
            <div className="space-y-3 text-center">
               <h1 className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
                  {project.title}
               </h1>

               <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  {project.summary}
               </p>

               <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--muted)]">
                  <span>{timeframeLabel}</span>

                  {ongoing && (
                     <span className="rounded-full border border-[var(--border)] bg-[var(--bg)]/40 px-2 py-0.5">
                        {lang === "es" ? "En curso" : "Ongoing"}
                     </span>
                  )}

                  {project.role && (
                     <span className="rounded-full border border-[var(--border)] bg-[var(--bg)]/40 px-2 py-0.5">
                        {project.role}
                     </span>
                  )}
               </div>

               {techItems.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                     {techItems.map((tech) => (
                        <div
                           key={tech.key}
                           className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1.5 text-xs text-[var(--text)]"
                        >
                           <img
                              src={tech.icon}
                              alt={tech.label}
                              className="h-4 w-4 shrink-0"
                              loading="lazy"
                              decoding="async"
                           />
                           <span>{tech.label}</span>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>

         {project.cover && (
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 shadow-sm">
               <div className="relative aspect-[16/9] w-full">
                  <img
                     src={project.cover.src}
                     alt={project.cover.alt}
                     className="h-full w-full object-cover"
                     loading="eager"
                     decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
               </div>
            </div>
         )}
      </motion.section>
   );
}