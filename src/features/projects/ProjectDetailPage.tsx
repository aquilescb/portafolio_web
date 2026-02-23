import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { getProjectDetail } from "../../content/projects";
import { useContentLang } from "../../shared/hooks/useContentLang";
import { Card } from "../../shared/ui/primitives/Card";
import { ProjectHero } from "./components/ProjectHero";
import { ProjectSection } from "./components/ProjectSection";
import { ResourceLinks } from "./components/ResourceLinks";
import { MotionSection } from "../../shared/ui/layout/MotionSection";
import { usePageMeta } from "../../shared/hooks/usePageMeta";

export function ProjectDetailPage() {
   const { slug } = useParams<{ slug: string }>();
   const { t } = useTranslation();
   const lang = useContentLang();

   const project = useMemo(() => {
      if (!slug) return undefined;
      return getProjectDetail(lang, slug) ?? undefined;
   }, [lang, slug]);

   usePageMeta({
      title: project ? project.title : t("meta.projectNotFound.title"),
      description: project ? project.summary : t("meta.projectNotFound.desc"),
      path: slug ? `/projects/${slug}` : "/projects",
   });

   if (!project) {
      return (
         <section className="space-y-4">
            <h1 className="text-2xl font-semibold">
               {t("projects.notFound.title")}
            </h1>

            <Card variant="glass" className="p-5 text-sm text-[var(--muted)]">
               {t("projects.notFound.desc")}
               <div className="mt-3">
                  <Link
                     className="text-[var(--primary)] hover:underline"
                     to="/projects"
                  >
                     {t("common.backToProjects")}
                  </Link>
               </div>
            </Card>
         </section>
      );
   }

   const problem = project.problem ?? t("projects.detail.placeholders.problem");
   const solution =
      project.solution ?? t("projects.detail.placeholders.solution");

   const results = project.results?.length
      ? project.results
      : [t("projects.detail.placeholders.results")];
   const resources = project.resources?.length
      ? project.resources
      : project.links;

   return (
      <div className="space-y-10">
         <MotionSection>
            <ProjectHero project={project} />

            <ProjectSection title={t("projects.detail.sections.problem")}>
               {problem}
            </ProjectSection>

            <ProjectSection title={t("projects.detail.sections.solution")}>
               {solution}
            </ProjectSection>

            <ProjectSection title={t("projects.detail.sections.results")}>
               <ul className="list-disc space-y-1 pl-5">
                  {results.map((r, idx) => (
                     <li key={idx}>{r}</li>
                  ))}
               </ul>
            </ProjectSection>
         </MotionSection>

         <ResourceLinks links={resources} />
      </div>
   );
}
