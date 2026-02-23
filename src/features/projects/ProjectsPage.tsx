import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { useContentLang } from "../../shared/hooks/useContentLang";
import { getProjects } from "../../content/projects";
import { ProjectCard } from "../../entities/project/ProjectCard";
import type { ProjectPreview } from "../../entities/project/types";
import { Card } from "../../shared/ui/primitives/Card";

function sortProjectsForGrid(list: readonly ProjectPreview[]) {
   return [...list].sort((a, b) => {
      const ao = !a.timeframe.end;
      const bo = !b.timeframe.end;
      if (ao !== bo) return ao ? -1 : 1;

      const aKey = a.timeframe.end ?? a.timeframe.start;
      const bKey = b.timeframe.end ?? b.timeframe.start;
      return bKey.localeCompare(aKey);
   });
}

export function ProjectsPage() {
   const { t } = useTranslation();
   const lang = useContentLang();

   usePageMeta({
      title: t("meta.projects.title"),
      description: t("meta.projects.desc"),
      path: "/projects",
   });

   const projects = useMemo(() => {
      const list = getProjects(lang);
      return sortProjectsForGrid(list);
   }, [lang]);

   return (
      <section className="space-y-8">
         <div>
            <h1 className="text-2xl font-semibold">{t("projects.title")}</h1>
         </div>

         {projects.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
               {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
               ))}
            </div>
         ) : (
            <Card
               variant="glass"
               className="p-8 text-center text-sm text-[var(--muted)]"
            >
               {t("projects.empty")}
            </Card>
         )}
      </section>
   );
}
