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

   const timeframeLabel = formatProjectTimeframe(lang, project.timeframe);

   return (
      <Card className="group overflow-hidden border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)]/40 hover:shadow-md">
         {/* Cover clickeable */}
         <Link to={`/projects/${project.slug}`} className="block">
            {project.cover ? (
               <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)]">
                  <img
                     src={project.cover.src}
                     alt={project.cover.alt}
                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
               </div>
            ) : (
               <div className="h-24 w-full border-b border-[var(--border)] bg-[var(--bg)]/30" />
            )}
         </Link>

         <div className="p-4">
            <div className="flex items-start justify-between gap-3">
               <div className="min-w-0">
                  {/* Title clickeable */}
                  <Link to={`/projects/${project.slug}`}>
                     <h3 className="truncate text-sm font-semibold text-[var(--text)]">
                        {project.title}
                     </h3>
                  </Link>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
                     <span>{timeframeLabel}</span>
                  </div>
               </div>

               {/* LINKS externos OK */}
               <div className="flex items-center gap-2">
                  {github && (
                     <a href={github.href} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                     </a>
                  )}
                  {youtube && (
                     <a
                        href={youtube.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500"
                     >
                        <Youtube className="h-4 w-4" />
                     </a>
                  )}
                  {live && (
                     <a
                        href={live.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--text)]"
                     >
                        <ExternalLink className="h-4 w-4" />
                     </a>
                  )}
               </div>
            </div>

            <p className="mt-3 text-sm text-[var(--muted)]">
               {project.summary}
            </p>

            {/* CTA separado */}
            <Link
               to={`/projects/${project.slug}`}
               className="mt-4 inline-block text-xs"
            >
               {lang === "es" ? "Ver detalle →" : "View details →"}
            </Link>
         </div>
      </Card>
   );
}
