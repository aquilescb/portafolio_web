import { useMemo, useState } from "react";
import { usePageMeta } from "../../../shared/hooks/usePageMeta";
import { useI18n } from "../../../app/providers/useI18n";
import { projects, getAllTech } from "../../../content/projects";
import type { ProjectTech } from "../../../entities/project/model/types";
import { ProjectCard } from "../../../entities/project/ui/ProjectCard";
import { Card } from "../../../shared/ui/primitives/Card";

export function ProjectsPage() {
   const { t } = useI18n();

   usePageMeta({
      title: t("meta.projects.title"),
      description: t("meta.projects.desc"),
      path: "/projects",
   });

   const [search, setSearch] = useState("");
   const [techFilter, setTechFilter] = useState<ProjectTech | null>(null);

   const techOptions = useMemo(() => getAllTech() as ProjectTech[], []);

   const filtered = useMemo(() => {
      const q = search.trim().toLowerCase();

      return projects.filter((p) => {
         const matchesSearch =
            q.length === 0 ||
            p.title.toLowerCase().includes(q) ||
            p.summary.toLowerCase().includes(q);

         const matchesTech = techFilter ? p.tech.includes(techFilter) : true;

         return matchesSearch && matchesTech;
      });
   }, [search, techFilter]);

   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">{t("projects.title")}</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
               {t("projects.subtitle")}
            </p>
         </div>

         <Card className="space-y-4 p-4">
            <input
               type="text"
               placeholder={t("projects.search")}
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--primary-soft)]"
            />

            <div className="flex flex-wrap gap-2">
               <button
                  type="button"
                  onClick={() => setTechFilter(null)}
                  className={`rounded-full border px-3 py-1 text-xs ${
                     techFilter === null
                        ? "bg-[var(--primary)] text-white border-transparent"
                        : "border-[var(--border)] bg-[var(--bg)] text-[var(--muted)]"
                  }`}
               >
                  {t("projects.all")}
               </button>

               {techOptions.map((tech) => (
                  <button
                     key={tech}
                     type="button"
                     onClick={() => setTechFilter(tech)}
                     className={`rounded-full border px-3 py-1 text-xs ${
                        techFilter === tech
                           ? "bg-[var(--primary)] text-white border-transparent"
                           : "border-[var(--border)] bg-[var(--bg)] text-[var(--muted)]"
                     }`}
                  >
                     {tech}
                  </button>
               ))}
            </div>
         </Card>

         {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
               {filtered.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
               ))}
            </div>
         ) : (
            <Card className="p-8 text-center text-sm text-[var(--muted)]">
               {t("projects.empty")}
            </Card>
         )}
      </section>
   );
}
