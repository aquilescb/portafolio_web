import { Link } from "react-router-dom";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { Card } from "../../shared/ui/primitives/Card";
import type { ProjectPreview, ProjectLink } from "./types";
import { useContentLang } from "../../shared/hooks/useContentLang";

function getLink(links: readonly ProjectLink[], kind: ProjectLink["kind"]) {
   return links.find((l) => l.kind === kind);
}

function formatProjectTimeframe(
   lang: "es" | "en",
   tf: { start: string; end?: string },
) {
   // soporta "YYYY-MM" o "YYYY-MM-DD"
   const sy = tf.start.slice(0, 4);
   if (!tf.end) return lang === "es" ? `${sy} — Actualidad` : `${sy} — Present`;
   const ey = tf.end.slice(0, 4);
   return sy === ey ? sy : `${sy} — ${ey}`;
}

export function ProjectCard({ project }: { project: ProjectPreview }) {
   const lang = useContentLang();

   const github = getLink(project.links, "github");
   const youtube = getLink(project.links, "youtube");
   const live = getLink(project.links, "live");

   const ongoing = !project.timeframe.end;
   const timeframeLabel = formatProjectTimeframe(lang, project.timeframe);

   return (
      <Card className="group overflow-hidden border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl transition-shadow hover:shadow-md">
         <Link to={`/projects/${project.slug}`} className="block">
            {/* Cover */}
            {project.cover ? (
               <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)]">
                  <img
                     src={project.cover.src}
                     alt={project.cover.alt}
                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                     loading="lazy"
                     decoding="async"
                  />
                  {/* subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
               </div>
            ) : (
               <div className="h-24 w-full border-b border-[var(--border)] bg-[var(--bg)]/30" />
            )}

            <div className="p-4">
               {/* Top row: title + badges */}
               <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                     <h3 className="truncate text-sm font-semibold text-[var(--text)]">
                        {project.title}
                     </h3>

                     <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
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

                  {/* CTA icons */}
                  <div className="flex items-center gap-2">
                     {github && (
                        <a
                           href={github.href}
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 text-blue-500 transition-colors hover:bg-[var(--bg)]/60"
                           aria-label={github.label ?? "GitHub"}
                           onClick={(e) => e.stopPropagation()}
                        >
                           <Github className="h-4 w-4" />
                        </a>
                     )}

                     {youtube && (
                        <a
                           href={youtube.href}
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 text-red-500 transition-colors hover:bg-[var(--bg)]/60"
                           aria-label={youtube.label ?? "YouTube"}
                           onClick={(e) => e.stopPropagation()}
                        >
                           <Youtube className="h-4 w-4" />
                        </a>
                     )}

                     {live && (
                        <a
                           href={live.href}
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 text-[var(--text)] transition-colors hover:bg-[var(--bg)]/60"
                           aria-label={live.label ?? "Live"}
                           onClick={(e) => e.stopPropagation()}
                        >
                           <ExternalLink className="h-4 w-4" />
                        </a>
                     )}
                  </div>
               </div>

               {/* Summary */}
               <p className="mt-3 line-clamp-2 text-sm text-[var(--muted)]">
                  {project.summary}
               </p>

               {/* Hint */}
               <div className="mt-4 text-xs text-[var(--muted)]">
                  {lang === "es" ? "Ver detalle →" : "View details →"}
               </div>
            </div>
         </Link>
      </Card>
   );
}
