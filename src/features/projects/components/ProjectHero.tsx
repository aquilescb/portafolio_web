import { motion } from "framer-motion";
import type { ProjectDetail } from "../../../entities/project/types";
import { useContentLang } from "../../../shared/hooks/useContentLang";

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

   return (
      <motion.section
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.35 }}
         className="space-y-4 pb-5"
      >
         {/* Cover */}
         {project.cover && (
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
               <div className="relative aspect-[16/9] w-full">
                  <img
                     src={project.cover.src}
                     alt={project.cover.alt}
                     className="h-full w-full object-cover"
                     loading="eager"
                     decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
               </div>
            </div>
         )}

         <div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl text-center">
               {project.title}
            </h1>

            <p className="mt-3 text-sm text-[var(--muted)]">
               {project.summary}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
               <span>{timeframeLabel}</span>

               {ongoing && (
                  <span className="rounded-full border border-[var(--border)] bg-[var(--bg)]/40 px-2 py-0.5">
                     {lang === "es" ? "En curso" : "Ongoing"}
                  </span>
               )}

               {project.role && (
                  <span className="truncate">{project.role}</span>
               )}
            </div>
         </div>
      </motion.section>
   );
}
